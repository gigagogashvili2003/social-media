import { FunctionComponent, ReactNode } from 'react';

export type FC<Props = Record<string, any>> = FunctionComponent<Props & { children?: JSX.Element | ReactNode | Function }>;

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';

export type InputType = 'checkbox' | 'date' | 'file' | 'number' | 'hidden' | 'text' | 'time' | 'password';

export type IFormMethodsReturnType = Record<string, any>;

export interface IUserType {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}

export interface IUserLoginType {
    username: string;
    email?: string;
    password: string;
}

// Toast
export type ToastType = 'success' | 'warning' | 'error' | 'info';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
