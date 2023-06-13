import { Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import { createUserService } from '../services/users/createUser.services';
import { retrieveUsersService } from '../services/users/retrieveUsers.services';

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser: IUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

export const retrieveUsersController = async (req: Request, res: Response): Promise<Response> => {
  const user: IUser[] = await retrieveUsersService();

  return res.status(200).json(user);
};
