import { Request, Response } from 'express';
import { TCourse, TCourseCreate } from '../__tests__/mocks/interfaces';
import { createCourseService } from '../services/courses/createCourse.services';
import { retrieveCoursesService } from '../services/courses/retrieveCourses.services';
import { deleteCourseService } from '../services/courses/deleteCourse.services';

export const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const newCourse: TCourseCreate = await createCourseService(req.body);
  return res.status(201).json(newCourse);
};

export const retrieveCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const courses: TCourse[] = await retrieveCoursesService();

  return res.status(200).json(courses);
};

export const deleteCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId } = req.params;

  await deleteCourseService(courseId);

  return res.status(204).send();
};
