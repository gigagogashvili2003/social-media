import { FC } from '@/types';
import React from 'react';
import { ErrorTextWrapper } from './Error-styled';

export interface IErrorText {
    errorText?: string;
    formError?: string;
    style?: React.CSSProperties;
}

const ErrorText: FC<IErrorText> = props => {
    const { errorText, formError, ...rest } = props;

    return (
        <ErrorTextWrapper errorText={errorText} formError={formError} {...rest}>
            {errorText || formError}
        </ErrorTextWrapper>
    );
};

export default ErrorText;
