import CloseIcon from '@/assets/svgComponents/CloseIcon';
import { FC, InputType } from '@/types';
import { ClearIconWrapper, InputContainer, InputLabel, InputWrapper, AbsoluteComponentIconWrapper } from './Input.styles';
import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: InputType;
    label?: string;
    clearIcon?: boolean;
    AbsoluteComponentIcon?: React.ReactNode;
    ref?: React.ForwardedRef<HTMLInputElement>;
    name: string;
    id?: string;
    hasError?: boolean;
    isSuccess?: boolean;
    clearInput?: () => void;
}

const Input: FC<IProps> = forwardRef((props, ref) => {
    const { inputType = 'text', label, hasError, isSuccess, clearInput, clearIcon = true, id, name, AbsoluteComponentIcon, ...rest } = props;

    return (
        <InputContainer hasError={hasError} isSuccess={isSuccess}>
            {label && (
                <InputLabel className="input_label" htmlFor={id || name} input-type={inputType}>
                    {label}
                </InputLabel>
            )}
            <InputWrapper id={id || name} name={name} type={inputType} AbsoluteComponentIcon={AbsoluteComponentIcon} ref={ref} {...rest} />

            {AbsoluteComponentIcon && <AbsoluteComponentIconWrapper className="absolute_comp">{AbsoluteComponentIcon}</AbsoluteComponentIconWrapper>}

            {clearIcon && (
                <ClearIconWrapper className="clear_icon" onClick={clearInput}>
                    <CloseIcon />
                </ClearIconWrapper>
            )}
        </InputContainer>
    );
});

export default Input;
