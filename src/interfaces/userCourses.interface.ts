import { z } from 'zod';
import { userCoursesCreateSchema, userCoursesSchema } from '../schemas/userCourses.schema';
import { QueryResult } from 'pg';

export type TUserCourses = z.infer<typeof userCoursesSchema>;
export type TUserCoursesCreate = z.infer<typeof userCoursesCreateSchema>;
export type TUserCoursesResult = QueryResult<TUserCourses>;
