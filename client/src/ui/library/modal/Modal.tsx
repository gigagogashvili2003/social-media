import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../../../assets/svgComponents/CloseIcon';
import { FC } from '@/types';
import { CloseIconWrapper, ModalBody, ModalContainer, ModalHeader, ModalLabelWrapper, ModalBackdrop } from './Modal.styles';

interface IModalProps {
    isOpen?: boolean;
    closeModal: () => void;
    closeIcon: boolean;
    closeOnBackdropClick?: boolean;
    label?: string;
    closeOnEscape?: boolean;
    padding?: string;
    backdrop?: boolean;
}

const Modal: FC<IModalProps> = props => {
    const { isOpen, closeModal, closeIcon, closeOnBackdropClick, children, label, closeOnEscape, padding, backdrop } = props;

    function backdropClickHandler() {
        if (closeOnBackdropClick) closeModal();
    }

    function closeOnEscapeHandler(event: KeyboardEvent): void {
        if (closeOnEscape && event.key === 'Escape') closeModal();
    }

    useEffect(() => {
        if (closeOnEscape) {
            document.addEventListener('keydown', closeOnEscapeHandler);
            return () => window.removeEventListener('keydown', closeOnEscapeHandler);
        }
    }, []);

    if (isOpen) {
        return createPortal(
            <>
                {backdrop && <ModalBackdrop onClick={backdropClickHandler} />}
                <ModalContainer padding={padding}>
                    <ModalHeader label={label}>
                        {label && (
                            <ModalLabelWrapper>
                                <h3>{label}</h3>
                            </ModalLabelWrapper>
                        )}
                        {closeIcon && (
                            <CloseIconWrapper onClick={closeModal}>
                                <CloseIcon />
                            </CloseIconWrapper>
                        )}
                    </ModalHeader>
                    <ModalBody>{children}</ModalBody>
                </ModalContainer>
            </>,
            document.body
        );
    }
    return null;
};

Modal.defaultProps = {
    padding: '25px 35px',
    closeOnBackdropClick: false,
    closeIcon: true,
    closeOnEscape: false,
    backdrop: true,
};

export default Modal;
