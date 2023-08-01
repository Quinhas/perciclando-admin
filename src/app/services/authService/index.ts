import { httpClient } from '../httpClient';

export interface SignInRequest {
  username: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export const authService = {
  async signIn(params: SignInRequest) {
    const { data } = await httpClient.post<SignInResponse>(
      '/auth/signin',
      params,
    );

    return data;
  },
};
