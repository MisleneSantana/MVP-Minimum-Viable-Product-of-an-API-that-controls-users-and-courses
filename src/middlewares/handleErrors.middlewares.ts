import { Request, Response, NextFunction } from 'express';
import { AppError } from '../error';

export const handleErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);
  return res.status(500).json({ message: 'Internal Server Error.' });
};
