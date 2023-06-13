import { QueryResult } from 'pg';

export interface ICourse {
  id: number;
  name: string;
  description: string;
}

export type TCourseCreate = Omit<ICourse, 'id'>;
export type TCourseUpdate = Partial<TCourseCreate>;
export type TCourseRead = Array<ICourse>;
export type TCourseResult = QueryResult<ICourse>;
