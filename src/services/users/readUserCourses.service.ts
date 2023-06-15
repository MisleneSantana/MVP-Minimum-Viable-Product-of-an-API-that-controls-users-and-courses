import { QueryConfig, QueryResult } from 'pg';
import { client } from '../../database';
import { AppError } from '../../error';

export const readUserCoursesService = async (userId: string) => {
  const queryString: string = `
  SELECT 
  	"c"."id" as "courseId",
		"c"."name" as "courseName",
		"c"."description" as "courseDescription",
    "uc"."active" as "userActiveInCourse",
    "u"."id" as "userId",
		"u"."name" as "userName"
  FROM 
    "users" as "u"
  JOIN 
    "userCourses" as "uc"
  ON 
    "uc"."userId" = "u".id
  JOIN 
    "courses" as "c"
  ON 
    "uc"."courseId" = "c".id
  WHERE 
    "u"."id" = $1;
  `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };

  const queryResult: QueryResult = await client.query(queryConfig);

  if (queryResult.rowCount === 0) {
    throw new AppError('No course found', 404);
  }

  return queryResult.rows;
};
