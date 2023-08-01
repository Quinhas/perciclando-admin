import axios from 'axios';
import { localStorageKeys } from '../config/env';
import { sleep } from '../utils/sleep';

export const httpClient = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL),
});

httpClient.interceptors.request.use((config) => {
  const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (storedAccessToken) {
    config.headers.Authorization = `Bearer ${storedAccessToken}`;
  }

  return config;
});

httpClient.interceptors.response.use(async (data) => {
  await sleep(500);

  return data;
});
