import format from 'pg-format';
import { TUserCreate } from '../../__tests__/mocks/interfaces';
import { TUser, TUserCreateOutput, TUserResult } from '../../interfaces/user.interface';
import { client } from '../../database';
import { userCreateOutputSchema } from '../../schemas/user.schema';

export const createUserService = async (userData: TUser): Promise<TUserCreateOutput> => {
  const queryFormat: string = format(
    `
    INSERT INTO
        "users" (%I)
    VALUES
        (%L) RETURNING *;
  `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: TUserResult = await client.query(queryFormat);
  return userCreateOutputSchema.parse(queryResult.rows[0]);
};
