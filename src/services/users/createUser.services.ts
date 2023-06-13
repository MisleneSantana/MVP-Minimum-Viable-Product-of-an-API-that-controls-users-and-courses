import format from 'pg-format';
import { TUserCreate } from '../../__tests__/mocks/interfaces';
import { IUser, TUserResult } from '../../interfaces/user.interface';
import { client } from '../../database';

export const createUserService = async (userData: TUserCreate): Promise<IUser> => {
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
  return queryResult.rows[0];
};
