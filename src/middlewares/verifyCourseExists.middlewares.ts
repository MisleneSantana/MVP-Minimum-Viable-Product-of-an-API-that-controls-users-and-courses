import { NextFunction, Request, Response } from 'express';
import { TCourse, TCourseResult } from '../interfaces/course.interface';
import { client } from '../database';
import { AppError } from '../error';

export const verifyCourseExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { courseId } = req.params;

  const queryResult: TCourseResult = await client.query('SELECT * FROM "courses" WHERE id = $1;', [courseId]);
  const courseExists: TCourse = queryResult.rows[0];

  if (!courseExists) {
    throw new AppError('User/course not found', 404);
  }
  return next();
};
