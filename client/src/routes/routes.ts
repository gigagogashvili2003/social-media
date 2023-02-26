import App from '@/App';
import { FC } from '@/types';
import IsAuth from '@/ui/components/auth-checks/is-auth/IsAuth';
import PrivateRoute from '@/ui/components/auth-checks/private-route/PrivateRoute';
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
        AuthCheck: PrivateRoute,
    },
    {
        path: '/login',
        Component: Login,
        Layout: BlankLayout,
        AuthCheck: IsAuth,
    },
    {
        path: '/register',
        Component: Register,
        Layout: BlankLayout,
        AuthCheck: IsAuth,
    },
];
