import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

type TokenPayload = {
  Id: string;
  iat?: number;
  exp?: number;
};

export async function GET(req: NextRequest) {
  const refreshToken = req.cookies.get("BorrowerToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ valid: false });
  }

  try {
    const payload = jwt.verify(
      refreshToken,
      process.env.NEXT_PUBLIC_SESSION_SECRET as string,
    ) as TokenPayload;

    const name = await prisma.borrowerUser.findUnique({
      where: { id: payload.Id },
      select: { name: true },
    });

    const response = NextResponse.json({
      valid: true,
      userId: payload.Id,
      name: name?.name,
    });

    return response;
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ valid: false });
  }
}
