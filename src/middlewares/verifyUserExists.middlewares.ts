import { NextFunction, Request, Response } from 'express';
import { TUser, TUserResult } from '../interfaces/user.interface';
import { client } from '../database';
import { AppError } from '../error';

export const verifyUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params;

  const queryResult: TUserResult = await client.query('SELECT * FROM "users" WHERE id = $1;', [userId]);

  const userExists: TUser = queryResult.rows[0];

  if (!userExists) {
    throw new AppError('User/course not found', 404);
  }
  return next();
};
