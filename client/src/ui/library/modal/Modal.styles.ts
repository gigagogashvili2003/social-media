import styled from 'styled-components';

export const ModalContainer = styled.div<{ padding?: string }>`
    min-width: 700px;
    min-height: 500px;
    max-width: calc(100vw - 700px);
    background-color: ${p => p.theme.PRIMARY};
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

export const ModalBody = styled.div``;

export const CloseIconWrapper = styled.div``;

export const ModalLabelWrapper = styled.div`
    h3 {
        font-size: 25px;
    }
`;
