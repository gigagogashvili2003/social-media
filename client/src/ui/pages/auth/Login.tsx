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

const Login = () => {
    const { isOpen, openModal, closeModal } = useModal(true);

    const defaultInputValues = {
        email: '',
        password: '',
    };

    return (
        <AuthPageContainer>
            <Modal padding="177px 130px 33px 95px" minWidth="960px" minHeight="700px" isOpen={isOpen} closeIcon={false} backdrop={false}>
                <LoginModalBody>
                    <div className="img_block">
                        <img src={LoginPageUserPhoto} alt="photo" />
                    </div>

                    <CustomFormProvider formWith="50%" defaultValues={defaultInputValues}>
                        <AuthBlock>
                            <div className="title">
                                <h1>Member Login</h1>
                            </div>

                            <div className="inputs_block">
                                <FormInput
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                    validate={emailValidation}
                                />
                                <FormInput
                                    name="password"
                                    id="password"
                                    AbsoluteComponentIcon={<PasswordIcon style={{ maxWidth: '15px', maxHeight: '15px' }} />}
                                    placeholder="Password"
                                    validate={passwordValidation}
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
