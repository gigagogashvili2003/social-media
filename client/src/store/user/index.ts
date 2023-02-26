import { sendGetCurrentUserRequest, sendUserLoginRequest } from '@/services/user';
import storage from '@/utils/storage';

import { FieldValues } from 'react-hook-form';
import { create } from 'zustand';
import { IUserStoreType } from './user-types';

const initialUserState = { userInfo: null, loading: false, isLoggedIn: false, error: '' };

const useUserStore = create<IUserStoreType>((set, get) => ({
    ...initialUserState,

    getCurrentUser: async (withLoading?: boolean) => {
        try {
            if (withLoading) set({ loading: true });
            const accessToken: string = storage('access-token').getItem();
            const userInfo = await sendGetCurrentUserRequest(accessToken);
            storage('access-token').setItem(userInfo.data.token);
            storage('user').setItem(userInfo.data.user);
            set({ userInfo: userInfo.data.user, loading: false, isLoggedIn: true });

            return Promise.resolve();
        } catch (err: any) {
            set({ error: err.error });
        }
    },

    login: async (params: FieldValues) => {
        try {
            const user = await sendUserLoginRequest(params);
            storage('access-token').setItem(user.data.token);
            get().getCurrentUser();
        } catch (err: any) {
            set({ error: err.error });
        }
    },
}));

export const userSelectors = {
    isLoggedIn: (state: IUserStoreType) => state.isLoggedIn,
    userInfo: (state: IUserStoreType) => state.userInfo,
    loading: (state: IUserStoreType) => state.loading,
};

export default useUserStore;
