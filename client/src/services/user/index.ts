import { post } from '@/axios/axios';
import { FieldValues } from 'react-hook-form';

export const { sendUserSignupRequest } = {
    sendUserSignupRequest: async (reqData: FieldValues) => post('/signup', reqData),
};
