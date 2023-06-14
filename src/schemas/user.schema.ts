import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  admin: z.boolean().default(() => false),
});

export const userCreateSchema = userSchema.omit({ id: true });

export const userCreateReturnSchema = userSchema.omit({ password: true });

export const userReadSchema = userCreateReturnSchema.array();

export const userUpdateSchema = userCreateSchema.partial();
