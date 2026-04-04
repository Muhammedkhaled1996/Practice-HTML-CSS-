"use server";

export interface loginFormValues {
  email: string;
  password: string;
}

// handle login submit action
export async function handleLoginSubmitAction(values: loginFormValues) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/signin`,
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
    return data.message;
  }

  return data.message;
}
