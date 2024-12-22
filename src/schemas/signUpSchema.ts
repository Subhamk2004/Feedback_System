import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

// This file is for validation in the frontend(mainly) or backend.
// It is used to validate the data before storing it in the databaseor sending to the server.