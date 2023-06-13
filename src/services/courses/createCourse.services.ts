import format from 'pg-format';
import { TCourse } from '../../__tests__/mocks/interfaces';
import { TCourseResult } from '../../interfaces/course.interface';
import { client } from '../../database';

export const createCourseService = async (courseData: TCourse): Promise<TCourse> => {
  const queryFormat: string = format(
    `
    INSERT INTO
        "courses" (%I)
    VALUES
        (%L) RETURNING *;
  `,
    Object.keys(courseData),
    Object.values(courseData)
  );

  const queryResult: TCourseResult = await client.query(queryFormat);
  return queryResult.rows[0];
};
