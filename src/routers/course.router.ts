import { Router } from 'express';
import {
  createCourseController,
  deleteCourseController,
  linksTheUserToCourseController,
  retrieveCoursesController,
} from '../controllers/course.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { courseCreateSchema } from '../schemas/course.schema';
import { verifyToken } from '../middlewares/verifyToken.middlewares';
import { Verify } from 'crypto';
import { verifyUserPermissionMiddleware } from '../middlewares/verifyUserPermission.middewares';

export const courseRouter: Router = Router();

// 1. Cadastrar um novo curso
courseRouter.post(
  '',
  verifyToken,
  verifyUserPermissionMiddleware,
  validateBodyMiddleware(courseCreateSchema),
  createCourseController
);

// 2. Listar todos os cursos
courseRouter.get('', retrieveCoursesController);

// 3. Matricular o usuário em um curso
courseRouter.post('/:courseId/users/:userId', linksTheUserToCourseController);

// 4. Setar matrícula para false do usuário em um curso
courseRouter.delete('/:courseId/users/:userId', deleteCourseController);

// 5. Listar todos os usuários matriculados em um curso
courseRouter.get(':id/users');
