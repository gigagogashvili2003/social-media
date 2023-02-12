import Modal from '@/ui/library/modal/Modal';
import { useModal } from '@/utils/hooks/useModal';
import LoginPageUserPhoto from '@/assets/images/LoginPageUserPhoto.png';
import { LoginPageContainer, LoginModalBody } from './Auth.styles';
import Input from '@/ui/library/input/Input';
import Button from '@/ui/library/button/Button';
import EmailIcon from '@/assets/svgComponents/EmailIcon';
import PasswordIcon from '@/assets/svgComponents/PasswordIcon';

const Login = () => {
    const { isOpen, openModal, closeModal } = useModal(true);

    return (
        <LoginPageContainer>
            <Modal padding="177px 130px 33px 95px" minWidth="960px" minHeight="700px" isOpen={isOpen} closeIcon={false} backdrop={false}>
                <LoginModalBody>
                    <div className="img_block">
                        <img src={LoginPageUserPhoto} alt="photo" />
                    </div>

                    <div className="auth_block">
                        <div className="title">
                            <h1>Member Login</h1>
                        </div>

                        <div className="inputs_block">
                            <Input AbsoluteComponentIcon={<EmailIcon maxHeight="15px" maxWidth="15px" />} placeholder="Email" />
                            <Input AbsoluteComponentIcon={<PasswordIcon style={{ maxWidth: '15px', maxHeight: '15px' }} />} placeholder="Password" />
                        </div>
                        <div className="action_button">
                            <Button margin="30px 0 0" buttonType="success" borderRadius="25px" padding="15px 10px">
                                Login
                            </Button>
                        </div>
                    </div>
                </LoginModalBody>
            </Modal>
        </LoginPageContainer>
    );
};

export default Login;
