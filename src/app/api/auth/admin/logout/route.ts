import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set({
    name: "AdminToken",
    value: "",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
