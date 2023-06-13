import { Request, Response } from 'express';
import { createUserService } from '../services/users/createUser.services';
import { retrieveUsersService } from '../services/users/retrieveUsers.services';
import { TUser, TUserCreateOutput } from '../interfaces/user.interface';

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser: TUserCreateOutput = await createUserService(res.locals.validatedBody);
  return res.status(201).json(newUser);
};

export const retrieveUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: TUserCreateOutput[] = await retrieveUsersService();

  return res.status(200).json(users);
};
