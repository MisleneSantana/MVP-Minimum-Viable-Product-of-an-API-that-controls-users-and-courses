import { QueryResult } from 'pg';
import { client } from '../../database';

export const disablesACourseService = async (courseId: string, userId: string): Promise<void> => {
  const queryUpdate: QueryResult = await client.query(
    'UPDATE "userCourses" SET "active" = $1 WHERE "courseId" = $2 AND "userId" = $3 ;',
    [false, courseId, userId]
  );

  return queryUpdate.rows[0];
};
