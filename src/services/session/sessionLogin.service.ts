import 'dotenv/config';
import { sign } from 'jsonwebtoken';
import { client } from '../../database';
import { TUser, TUserResult } from '../../interfaces/user.interface';
import { AppError } from '../../error';
import { TSessionLoginCreate, TSessionLoginReturn } from '../../interfaces/session.interface';
import { compare } from 'bcryptjs';

export const sessionLoginService = async (userData: TSessionLoginCreate): Promise<TSessionLoginReturn> => {
  const query: TUserResult = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [userData.email]);

  if (query.rowCount === 0) {
    throw new AppError('Wrong email/password', 401);
  }
  const user: TUser = query.rows[0];
  const matchPassword: boolean = await compare(userData.password, user.password);

  if (!matchPassword) {
    throw new AppError('Wrong email/password', 401);
  }

  const token: string = sign(
    {
      email: user.email,
      admin: user.admin,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id.toString(),
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  return { token };
};
