import { QueryConfig, QueryResult } from 'pg';
import { client } from '../../database';

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
      "userCourses" as "uc"
    JOIN 
      "courses" as "c"
    ON 
      "uc"."userId" = "c"."id"
    JOIN 
      "users" as "u"
    ON 
      "uc"."courseId" = "u"."id"
    WHERE 
      "u"."id" = $1;
  `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };

  const queryResult: QueryResult = await client.query(queryConfig);

  return queryResult.rows;
};
