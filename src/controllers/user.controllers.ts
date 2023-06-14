import { Request, Response } from 'express';
import { createUserService } from '../services/users/createUser.service';
import { retrieveUsersService } from '../services/users/retrieveUsers.service';
import { TUserCreateReturn } from '../interfaces/user.interface';
import { readUserCoursesService } from '../services/users/readUserCourses.service';

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser: TUserCreateReturn = await createUserService(res.locals.validatedBody);
  return res.status(201).json(newUser);
};

export const retrieveUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: TUserCreateReturn[] = await retrieveUsersService();

  return res.status(200).json(users);
};

export const readUserCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const userId = await readUserCoursesService(id);

  return res.json(userId);
};
