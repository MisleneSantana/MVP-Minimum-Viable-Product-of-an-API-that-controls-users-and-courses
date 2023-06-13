import { z } from 'zod';
import {
  userCreateOutputSchema,
  userCreateSchema,
  userReadSchema,
  userSchema,
  userUpdateSchema,
} from '../schemas/user.schema';
import { QueryResult } from 'pg';

export type TUser = z.infer<typeof userSchema>;

export type TUserCreate = z.infer<typeof userCreateSchema>;
export type TUserCreateOutput = z.infer<typeof userCreateOutputSchema>;
export type TUserRead = z.infer<typeof userReadSchema>;
export type TUserUpdate = z.infer<typeof userUpdateSchema>;
export type TUserResult = QueryResult<TUser>;
