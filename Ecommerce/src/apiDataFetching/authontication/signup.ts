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
  try {
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

    if (data.message === "success") {
      return data.message;
    }

    return data.message || "An error occurred during registration.";
  } catch (error) {
    console.error("Error in handleRegisterSubmitAction:", error);
    return "An error occurred. Please try again later.";
  }
}
