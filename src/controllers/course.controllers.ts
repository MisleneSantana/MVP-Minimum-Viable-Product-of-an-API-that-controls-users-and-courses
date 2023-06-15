import { Request, Response } from 'express';
import { TCourse, TCourseCreate } from '../__tests__/mocks/interfaces';
import { createCourseService } from '../services/courses/createCourse.service';
import { retrieveCoursesService } from '../services/courses/retrieveCourses.service';
import { disablesACourseService } from '../services/courses/disablesACourse.service';
import { createLinksTheUserToCourseService } from '../services/courses/createLinksTheUserToCourse.service';
import { readUsersByCourseIdService } from '../services/courses/readUsersByCourseId.service';

export const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const newCourse: TCourseCreate = await createCourseService(req.body);
  return res.status(201).json(newCourse);
};

export const retrieveCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const courses: TCourse[] = await retrieveCoursesService();
  return res.status(200).json(courses);
};

export const linksTheUserToCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId, userId } = req.params;

  const data = await createLinksTheUserToCourseService(courseId, userId);
  return res.status(201).json(data);
};

export const disablesACourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId, userId } = req.params;

  await disablesACourseService(courseId, userId);
  return res.status(204).send();
};

export const readUsersByCourseIdController = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const courseId: TCourse[] = await readUsersByCourseIdService(id);
  return res.status(200).json(courseId);
};
