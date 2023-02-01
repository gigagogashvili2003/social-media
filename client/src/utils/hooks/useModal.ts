import { useState } from 'react';

export const useModal = (initialState: boolean): IReturnTypes => {
    const [isOpen, setIsOpen] = useState(initialState);

    function openModal() {
        setIsOpen(prevState => !prevState);
    }

    function closeModal() {
        setIsOpen(prevState => !prevState);
    }

    return { isOpen, openModal, closeModal };
};

interface IReturnTypes {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
