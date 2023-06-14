import { z } from 'zod';
import { userCoursesSchema } from '../schemas/userCourses.schema';

export type TUserCourses = z.infer<typeof userCoursesSchema>;
