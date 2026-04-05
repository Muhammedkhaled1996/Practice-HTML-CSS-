"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedUserToken() {
  const cookie = await cookies();
  const token = cookie.get("next-auth.session-token")?.value;
  const decodedToken = await decode({
    token: token,
    secret: process.env.NEXTAUTH_SECRET as string,
  });
  return decodedToken?.accessToken;
}
