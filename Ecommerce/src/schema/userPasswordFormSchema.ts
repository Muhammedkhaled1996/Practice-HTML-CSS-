import z from "zod";

export const userPasswordSchema = z.object({
  currentPassword: z
    .string()
    .nonempty("Current Password is required")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
  password: z
    .string()
    .nonempty("New Password is required")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
  rePassword: z
    .string()
    .nonempty("Confirm Password is required")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
});
