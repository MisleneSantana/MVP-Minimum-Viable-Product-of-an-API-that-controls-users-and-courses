import { Router } from 'express';
import {
  createCourseController,
  deleteCourseController,
  retrieveCoursesController,
} from '../controllers/course.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { courseCreateSchema } from '../schemas/course.schema';

export const courseRouter: Router = Router();

courseRouter.post('', validateBodyMiddleware(courseCreateSchema), createCourseController);

courseRouter.get('', retrieveCoursesController);

courseRouter.delete('/:courseId', deleteCourseController);
