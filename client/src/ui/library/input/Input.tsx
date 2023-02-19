import CloseIcon from '../../../assets/svgComponents/CloseIcon';
import { FC, InputType } from '@/types';
import { ClearIconWrapper, InputContainer, InputLabel, InputWrapper, AbsoluteComponentIconWrapper } from './Input.styles';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormSetValue, FieldValues } from 'react-hook-form';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: InputType;
    label?: string;
    clearIcon?: boolean;
    AbsoluteComponentIcon?: React.ReactNode;
    ref?: React.ForwardedRef<HTMLInputElement>;
    setValue?: UseFormSetValue<FieldValues>;
    name: string;
    id?: string;
}

const Input: FC<IProps> = forwardRef((props, ref) => {
    const { inputType = 'text', label, clearIcon = true, id, setValue, name, AbsoluteComponentIcon, ...rest } = props;

    const clearInput = () => {
        if (typeof setValue === 'function') setValue(name, '');
    };

    return (
        <InputContainer>
            {label && (
                <InputLabel className="input_label" htmlFor={id || name} input-type={inputType}>
                    {label}
                </InputLabel>
            )}
            <InputWrapper id={id || name} name={name} type={inputType} AbsoluteComponentIcon={AbsoluteComponentIcon} ref={ref} {...rest} />

            {AbsoluteComponentIcon && <AbsoluteComponentIconWrapper>{AbsoluteComponentIcon}</AbsoluteComponentIconWrapper>}

            {clearIcon && (
                <ClearIconWrapper onClick={clearInput}>
                    <CloseIcon />
                </ClearIconWrapper>
            )}
        </InputContainer>
    );
});

export default Input;
