import { QueryResult } from 'pg';

export interface IUserCourses {
  id: number;
  active: boolean;
  userId: number;
  courseId: number;
}

export type TUserCourseCreate = Omit<IUserCourses, 'id'>;
export type TUserCourseUpdate = Partial<TUserCourseCreate>;
export type TUserCourseRead = Array<IUserCourses>;
export type TUserCourseResult = QueryResult<IUserCourses>;
