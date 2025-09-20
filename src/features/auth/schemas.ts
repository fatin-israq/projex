import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "Password required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name required"),
  email: z.string().trim().email(),
  password: z.string().min(6, "Minimum of 6 characters required"),
});
