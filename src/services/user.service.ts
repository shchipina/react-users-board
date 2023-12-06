import { client } from '../api/fetchClient';
import { User } from '../types';

export const getUsers = async () => client.get<User[]>('/users');

export const createUser = async (name: string, carColorId: number) => {
  return client.post<User>('/users', { name, carColorId });
};
