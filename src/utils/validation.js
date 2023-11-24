import { z } from "zod";

export const User = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    date: z.number()
})