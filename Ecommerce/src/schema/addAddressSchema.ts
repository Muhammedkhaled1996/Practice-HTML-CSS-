import z from "zod";

export const addAddressSchema = z.object({
  name: z
    .string()
    .nonempty("Email is required")
    .min(3, "min Charactars is 3 chars")
    .max(100, "max Charactars is 100 chars"),
  details: z
    .string()
    .nonempty("Password is required")
    .min(3, "min Charactars is 3 chars")
    .max(200, "max Charactars is 100 chars"),
  phone: z
    .string()
    .nonempty("Password is required")
    .min(3, "min Charactars is 3 chars")
    .max(100, "max Charactars is 100 chars"),
  city: z
    .string()
    .nonempty("Password is required")
    .min(3, "min Charactars is 3 chars")
    .max(100, "max Charactars is 100 chars"),
});
