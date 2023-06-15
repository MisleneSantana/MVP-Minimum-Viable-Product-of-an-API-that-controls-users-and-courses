import { QueryConfig, QueryResult } from 'pg';
import { client } from '../../database';

export const readUsersByCourseIdService = async (courseId: string) => {
  const queryString: string = `
    SELECT
        "u"."id" as "userId",
		"u"."name" as "userName",
		"c"."id" as "courseId",
		"c"."name" as "courseName",
		"c"."description" as "courseDescription",
		"uc"."active" as "userActiveInCourse"
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
        "c"."id" = $1;
  `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [courseId],
  };

  const queryResult: QueryResult = await client.query(queryConfig);

  return queryResult.rows;
};
