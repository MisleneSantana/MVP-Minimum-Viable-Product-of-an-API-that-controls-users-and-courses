import { NextFunction, Request, Response } from 'express';
import { TUserCourseResult } from '../interfaces/userCourses.interface';
import { client } from '../database';
import { IUser, TUserResult } from '../interfaces/user.interface';
import { AppError } from '../error';

export const verifyIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { id } = req.params;

  const queryResult: TUserResult = await client.query('SELECT * FROM "users" WHERE id = $1;', [id]);

  const userId: IUser = queryResult.rows[0];
  if (!userId) {
    throw new AppError('User not found.', 404);
  }
  return next();
};
