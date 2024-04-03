import { z } from "zod"

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const signUpFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters."
  })
})