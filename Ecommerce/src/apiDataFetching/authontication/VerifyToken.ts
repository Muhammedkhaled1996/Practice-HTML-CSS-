"use server";

import { getDecodedUserToken } from "@/src/lib/getUserToken";

export interface verifyTokenInterface {
  message: string;
  decoded: Decoded;
}

export interface Decoded {
  id: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

// verify token handler
export async function verifyTokenHandler(): Promise<verifyTokenInterface | null> {
  const token = await getDecodedUserToken();
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyToken`,
      {
        method: "GET",
        headers: {
          token: token as string,
        },
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in verifyTokenHandler:", error);
    return null;
  }
}
