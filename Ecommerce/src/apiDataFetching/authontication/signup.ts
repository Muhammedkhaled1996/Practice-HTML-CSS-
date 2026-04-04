"use server";

import { cookies } from "next/headers";

export interface registerFormValues {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

// handle register submit action
export async function handleRegisterSubmitAction(values: registerFormValues) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/signup`,
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  console.log(data, "data from server component action");

  if (data.message === "success") {
    // const cookie = await cookies();
    // cookie.set("token", data.token, {
    //   httpOnly: true,
    //   sameSite: "strict",
    //   maxAge: 60 * 60 * 7,
    // });
    return data.message;
  }

  return data.message;
}
