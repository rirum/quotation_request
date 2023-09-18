import { Users } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type CreateUserParams = Pick<Users, 'name' | 'password' | 'email'>;
