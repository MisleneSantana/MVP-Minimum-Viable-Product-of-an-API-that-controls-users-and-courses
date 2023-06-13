import { Router } from 'express';
import { createUserController, retrieveUsersController } from '../controllers/user.controllers';
import { verifyEmailExistsMiddleware } from '../middlewares/verifyEmailExists.middlewares';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { userCreateSchema } from '../schemas/user.schema';

export const userRouter: Router = Router();
export const userLoginRouter: Router = Router();

userRouter.post('', validateBodyMiddleware(userCreateSchema), verifyEmailExistsMiddleware, createUserController);

userLoginRouter.post('');
userRouter.get('', retrieveUsersController);
userRouter.get('/:id');
