import { ToastType } from '@/types';
import { create } from 'zustand';
import { InitStateType, IToastStoreType } from './toast-types';

const initialState: InitStateType = { data: [] };

const useToastStore = create<IToastStoreType>((set, get) => ({
    ...initialState,

    showToast: (type: ToastType, text: string, id: number) => {
        set({ data: [...get().data, { type: type, text: text, id: id, timeout: 5000 }] });
        setTimeout(() => {
            const filteredData = get().data.filter(item => item.id !== id);
            set({ data: [...filteredData] });
        }, 5000);
    },
    hideToast: (id: number) => {
        const filteredData = get().data.filter(item => item.id !== id);
        set({ data: [...filteredData] });
    },
}));

export const toastSelectors = {
    showToast: (state: IToastStoreType) => state.showToast,
    toastData: (state: IToastStoreType) => state.data,
    hideToast: (state: IToastStoreType) => state.hideToast,
};

export default useToastStore;
