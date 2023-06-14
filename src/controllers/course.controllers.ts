import { Request, Response } from 'express';
import { TCourse, TCourseCreate } from '../__tests__/mocks/interfaces';
import { createCourseService } from '../services/courses/createCourse.service';
import { retrieveCoursesService } from '../services/courses/retrieveCourses.service';
import { deleteCourseService } from '../services/courses/deleteCourse.service';
import { createLinksTheUserToCourseService } from '../services/courses/createLinksTheUserToCourse.service';

export const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const newCourse: TCourseCreate = await createCourseService(req.body);
  return res.status(201).json(newCourse);
};

export const retrieveCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const courses: TCourse[] = await retrieveCoursesService();

  return res.status(200).json(courses);
};

export const linksTheUserToCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { userId, courseId } = req.params;
  const data = await createLinksTheUserToCourseService(userId, courseId);

  return res.status(201).json(data);
};

export const deleteCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId } = req.params;

  await deleteCourseService(courseId);

  return res.status(204).send();
};
