import { TUser, TUserCreateReturn, TUserResult } from '../../interfaces/user.interface';
import { hash } from 'bcryptjs';
import format from 'pg-format';
import { client } from '../../database';
import { userCreateReturnSchema } from '../../schemas/user.schema';

export const createUserService = async (userData: TUser): Promise<TUserCreateReturn> => {
  userData.password = await hash(userData.password, 10);

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
  return userCreateReturnSchema.parse(queryResult.rows[0]);
};
