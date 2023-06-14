import { Request, Response } from 'express';
import { sessionLoginService } from '../services/session/sessionLogin.service';
import { TSessionLoginReturn } from '../interfaces/session.interface';

export const sessionLoginController = async (req: Request, res: Response): Promise<Response> => {
  const { validatedBody } = res.locals;
  const token: TSessionLoginReturn = await sessionLoginService(validatedBody);

  return res.status(200).json(token);
};
