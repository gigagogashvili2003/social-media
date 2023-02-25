import { FunctionComponent, ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

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
