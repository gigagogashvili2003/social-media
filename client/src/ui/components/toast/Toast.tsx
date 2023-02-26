import CloseIcon from '@/assets/svgComponents/CloseIcon';
import ErrorIcon from '@/assets/svgComponents/ErrorIcon';
import InfoIcon from '@/assets/svgComponents/InfoIcon';
import SuccessIcon from '@/assets/svgComponents/SuccessIcon';
import WarningIcon from '@/assets/svgComponents/WarningIcon';
import useToastStore, { toastSelectors } from '@/store/toast';
import { FC, ToastPosition, ToastType } from '@/types';
import { formatDate } from '@/utils/date/date';
import { ToastWrapper } from './Toast.styles';

interface IToast {
    type?: ToastType;
    position?: ToastPosition;
    text: string;
    style?: React.CSSProperties;
    index: number;
    id: number;
    closeOnClick?: boolean;
    closeIcon?: boolean;
}
const Toast: FC<IToast> = props => {
    const { type = 'success', position = 'top-center', text, index, style, id, closeOnClick = false, closeIcon = true } = props;
    const formattedCurrentTime = formatDate(new Date(), 'LT');
    const showToast = useToastStore(toastSelectors.showToast);
    const hideToast = useToastStore(toastSelectors.hideToast);

    const closeToast = () => {
        if (closeOnClick) {
            hideToast(id);
        }
    };
    const closeOnCloseClick = () => {
        hideToast(id);
    };

    return (
        <ToastWrapper type={type} position={position} style={style} index={index} onClick={closeToast}>
            {closeIcon && <CloseIcon className="toast_close_icon" onClick={closeOnCloseClick} />}
            <div className="inner_toast">
                {type === 'success' && <SuccessIcon />}
                {type === 'info' && <InfoIcon />}
                {type === 'warning' && <WarningIcon />}
                {type === 'error' && <ErrorIcon />}

                <div className="text">
                    <h4 className="main_text">{text}</h4>
                    <p className="time">{formattedCurrentTime}</p>
                </div>
            </div>
        </ToastWrapper>
    );
};

export default Toast;
