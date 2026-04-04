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

// create cash order
export async function verifyTokenHandler() {
  const token = await getDecodedUserToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/verifyToken`,
    {
      method: "GET",
      headers: {
        token: token as any,
      },
    },
  );
  const data: verifyTokenInterface = await res.json();
  console.log(data, "data from checkout action");

  return data;
}
