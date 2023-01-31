import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import { IThemeMode, defaultTheme, themes } from './theme';

export const Provider: React.FC<{ theme: IThemeMode; children?: JSX.Element | ReactNode }> = props => {
    const { theme = defaultTheme } = props;
    const activeTheme: DefaultTheme = themes[theme];

    return (
        <ThemeProvider theme={activeTheme}>
            <>
                <GlobalStyles />
                {props.children}
            </>
        </ThemeProvider>
    );
};

export default Provider;
