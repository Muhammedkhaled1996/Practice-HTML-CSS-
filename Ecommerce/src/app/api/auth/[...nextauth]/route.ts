import { NextAuthConfig } from "@/src/lib/auth/nextAuth";
import NextAuth from "next-auth";

const handler = NextAuth(NextAuthConfig);

export { handler as GET, handler as POST };
