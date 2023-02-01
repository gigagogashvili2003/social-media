import { ButtonType } from '@/types';
import styled, { css } from 'styled-components';
import { IButtonProps } from './Button';

export const ButtonWrapper = styled.button<IButtonProps>`
    outline: none;
    border: none;

    padding: ${p => p.padding};
    margin: ${p => p.margin};
    text-align: center;
    border-radius: ${p => p.borderRadius};

    &:enabled {
        cursor: pointer;
    }

    &:active:enabled {
        ::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #fff;
            opacity: 0.3;
        }

        scale: 1.01;
    }

    &:disabled {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
        opacity: 0.5;
    }

    ${({ buttonType }) => {
        switch (buttonType) {
            case 'primary':
                return css`
                    color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                `;

            case 'secondary':
                return css`
                    color: #fff;
                    background-color: #6c757d;
                    border-color: #6c757d;
                `;
            case 'success':
                return css`
                    color: #fff;
                    background-color: #28a745;
                    border-color: #28a745;
                `;
            case 'danger':
                return css`
                    color: #fff;
                    background-color: #dc3545;
                    border-color: #dc3545;
                `;

            case 'warning':
                return css`
                    color: #212529;
                    background-color: #ffc107;
                    border-color: #ffc107;
                `;
            case 'info':
                return css`
                    color: #fff;
                    background-color: #17a2b8;
                    border-color: #17a2b8;
                `;

            case 'light':
                return css`
                    color: #212529;
                    background-color: #f8f9fa;
                    border-color: #f8f9fa;
                `;
            case 'dark':
                return css`
                    color: #fff;
                    background-color: #343a40;
                    border-color: #343a40;
                `;
            case 'link':
                return css`
                    font-weight: 400;
                    color: #007bff;
                    background-color: transparent;
                `;
        }
    }}
`;
