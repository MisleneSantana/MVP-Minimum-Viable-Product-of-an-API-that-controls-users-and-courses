import { client } from '../../database';
import { TCourseResult } from '../../interfaces/course.interface';

export const retrieveCoursesService = async () => {
  const queryString: string = 'SELECT * FROM "courses";';

  const queryResult: TCourseResult = await client.query(queryString);
  return queryResult.rows;
};
