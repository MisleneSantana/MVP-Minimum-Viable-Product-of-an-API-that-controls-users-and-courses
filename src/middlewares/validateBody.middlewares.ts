import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const validateBodyMiddleware =
  (schema: z.AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validatedBody = schema.parse(req.body);
    res.locals = { ...res.locals, validatedBody };

    return next();
  };
