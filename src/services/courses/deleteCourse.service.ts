import { QueryConfig } from 'pg';
import { client } from '../../database';

export const deleteCourseService = async (courseId: string): Promise<void> => {
  const queryString: string = 'DELETE FROM "courses" WHERE id = $1;';

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [courseId],
  };

  await client.query(queryConfig);
};
