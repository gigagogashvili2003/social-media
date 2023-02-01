import { ButtonType, FC } from '@/types';
import ButtonLoader from '../../../ui/components/loaders/buttonLoader/ButtonLoader';
import { ButtonWrapper } from './Button.styles';

export interface IButtonProps {
    type?: 'button' | 'submit' | 'reset';
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: ButtonType;
    buttonText?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    disabled?: boolean;
    loading?: boolean;
}

const Button: FC<IButtonProps> = props => {
    const { children, type, clickHandler, buttonType, padding, margin, borderRadius, disabled, loading } = props;

    return (
        <ButtonWrapper
            loading={loading}
            disabled={disabled}
            borderRadius={borderRadius}
            padding={padding}
            margin={margin}
            buttonType={buttonType}
            type={type}
            onClick={clickHandler}
        >
            {children}
            {loading && <ButtonLoader />}
        </ButtonWrapper>
    );
};

Button.defaultProps = {
    type: 'button',
    buttonType: 'primary',
    padding: '10px 35px',
    margin: '20px',
    borderRadius: '4px;',
    disabled: false,
    loading: false,
};

export default Button;
