import { post } from '@/axios/axios';
import { FieldValues } from 'react-hook-form';

export const { sendUserSignupRequest, sendUserLoginRequest, sendGetCurrentUserRequest } = {
    sendUserSignupRequest: async (reqData: FieldValues) => post('/signup', reqData),
    sendUserLoginRequest: async (reqData: FieldValues) => post('/login', reqData),
    sendGetCurrentUserRequest: (token: string) =>
        post('/user/user-info', null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
};
