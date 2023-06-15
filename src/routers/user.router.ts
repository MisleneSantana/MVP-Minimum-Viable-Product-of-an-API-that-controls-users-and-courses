import { Router } from 'express';
import {
  createUserController,
  readUserCoursesController,
  retrieveUsersController,
} from '../controllers/user.controllers';
import { verifyEmailExistsMiddleware } from '../middlewares/verifyEmailExists.middlewares';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { userCreateSchema } from '../schemas/user.schema';
import { verifyToken } from '../middlewares/verifyToken.middlewares';
import { verifyUserPermissionMiddleware } from '../middlewares/verifyUserPermission.middewares';
import { veriFyIsAdmin } from '../middlewares/verifyIsAdmin.middlewares';

export const userRouter: Router = Router();

userRouter.post('', validateBodyMiddleware(userCreateSchema), verifyEmailExistsMiddleware, createUserController);

userRouter.get('', verifyToken, verifyUserPermissionMiddleware, retrieveUsersController);

userRouter.get('/:id/courses', verifyToken, verifyUserPermissionMiddleware, veriFyIsAdmin, readUserCoursesController);
