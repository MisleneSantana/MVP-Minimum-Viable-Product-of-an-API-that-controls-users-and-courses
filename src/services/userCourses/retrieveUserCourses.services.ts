import { client } from '../../database';
import { TCourseResult } from '../../interfaces/course.interface';

export const retrieveUserCoursesService = async () => {
  const queryString: string = '';

  const queryResult: TCourseResult = await client.query(queryString);
  return queryResult.rows;
};
