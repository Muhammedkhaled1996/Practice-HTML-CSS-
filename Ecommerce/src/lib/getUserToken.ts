// "use server";

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// // __Secure-next-auth.session-token

// export async function getDecodedUserToken() {
//   const cookie = await cookies();
//   const cookieName = process.env.NEXT_AUTH_COOKIE;
//   const token = cookieName ? cookie.get(cookieName)?.value : undefined;
//   const decodedToken = await decode({
//     token: token,
//     secret: process.env.NEXTAUTH_SECRET as string,
//   });

//   console.log(decodedToken , "decodedToken");

//   return decodedToken?.accessToken;
// }

"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedUserToken() {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("__Secure-next-auth.session-token")?.value ||
      cookieStore.get("__Host-next-auth.session-token")?.value ||
      cookieStore.get("next-auth.session-token")?.value;

    if (!token) return null;

    const decodedToken = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return decodedToken?.accessToken ?? null;
  } catch (error) {
    console.error("Token decode error:", error);
    return null;
  }
}
