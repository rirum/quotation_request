import bcrypt from 'bcrypt';

import userRepository from '../repositories/user-repository.ts';
import { duplicatedEmailError } from '../errors/duplicated-email.ts';

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  await verifyEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);

  const teste = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  console.log(teste);

  return userRepository.createUser({
    name: name,
    email: email,
    password: hashedPassword,
  });
}

export async function verifyEmail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

const userService = {
  createUser,
};

export default userService;
