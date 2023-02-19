import styled from 'styled-components';
import { IModalProps } from './Modal';

export const ModalContainer = styled.div<IModalProps>`
    min-width: ${p => p.minWidth};
    min-height: ${p => p.minHeight};
    max-height: calc(100vh - ${p => p.minHeight});
    height: 100%;
    max-width: calc(100vw - ${p => p.minHeight});
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${p => p.padding};
    border-radius: 8px;
`;

export const ModalHeader = styled.div<{ label?: string }>`
    width: 100%;
    display: flex;
    justify-content: ${p => (p.label ? 'space-between' : 'end')};
    margin-bottom: 45px;
`;

export const ModalBackdrop = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.15);
`;

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
`;

export const CloseIconWrapper = styled.div``;

export const ModalLabelWrapper = styled.div`
    h3 {
        font-size: 25px;
    }
`;
