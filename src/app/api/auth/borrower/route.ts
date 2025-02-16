import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SESSION_EXPIRY = "6h"; // Long-lived token
const SESSION_SECRET = process.env.NEXT_PUBLIC_SESSION_SECRET!; // Separate secret for token

export async function GET(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.borrowerUser.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { error: "Please login using google" },
        { status: 401 },
      );
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    // Generate Tokens
    const session = jwt.sign({ Id: user.id }, SESSION_SECRET, {
      expiresIn: SESSION_EXPIRY,
    });

    // Set refresh token as an HTTP-only cookie
    const response = NextResponse.json({
      message: "Registered Succesfully",
    });

    response.cookies.set({
      name: "BorrowerToken",
      value: session,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 6 // 6 Hours
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Check if email doesn't already exist
    const checkEmail = await prisma.borrowerUser.findUnique({ where: { email } });
    if (checkEmail) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generating random User ID
    let randomId = Math.floor(1000000000 + Math.random() * 9000000000);

    while (
      await prisma.borrowerUser.findUnique({ where: { id: randomId.toString() } })
    ) {
      randomId = Math.floor(1000000000 + Math.random() * 9000000000);
    }

    const newUser = await prisma.borrowerUser.create({
      data: {
        id: randomId.toString(),
        name,
        email,
        password: hashedPassword,
      },
    });

    // Generate Tokens
    const session = jwt.sign({ Id: randomId.toString() }, SESSION_SECRET, {
      expiresIn: SESSION_EXPIRY,
    });

    // Set refresh token as an HTTP-only cookie
    const response = NextResponse.json({
      message: "Registered Succesfully",
      user: newUser,
    });

    response.cookies.set({
      name: "BorrowerToken",
      value: session,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 6, // 6 hours
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: typeof error === "string" ? error : "Failed to register user" },
      { status: 500 },
    );
  }
}
