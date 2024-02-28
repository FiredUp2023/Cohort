import { z } from "zod";

export const signupInput = z.object({
    username: z.string(),
    password: z.string(),
});

export type signupSchema = z.infer<typeof signupInput>;
