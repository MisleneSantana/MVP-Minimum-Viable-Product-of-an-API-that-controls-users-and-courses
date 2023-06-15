import { Router } from 'express';
import {
  createCourseController,
  disablesACourseController,
  linksTheUserToCourseController,
  readUsersByCourseIdController,
  retrieveCoursesController,
} from '../controllers/course.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { courseCreateSchema } from '../schemas/course.schema';
import { verifyToken } from '../middlewares/verifyToken.middlewares';
import { verifyUserPermissionMiddleware } from '../middlewares/verifyUserPermission.middewares';
import { userCoursesCreateSchema } from '../schemas/userCourses.schema';
import { verifyCourseExistsMiddleware } from '../middlewares/verifyCourseExists.middlewares';
import { verifyUserExistsMiddleware } from '../middlewares/verifyUserExists.middlewares';
import { veriFyIsAdmin } from '../middlewares/verifyIsAdmin.middlewares';

export const courseRouter: Router = Router();

courseRouter.post(
  '',
  verifyToken,
  verifyUserPermissionMiddleware,
  validateBodyMiddleware(courseCreateSchema),
  createCourseController
);

courseRouter.get('', retrieveCoursesController);

courseRouter.post(
  '/:courseId/users/:userId',
  verifyCourseExistsMiddleware,
  verifyUserExistsMiddleware,
  verifyToken,
  veriFyIsAdmin,
  validateBodyMiddleware(userCoursesCreateSchema),
  linksTheUserToCourseController
);

courseRouter.delete(
  '/:courseId/users/:userId',
  verifyCourseExistsMiddleware,
  verifyUserExistsMiddleware,
  verifyToken,
  veriFyIsAdmin,
  disablesACourseController
);

courseRouter.get(
  '/:id/users',
  verifyToken,
  verifyUserPermissionMiddleware,
  veriFyIsAdmin,
  readUsersByCourseIdController
);
