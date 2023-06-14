import { client } from '../../database';
import { TUserResult } from '../../interfaces/user.interface';
import { userReadSchema } from '../../schemas/user.schema';

export const retrieveUsersService = async () => {
  const queryString: string = 'SELECT * FROM "users";';

  const queryResult: TUserResult = await client.query(queryString);
  return userReadSchema.parse(queryResult.rows);
};
