import format from 'pg-format';
import { TUser } from '../../interfaces/user.interface';
import { TUserCourses } from '../../interfaces/userCourses.interface';
import { client } from '../../database';
import { QueryResult } from 'pg';

export const createLinksTheUserToCourseService = async (courseId: string, userId: string): Promise<any> => {
  const queryFormat: string = format(
    `
    INSERT INTO
        "userCourses" (%I)
    VALUES
        (%L) RETURNING *;
  `,
    Object.keys(userId),
    Object.values(courseId)
  );

  const queryResult: QueryResult = await client.query(queryFormat);
  return queryResult.rows[0];
};
