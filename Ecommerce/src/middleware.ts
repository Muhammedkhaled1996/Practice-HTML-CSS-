import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cart/:path*", "/orders/:path*"],
};