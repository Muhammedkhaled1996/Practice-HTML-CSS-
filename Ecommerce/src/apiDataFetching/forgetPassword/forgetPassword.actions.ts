"use server";

//  Forget Password API Call
interface ForgetPasswordResponce {
  statusMsg: string;
  message: string;
}

export async function ForgetPassword(
  email: string,
): Promise<ForgetPasswordResponce> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      },
    );
    const data = await res.json();

    console.log(data, "forget password");

    if (data.statusMsg === "success") {
      return data;
    } else {
      throw new Error(data.message || "Failed to send reset code");
    }

    return data;
  } catch (error) {
    console.error("Error in addToCartAction:", error);
    throw error;
  }
}

// Verify Password API Call
interface VerifyPasswordResponce {
  status: string;
}

export async function VerifyPassword(
  resetCode: string,
): Promise<VerifyPasswordResponce> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resetCode: resetCode,
        }),
      },
    );
    const data = await res.json();
    console.log(data, "verify password");

    return data;
  } catch (error) {
    console.error("Error in addToCartAction:", error);
    throw error;
  }
}

// reset Password API Call
interface UpdatePasswordResponce {
  token: string;
}

export async function UpdatePassword(
  values: { email: string; newPassword: string },
): Promise<UpdatePasswordResponce> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          newPassword: values.newPassword,
        }),
      },
    );
    const data = await res.json();

    if (data.token) {
      return data;
    } else {
      throw new Error(data.message || "Failed to reset password");
    }

    return data;
  } catch (error) {
    console.error("Error in addToCartAction:", error);
    throw error;
  }
}
