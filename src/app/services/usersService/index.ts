import { User } from '../../entities/User';
import { httpClient } from '../httpClient';

export const usersService = {
  async getAll(): Promise<User[]> {
    const { data } = await httpClient.get<User[]>('/users');

    return data;
  },

  async me() {
    const { data } = await httpClient.get<User>('/users/me');

    return data;
  },

  async getById({ id }: { id: string }) {
    const { data } = await httpClient.get<User>(`/users/${id}`);

    return data;
  },

  async create({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<User> {
    const { data } = await httpClient.post<User>('/users', {
      username,
      password,
    });
    return data;
  },
};
