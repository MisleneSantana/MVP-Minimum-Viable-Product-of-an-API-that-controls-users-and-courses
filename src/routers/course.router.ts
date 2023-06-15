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

// 1. Create new course:
courseRouter.post(
  '',
  verifyToken,
  verifyUserPermissionMiddleware,
  validateBodyMiddleware(courseCreateSchema),
  createCourseController
);

// 2. Read all courses:
courseRouter.get('', retrieveCoursesController);

// 3. Register a course to a user
courseRouter.post(
  '/:courseId/users/:userId',
  verifyCourseExistsMiddleware,
  verifyUserExistsMiddleware,
  verifyToken,
  veriFyIsAdmin,
  validateBodyMiddleware(userCoursesCreateSchema),
  linksTheUserToCourseController
);

// 4. Setar matrícula para false do usuário em um curso
courseRouter.delete(
  '/:courseId/users/:userId',
  verifyCourseExistsMiddleware,
  verifyUserExistsMiddleware,
  verifyToken,
  veriFyIsAdmin,
  disablesACourseController
);

// 5. Listar todos os usuários matriculados em um curso
courseRouter.get(
  '/:id/users',
  verifyToken,
  verifyUserPermissionMiddleware,
  veriFyIsAdmin,
  readUsersByCourseIdController
);
