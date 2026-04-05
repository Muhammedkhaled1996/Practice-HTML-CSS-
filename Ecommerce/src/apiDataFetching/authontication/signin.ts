"use server";

export interface loginFormValues {
  email: string;
  password: string;
}

// handle login submit action
export async function handleLoginSubmitAction(values: loginFormValues) {
  try {
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

    if (res.ok && data.message === "success") {
      return data.message;
    }

    return data.message || "An error occurred during sign in.";
  } catch (error) {
    console.error("Error in handleLoginSubmitAction:", error);
    return "An error occurred. Please try again later.";
  }
}
