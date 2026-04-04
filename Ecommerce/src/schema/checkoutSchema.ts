import { z } from "zod";

export const checkoutSchema = z.object({
  shippingAddress: z.object({
    city: z
      .string()
      .nonempty("City is required")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    details: z
      .string()
      .nonempty("Details is required")
      .min(3, "Min Charactars is 3 chars")
      .max(100, "Max Charactars is 100 chars"),
    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Must be egyption number"),
    postalCode: z.string(),
  }),
});
