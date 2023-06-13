import { Router } from 'express';
import { createUserController, retrieveUsersController } from '../controllers/user.controllers';

export const userRouter: Router = Router();
export const userLoginRouter: Router = Router();

userRouter.post('', createUserController);
userLoginRouter.post('');
userRouter.get('', retrieveUsersController);
userRouter.get('/:id');
