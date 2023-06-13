import { QueryResult } from 'pg';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export type TUserCreate = Omit<IUser, 'id'>;
export type TUserUpdate = Partial<TUserCreate>;
export type TUserRead = Array<IUser>;
export type TUserResult = QueryResult<IUser>;
