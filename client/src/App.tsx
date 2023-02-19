import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';
import ThemeProvider from './styled/theme-provider';

function App() {
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
