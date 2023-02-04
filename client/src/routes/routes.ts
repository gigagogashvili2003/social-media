import App from '@/App';
import { FC } from '@/types';
import BlankLayout from '@/ui/layout/BlankLayout';
import MainLayout from '@/ui/layout/MainLayout';
import Login from '@/ui/pages/auth/Login';
import Register from '@/ui/pages/auth/Register';
import MainPage from '@/ui/pages/main/MainPage';

export const routes = [
    {
        path: '/',
        Component: MainPage,
        Layout: MainLayout,
    },
    {
        path: '/login',
        Component: Login,
        Layout: BlankLayout,
    },
    {
        path: '/register',
        Component: Register,
        Layout: BlankLayout,
    },
];
