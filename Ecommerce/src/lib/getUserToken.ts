"use server";

import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextAuthConfig } from "./auth/nextAuth";

export async function getDecodedUserToken() {
  const session = await getServerSession(NextAuthConfig);
  console.log(session, "session ");

  return (session as any)?.accessToken;
}
