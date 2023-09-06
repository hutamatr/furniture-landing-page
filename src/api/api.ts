import axios, { AxiosResponse } from 'axios';

import { IAuthToken, ISignIn } from 'types/types';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function signIn({ email, password }: ISignIn) {
  const response: AxiosResponse<IAuthToken> = await api.post('/auth/login', {
    email,
    password,
  });
  return response;
}
