"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

// __Secure-next-auth.session-token

export async function getDecodedUserToken() {
  const cookie = await cookies();
  const cookieName = process.env.NEXT_AUTH_COOKIE;
  const token = cookieName ? cookie.get(cookieName)?.value : undefined;
  const decodedToken = await decode({
    token: token,
    secret: process.env.NEXTAUTH_SECRET as string,
  });
  return decodedToken?.accessToken;
}
