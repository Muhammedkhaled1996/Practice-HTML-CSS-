import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Username is required")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    rePassword: z
      .string()
      .nonempty("Repassword is required")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    phone: z
      .string()
      .nonempty("Phone is required")
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Must be egyption number")
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
});
