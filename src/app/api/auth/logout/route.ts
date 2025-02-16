import { NextResponse } from "next/server";

async function handleLogout(cookieName: string) {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set({
    name: cookieName,
    value: "",
    expires: new Date(0),
    path: "/",
  });

  return response;
}

export async function ADMIN() {
  return handleLogout("AdminToken");
}

export async function LENDER() {
  return handleLogout("LenderToken");
}

export async function BORROWER() {
  return handleLogout("BorrowerToken");
}
