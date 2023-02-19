import styled from 'styled-components';

export const AuthPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
`;

export const RegisterModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;

    .auth_block {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            width: 100%;
            h1 {
                text-align: center;
                text-transform: capitalize;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.2;
                padding-bottom: 54px;
            }
        }

        .inputs_block {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .action_button {
            width: 100%;
        }
    }
`;

export const LoginModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .auth_block {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            width: 100%;
            h1 {
                text-align: center;
                text-transform: capitalize;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.2;
                padding-bottom: 54px;
            }
        }

        .inputs_block {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .action_button {
            width: 100%;
        }
    }
`;
