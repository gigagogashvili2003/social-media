import storage from '@/utils/storage';
import { create } from 'zustand';
import useUserStore from '../user';
import { IAppStoreTypes } from './app-types';

const useAppStore = create<IAppStoreTypes>((set, get) => ({
    initializeApp: () => {
        const accessToken = storage('access-token').getItem();
        if (accessToken) useUserStore.getState().getCurrentUser(true);
    },
}));

export const appSelectors = {
    initializeApp: (state: IAppStoreTypes) => state.initializeApp,
};

export default useAppStore;
