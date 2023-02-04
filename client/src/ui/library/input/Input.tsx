import CloseIcon from '../../../assets/svgComponents/CloseIcon';
import { FC, InputType } from '@/types';
import { ClearIconWrapper, InputContainer, InputLabel, InputWrapper, AbsoluteComponentIconWrapper } from './Input.styles';
import React, { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: InputType;
    label?: string;
    clearIcon?: boolean;
    AbsoluteComponentIcon?: React.ReactNode;
}

const Input: FC<IProps> = props => {
    const { inputType = 'text', label, clearIcon = true, id, name, AbsoluteComponentIcon, ...rest } = props;

    return (
        <InputContainer>
            {label && (
                <InputLabel className="input_label" htmlFor={id || name} input-type={inputType}>
                    {label}
                </InputLabel>
            )}
            <InputWrapper id={id || name} type={inputType} AbsoluteComponentIcon={AbsoluteComponentIcon} {...rest} />

            {AbsoluteComponentIcon && <AbsoluteComponentIconWrapper>{AbsoluteComponentIcon}</AbsoluteComponentIconWrapper>}

            {clearIcon && (
                <ClearIconWrapper>
                    <CloseIcon />
                </ClearIconWrapper>
            )}
        </InputContainer>
    );
};

export default Input;
