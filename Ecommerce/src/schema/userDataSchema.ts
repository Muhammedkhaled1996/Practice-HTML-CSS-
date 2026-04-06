import z from "zod";

export const userDataSchema = z.object({
  name: z
    .string()
    .nonempty("User name is required")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email")
    .min(3, "Min Charactars is 3 chars")
    .max(100, "Max Charactars is 100 chars"),
  phone: z
    .string()
    .nonempty("Password is required")
    .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Must be egyption number"),
});
