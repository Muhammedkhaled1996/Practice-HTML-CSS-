"use server";

import { getDecodedUserToken } from "@/src/lib/getUserToken";

export interface updateUserDataResponce {
  message: string;
  user: UserData;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  role?: string;
}

// update user data
export async function updateUserDataHandler(
  values: UserData,
): Promise<updateUserDataResponce | null> {
  const token = await getDecodedUserToken();
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
      {
        method: "PUT",
        headers: {
          token: token as string,
        },
        body: JSON.stringify(values),
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    console.log(data , "from user data update");
    
    return data;
  } catch (error) {
    console.error("Error in verifyTokenHandler:", error);
    return null;
  }
}
