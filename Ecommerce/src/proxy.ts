import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const myPath = req.nextUrl.pathname;
  const protectedPaths = [
    "/cart",
    "/wishlist",
    "/profile",
    "/allorders",
    "/checkout",
  ];
  const authPages = ["/login", "/register"];

  // لو المستخدم مش عامل login ويحاول يدخل صفحة محمية
  if (!token && protectedPaths.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // لو المستخدم عامل login ويحاول يدخل login أو register
  if (token && authPages.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart/:path*",
    "/wishlist/:path*",
    "/profile/:path*",
    "/allorders/:path*",
    "/checkout/:path*",
    "/login",
    "/register",
  ],
};
