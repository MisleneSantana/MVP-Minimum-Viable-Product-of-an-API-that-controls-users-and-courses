import { z } from 'zod';
import { QueryResult } from 'pg';
import { courseCreateSchema, courseReadSchema, courseSchema, courseUpdateSchema } from '../schemas/course.schema';

export type TCourse = z.infer<typeof courseSchema>;

export type TCourseCreate = z.infer<typeof courseCreateSchema>;

export type TCourseRead = z.infer<typeof courseReadSchema>;

export type TCourseUpdate = z.infer<typeof courseUpdateSchema>;

export type TCourseResult = QueryResult<TCourse>;
