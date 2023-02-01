import ThemeProvider from './/styled/theme-provider';
import Modal from './ui/library/modal/Modal';
import { useModal } from './utils/hooks/useModal';

function App() {
    const { isOpen, openModal, closeModal } = useModal(false);

    return (
        <ThemeProvider theme="light">
            <Modal isOpen={isOpen} closeModal={closeModal} closeIcon label="Test Modal">
                <div>
                    <h1>hello</h1>
                </div>
            </Modal>
            <button onClick={openModal}>HEllo Test</button>
        </ThemeProvider>
    );
}

export default App;
