import { FunctionComponent, ReactNode } from 'react';

export type FC<Props = Record<string, any>> = FunctionComponent<Props & { children?: JSX.Element | ReactNode }>;

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
