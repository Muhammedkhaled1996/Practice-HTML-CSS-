"use server";

import { getDecodedUserToken } from "@/src/lib/getUserToken";
import { redirect } from "next/navigation";

export interface updateUserPasswordResponce {
  message: string;
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export interface passwordValues {
  currentPassword: string;
  password: string;
  rePassword: string;
}

// update user data
export async function updateUserPasswordHandler(
  values: passwordValues,
): Promise<updateUserPasswordResponce | null> {
  const token = await getDecodedUserToken();
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
      {
        method: "PUT",
        headers: {
          token: token as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      },
    );

    console.log(res, "res res res");

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error in updateUserPasswordHandler:", error);
    return null;
  }
}
