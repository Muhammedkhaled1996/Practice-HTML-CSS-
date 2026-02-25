import * as zod from "zod";

// register schema
export const RegisterSchema = zod
  .object({
    name: zod.string().nonempty("Full name is required."),
    username: zod
      .string()
      .regex(
        /^[a-z0-9_]{3,30}$/,
        `3–30 chars, lowercase letters, numbers, or _ only.`,
      ),
    email: zod
      .string()
      .nonempty("Email is required.")
      .regex(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address.",
      ),
    password: zod
      .string()
      .nonempty("Password is required.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character.",
      ),
    rePassword: zod.string().nonempty("Please confirm your password."),
    dateOfBirth: zod
      .string()
      .nonempty("Date of birth is required.")
      .refine((date) => {
        const userDate = new Date(date);
        const currentDate = new Date();
        if (currentDate.getFullYear() - userDate.getFullYear() >= 18) {
          return true;
        } else {
          return false;
        }
      }, "You are not allowed to access this website only +18 years allowed."),
    gender: zod.enum(["male", "female"]),
  })
  .refine(
    (object) => {
      if (object.password === object.rePassword) {
        return true;
      } else {
        return false;
      }
    },
    { error: "Passwords do not match.", path: ["rePassword"] },
  );

// login schema
export const LoginSchema = zod.object({
  email: zod
    .email("Invalid Email")
    .nonempty("Email or username is required.")
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Not Match Email Pattern"),
  password: zod
    .string()
    .nonempty("Password is required.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
      "Password must include uppercase, lowercase, number, and special character.",
    ),
});

// Password change schema
export const PasswordChangeSchema = zod
  .object({
    password: zod
      .string()
      .nonempty("Old password is required.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character.",
      ),
    newPassword: zod
      .string()
      .nonempty("New password is required.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character.",
      ),
    confirmNewPassword: zod
      .string()
      .nonempty("Please confirm your new password."),
  })
  .refine(
    (object) => {
      if (object.newPassword === object.confirmNewPassword) {
        return true;
      } else {
        return false;
      }
    },
    { error: "New passwords do not match.", path: ["confirmNewPassword"] },
  );
