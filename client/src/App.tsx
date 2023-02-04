import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CloseIcon from './assets/svgComponents/CloseIcon';
import { routes } from './routes/routes';
import ThemeProvider from './styled/theme-provider';
import Button from './ui/library/button/Button';
import Input from './ui/library/input/Input';
import Modal from './ui/library/modal/Modal';
import { useModal } from './utils/hooks/useModal';

function App() {
    const { isOpen, openModal, closeModal } = useModal(false);

    const [loading, setLoading] = useState(false);

    return (
        <BrowserRouter>
            <ThemeProvider theme="light">
                <Routes>
                    {routes.map(({ path, Component, Layout }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    ))}
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
