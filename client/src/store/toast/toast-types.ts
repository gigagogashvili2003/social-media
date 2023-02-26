import { ToastType } from '@/types';

export interface IToastStoreType {
    data: IToast[];
    showToast: (type: ToastType, text: string, id: number) => void;
    hideToast: (id: number) => void;
}

export interface InitStateType {
    data: IToast[];
}

export interface IToast {
    type: ToastType;
    text: string;
    timeout: number;
    id: number;
}
