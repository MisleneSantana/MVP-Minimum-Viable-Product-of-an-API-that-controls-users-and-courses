import { NextFunction, Request, Response } from 'express';
import { client } from '../database';
import { TUser, TUserResult } from '../interfaces/user.interface';
import { AppError } from '../error';

export const verifyIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;

  const queryResult: TUserResult = await client.query('SELECT * FROM "users" WHERE id = $1;', [id]);

  const userId: TUser = queryResult.rows[0];
  if (!userId) {
    throw new AppError('User not found.', 404);
  }
  return next();
};
