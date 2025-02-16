import {
  PrismaClient,
  AdminUser,
  LenderUser,
  BorrowerUser,
} from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type UserType = "adminUser" | "lenderUser" | "borrowerUser";

type OAuthResponse = {
  access_token?: string;
};

type GoogleUserResponse = {
  email?: string;
  name?: string;
};

const prisma = new PrismaClient();
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!;
const SESSION_SECRET = process.env.NEXT_PUBLIC_SESSION_SECRET!;
const SESSION_EXPIRY = "6h";

async function handleOAuth(
  req: Request,
  userType: UserType,
  tokenName: string,
) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    if (!code)
      return NextResponse.json({ error: "No code provided" }, { status: 400 });

    const tokenResponse: OAuthResponse = await fetch(
      "https://oauth2.googleapis.com/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_CLIENT_SECRET,
          code,
          grant_type: "authorization_code",
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        }),
      },
    ).then((res) => res.json());

    if (!tokenResponse.access_token)
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 500 },
      );

    const userResponse: GoogleUserResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      },
    ).then((res) => res.json());

    const { email, name } = userResponse;
    if (!email)
      return NextResponse.json({ error: "No email provided" }, { status: 400 });

    let user: AdminUser | LenderUser | BorrowerUser | null;

    if (userType === "adminUser") {
      user = await prisma.adminUser.findUnique({ where: { email } });
    } else if (userType === "lenderUser") {
      user = await prisma.lenderUser.findUnique({ where: { email } });
    } else {
      user = await prisma.borrowerUser.findUnique({ where: { email } });
    }

    if (!user && userType === "adminUser") {
      return NextResponse.json(
        { error: "Admin user not found" },
        { status: 404 },
      );
    } else if (!user) {
      let randomId: string;
      do {
        randomId = Math.floor(
          1000000000 + Math.random() * 9000000000,
        ).toString();
      } while (
        (await prisma.lenderUser.findUnique({ where: { id: randomId } })) ||
        (await prisma.borrowerUser.findUnique({ where: { id: randomId } }))
      );

      if (userType === "lenderUser") {
        user = await prisma.lenderUser.create({
          data: {
            id: randomId,
            name: name ?? "Unknown User",
            email,
            password: null,
          },
        });
      } else {
        user = await prisma.borrowerUser.create({
          data: {
            id: randomId,
            name: name ?? "Unknown User",
            email,
            password: null,
          },
        });
      }
    }

    const sessionToken = jwt.sign({ Id: user.id }, SESSION_SECRET, {
      expiresIn: SESSION_EXPIRY,
    });
    const response = NextResponse.json({
      message: "Logged in successfully",
      user,
    });

    response.cookies.set({
      name: tokenName,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 6,
      sameSite: "lax",
    });

    response.headers.set("Location", "/dashboard");
    return new NextResponse(null, { status: 302, headers: response.headers });
  } catch (error) {
    console.error("OAuth error:", error);
    return NextResponse.json({ error: "OAuth failed" }, { status: 500 });
  }
}

export async function ADMIN(req: Request) {
  return handleOAuth(req, "adminUser", "AdminToken");
}

export async function LENDER(req: Request) {
  return handleOAuth(req, "lenderUser", "LenderToken");
}

export async function BORROWER(req: Request) {
  return handleOAuth(req, "borrowerUser", "BorrowerToken");
}
