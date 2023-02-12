import { ButtonType, FC } from '@/types';
import { ButtonHTMLAttributes } from 'react';
import ButtonLoader from '@/ui/components/loaders/buttonLoader/ButtonLoader';
import { ButtonWrapper } from './Button.styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: ButtonType;
    buttonText?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    isLoading?: boolean;
}

const Button: FC<IButtonProps> = props => {
    const { children, buttonType = 'primary', padding = '10px 35px', margin = '', borderRadius = '4px', isLoading = false, ...rest } = props;

    return (
        <ButtonWrapper isLoading={isLoading} borderRadius={borderRadius} padding={padding} margin={margin} buttonType={buttonType} {...rest}>
            {children}
            {isLoading && <ButtonLoader />}
        </ButtonWrapper>
    );
};

export default Button;
