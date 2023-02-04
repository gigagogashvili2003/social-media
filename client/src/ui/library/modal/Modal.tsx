import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@/assets/svgComponents/CloseIcon';
import { FC } from '@/types';
import { CloseIconWrapper, ModalBody, ModalContainer, ModalHeader, ModalLabelWrapper, ModalBackdrop } from './Modal.styles';

export interface IModalProps {
    isOpen?: boolean;
    closeModal?: () => void;
    closeIcon?: boolean;
    closeOnBackdropClick?: boolean;
    label?: string;
    closeOnEscape?: boolean;
    padding?: string;
    backdrop?: boolean;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
}

const Modal: FC<IModalProps> = props => {
    const {
        isOpen,
        closeModal,
        closeIcon = true,
        closeOnBackdropClick = false,
        children,
        label,
        closeOnEscape = false,
        padding = '25px 35px',
        backdrop = true,
        width,
        height,
        maxHeight,
        maxWidth,
        minHeight = '600px',
        minWidth = '800px',
    } = props;

    function backdropClickHandler() {
        if (closeOnBackdropClick && closeModal) closeModal();
    }

    function closeOnEscapeHandler(event: KeyboardEvent): void {
        if (closeOnEscape && event.key === 'Escape' && closeModal) closeModal();
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
                <ModalContainer
                    width={width}
                    height={height}
                    maxHeight={maxHeight}
                    minHeight={minHeight}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                    padding={padding}
                >
                    {(label || closeIcon) && (
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
                    )}
                    <ModalBody>{children}</ModalBody>
                </ModalContainer>
            </>,
            document.body
        );
    }
    return null;
};

export default Modal;
