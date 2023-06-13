import { client } from '../../database';
import { TUserResult } from '../../interfaces/user.interface';

export const retrieveUsersService = async () => {
  const queryString: string = 'SELECT * FROM "users";';

  const queryResult: TUserResult = await client.query(queryString);
  return queryResult.rows;
};
