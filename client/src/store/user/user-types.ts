import { FieldValues } from 'react-hook-form';

interface User {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
}

export interface IUserStoreType {
    userInfo: User | null;
    loading: boolean;
    isLoggedIn: boolean;
    login: (params: FieldValues) => Promise<void>;
    getCurrentUser: (withLoading?: boolean) => Promise<void>;
    error: string;
}
