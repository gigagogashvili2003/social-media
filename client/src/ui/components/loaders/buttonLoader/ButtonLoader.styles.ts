import styled from 'styled-components';

export const ButtonLoaderWrapper = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    position: absolute;
    right: 13px;

    &:after {
        content: ' ';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
