import Modal from '@/ui/library/modal/Modal';
import { useModal } from '@/utils/hooks/useModal';
import { RegisterModalBody, AuthPageContainer } from './Auth.styles';
import Button from '@/ui/library/button/Button';
import EmailIcon from '@/assets/svgComponents/EmailIcon';
import PasswordIcon from '@/assets/svgComponents/PasswordIcon';
import CustomFormProvider from '@/ui/library/form-provider/CustomFormProvider';
import FormInput from '@/ui/library/form-input/FormInput';
import { confirmPasswordValidation, emailValidation, passwordValidation, usernameValidation } from '@/utils/validatons';
import Flex from '@/ui/components/flex/Flex';
import { IFormMethodsReturnType } from '@/types';

const Register = () => {
    const { isOpen, openModal, closeModal } = useModal(true);

    const defaultInputValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    return (
        <AuthPageContainer>
            <Modal minWidth="960px" minHeight="700px" isOpen={isOpen} closeIcon={false} backdrop={false}>
                <RegisterModalBody>
                    <CustomFormProvider formWith="80%" defaultValues={defaultInputValues}>
                        {({ methods }: any) => {
                            const passwordError = methods.getFieldState('password')?.error;
                            const disableConfirmPassword = !methods.watch('password') || passwordError;

                            return (
                                <div className="auth_block">
                                    <div className="title">
                                        <h1>Member Register</h1>
                                    </div>

                                    <div className="inputs_block">
                                        <Flex columnGap="15px">
                                            <FormInput
                                                name="firstname"
                                                id="firstname"
                                                placeholder="First name"
                                                AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                                isRequired="First name is required!"
                                            />
                                            <FormInput
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Last name"
                                                AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                                isRequired="Last name is required!"
                                            />
                                        </Flex>
                                        <Flex columnGap="15px">
                                            <FormInput
                                                name="username"
                                                id="username"
                                                placeholder="Username"
                                                AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                                validate={usernameValidation}
                                            />
                                            <FormInput
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />}
                                                validate={emailValidation}
                                            />
                                        </Flex>
                                        <Flex columnGap="15px">
                                            <FormInput
                                                name="password"
                                                id="password"
                                                AbsoluteComponentIcon={<PasswordIcon style={{ maxWidth: '15px', maxHeight: '15px' }} />}
                                                placeholder="Password"
                                                validate={passwordValidation}
                                            />
                                            <FormInput
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                AbsoluteComponentIcon={<PasswordIcon style={{ maxWidth: '15px', maxHeight: '15px' }} />}
                                                placeholder="Repeat Password"
                                                validate={confirmPasswordValidation}
                                                disabled={disableConfirmPassword}
                                            />
                                        </Flex>
                                    </div>
                                    <div className="action_button">
                                        <Button margin="30px 0 0" buttonType="success" borderRadius="25px" padding="15px 10px">
                                            Register
                                        </Button>
                                    </div>
                                </div>
                            );
                        }}
                    </CustomFormProvider>
                </RegisterModalBody>
            </Modal>
        </AuthPageContainer>
    );
};

export default Register;
