import { z } from 'zod';

export const sessionLoginCreateSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().max(120),
});
