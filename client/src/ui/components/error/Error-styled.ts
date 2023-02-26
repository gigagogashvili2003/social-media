import styled, { css } from 'styled-components';
import { IErrorText } from './ErrorText';

export const ErrorTextWrapper = styled.div<IErrorText>`
    ${({ errorText }) =>
        errorText &&
        css`
            color: ${p => p.theme.RED};
        `}
    ${({ formError }) =>
        formError &&
        css`
            width: 100%;
            padding: 15px 20px;
            border-radius: 5px;
            color: ${p => p.theme.RED};
            background-color: ${p => p.theme.FORM_ERROR_BG};
            font-weight: 500;
            margin-bottom: 30px;
        `}
`;
