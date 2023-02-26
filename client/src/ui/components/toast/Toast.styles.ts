import { ToastPosition, ToastType } from '@/types';
import styled, { css } from 'styled-components';

export const ToastWrapper = styled.div<{ position?: ToastPosition; type?: ToastType; index: number }>`
    position: fixed;
    max-width: 380px;
    width: 100%;
    max-height: 80px;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    .toast_close_icon {
        position: absolute;
        right: 20px;
        top: 10px;
        fill: ${p => p.theme.SVG_FILL};
    }

    .inner_toast {
        display: flex;
        align-items: center;
        height: 100%;
        margin-top: auto;
        column-gap: 10px;

        .main_text {
            font-size: 18px;
            font-weight: 500;
            color: ${p => p.theme.BLACK};
        }

        .time {
            margin-top: 3px;
            font-size: 13px;
            color: ${p => p.theme.BLACK};
        }
    }

    ::before {
        content: '';
        height: 100%;
        width: 5px;
        position: absolute;
        left: 0;
        top: 0;
    }

    ${({ type }) => {
        if (type) {
            switch (type) {
                case 'success':
                    return css`
                        ::before {
                            background-color: ${p => p.theme.GREEN};
                        }
                    `;
                case 'error':
                    return css`
                        ::before {
                            background-color: ${p => p.theme.RED};
                        }
                    `;
                case 'warning':
                    return css`
                        ::before {
                            background-color: ${p => p.theme.YELLOW};
                        }
                    `;
                case 'info':
                    return css`
                        ::before {
                            background-color: ${p => p.theme.DEFAULT_FONT_COLOR_ACTIVE};
                        }
                    `;
            }
        }
    }}

    ${({ position, index }) => {
        if (position) {
            switch (position) {
                case 'top-left':
                    return css`
                        top: ${index ? index * 95 + 15 : 15}px;
                        left: 15px;
                    `;
                case 'top-center':
                    return css`
                        top: ${index ? index * 95 + 15 : 15}px;
                        left: 50%;
                        transform: translateX(-50%);
                    `;
                case 'top-right':
                    return css`
                        top: ${index ? index * 95 + 15 : 15}px;
                        right: 15px;
                    `;
                case 'bottom-left':
                    return css`
                        bottom: ${index ? index * 95 + 15 : 15}px;
                        left: 15px;
                    `;
                case 'bottom-center':
                    return css`
                        bottom: ${index ? index * 95 + 15 : 15}px;
                        left: 50%;
                        transform: translateX(-50%);
                    `;
                case 'bottom-right':
                    return css`
                        bottom: ${index ? index * 95 + 15 : 15}px;
                        right: 15px;
                    `;
            }
        }
    }}
`;
