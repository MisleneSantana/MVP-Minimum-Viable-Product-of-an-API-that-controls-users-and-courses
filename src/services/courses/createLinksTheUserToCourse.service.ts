import { client } from '../../database';
import { QueryConfig } from 'pg';

export const createLinksTheUserToCourseService = async (courseId: string, userId: string): Promise<object> => {
  const queryTemplate: string = `
    INSERT INTO
        "userCourses" ("courseId", "userId")
    VALUES
        ($1, $2) RETURNING *;
  `;

  const queryConfig: QueryConfig = {
    text: queryTemplate,
    values: [courseId, userId],
  };

  await client.query(queryConfig);
  return { message: 'User successfully vinculed to course' };
};
