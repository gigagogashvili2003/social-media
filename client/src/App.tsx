import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';
import ThemeProvider from './styled/theme-provider';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme="light">
                <Routes>
                    {routes.map(({ path, Component, Layout, AuthCheck }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <AuthCheck>
                                    <Layout>
                                        <Component />
                                    </Layout>
                                </AuthCheck>
                            }
                        />
                    ))}
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
