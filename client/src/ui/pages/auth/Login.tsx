import Modal from '@/ui/library/modal/Modal';
import { useModal } from '@/utils/hooks/useModal';
import LoginPageUserPhoto from '@/assets/images/LoginPageUserPhoto.png';
import { AuthBlock, AuthPageContainer, HaveAnAccountBlock, LoginModalBody } from './Auth.styles';
import Button from '@/ui/library/button/Button';
import EmailIcon from '@/assets/svgComponents/EmailIcon';
import PasswordIcon from '@/assets/svgComponents/PasswordIcon';
import CustomFormProvider from '@/ui/library/form-provider/CustomFormProvider';
import FormInput from '@/ui/library/form-input/FormInput';
import { emailValidation, passwordValidation } from '@/utils/validatons';
import { Link } from 'react-router-dom';
import { sendUserLoginRequest } from '@/services/user';
import { FieldValues } from 'react-hook-form';
import useUserStore from '@/store/user';
import { useState } from 'react';
import ErrorText from '@/ui/components/error/ErrorText';

const Login = () => {
    const [formError, setFormError] = useState(null);
    const { isOpen, openModal, closeModal } = useModal(true);
    const loginHandler = useUserStore(store => store.login);
    const error = useUserStore(store => store.error);

    const defaultInputValues = {
        emailOrUsername: '',
        password: '',
    };

    const sendLoginRequest = async (data: FieldValues) => {
        try {
            await loginHandler(data);
        } catch (err: any) {
            console.log(err);
            setFormError(err);
        }
    };

    return (
        <AuthPageContainer>
            <Modal padding="177px 130px 33px 95px" minWidth="960px" minHeight="700px" isOpen={isOpen} closeIcon={false} backdrop={false}>
                <LoginModalBody>
                    <div className="img_block">
                        <img src={LoginPageUserPhoto} alt="photo" />
                    </div>
                    <CustomFormProvider onSubmit={sendLoginRequest} formWith="50%" defaultValues={defaultInputValues}>
                        <AuthBlock>
                            <div style={{ paddingBottom: error ? '0' : '54px' }} className="title">
                                <h1>Member Login</h1>
                            </div>

                            {error && <ErrorText style={{ marginTop: '5px' }} formError={error} />}
                            <div className="inputs_block">
                                <FormInput
                                    name="emailOrUsername"
                                    id="emailOrUsername"
                                    placeholder="Email or Username"
                                    AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                    needValidation={false}
                                />
                                <FormInput
                                    name="password"
                                    id="password"
                                    AbsoluteComponentIcon={<PasswordIcon style={{ maxWidth: '15px', maxHeight: '15px' }} />}
                                    placeholder="Password"
                                    needValidation={false}
                                />
                            </div>
                            <div className="action_button">
                                <Button margin="30px 0 0" buttonType="success" borderRadius="25px" padding="15px 10px">
                                    Login
                                </Button>
                            </div>
                        </AuthBlock>
                        <HaveAnAccountBlock>
                            <span>
                                Dont have account?{' '}
                                <Link to="/register" replace>
                                    Sign Up
                                </Link>
                            </span>
                        </HaveAnAccountBlock>
                    </CustomFormProvider>
                </LoginModalBody>
            </Modal>
        </AuthPageContainer>
    );
};

export default Login;
