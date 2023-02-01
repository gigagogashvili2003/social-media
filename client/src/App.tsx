import { useState } from 'react';
import ThemeProvider from './styled/theme-provider';
import Button from './ui/library/button/Button';
import Modal from './ui/library/modal/Modal';
import { useModal } from './utils/hooks/useModal';

function App() {
    const { isOpen, openModal, closeModal } = useModal(false);

    const [loading, setLoading] = useState(false);

    return (
        <ThemeProvider theme="light">
            <Modal isOpen={isOpen} closeModal={closeModal} closeIcon label="Test Modal">
                <div>
                    <h1>hello</h1>
                </div>
            </Modal>
            <Button>Hello</Button>
        </ThemeProvider>
    );
}

export default App;
