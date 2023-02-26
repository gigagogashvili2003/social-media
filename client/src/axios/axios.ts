import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const responseSuccessInterceptor = (response: AxiosResponse): AxiosResponse => response;

const responseErrorInterceptor = (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
};

instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const { get, put, post, delete: del } = instance;
