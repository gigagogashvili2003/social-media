import styled, { css } from 'styled-components';
import { IProps } from './Input';

export const InputContainer = styled.div`
    width: 300px;
    /* margin: 20px; */
    position: relative;
`;

export const InputLabel = styled.label``;

export const InputWrapper = styled.input<IProps>`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    padding: 12px 20px;
    border: 1px solid ${p => p.theme.INPUT_BORDER_COLOR};
    max-height: 45px;

    ${({ AbsoluteComponentIcon }) =>
        AbsoluteComponentIcon &&
        css`
            padding: 12px 20px 12px 55px;
        `}
`;

export const ClearIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    margin: auto;
    svg {
        width: 15px;
        fill: ${p => p.theme.SVG_FILL};
    }
`;

export const AbsoluteComponentIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    padding: 0 15px;
    max-width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: 1px solid ${p => p.theme.INPUT_BORDER_COLOR};
`;
