import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

export const verifyUserPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = req.body;
  const { sub, admin } = res.locals.decoded;

  if (admin) return next();

  if (userId != sub) {
    throw new AppError('Insufficient permission', 403);
  }
  return next();
};
