import axios, { AxiosError, ResponseType } from 'axios';

const baseURL = process.env.VITE_API_URL || '';
const API_TIMEOUT_IN_MS = 10000;

const getAccessToken = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  return undefined;
};

const axiosInstance = axios.create({
  baseURL,
  timeout: API_TIMEOUT_IN_MS,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const api = async <T>(
  url: string,
  {
    method,
    params,
    headers,
    body,
    responseType,
  }: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    params?: Record<string, any>;
    headers?: Record<string, any>;
    body?: BodyInit | null;
    responseType?: ResponseType;
  },
): Promise<T> => {
  try {
    const response = await axiosInstance.request<T>({
      url,
      method,
      headers,
      params,
      data: body,
      responseType,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
