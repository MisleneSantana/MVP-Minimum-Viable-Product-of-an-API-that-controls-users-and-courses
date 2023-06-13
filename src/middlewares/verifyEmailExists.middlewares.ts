import { NextFunction, Request, Response } from 'express';
import { IUser, TUserResult } from '../interfaces/user.interface';
import { client } from '../database';
import { AppError } from '../error';

export const verifyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body;

  const queryResult: TUserResult = await client.query('SELECT * FROM "users" WHERE email = $1;', [email]);

  const userEmail: IUser = queryResult.rows[0];
  if (userEmail) {
    throw new AppError('Email already exists.', 409);
  }
  return next();
};
