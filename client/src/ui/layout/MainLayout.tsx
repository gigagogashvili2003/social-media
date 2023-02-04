import { FC } from '@/types';
import Container from './Container';
import { HeaderWrapper, MainWrapper } from './Layout.styles';

const MainLayout: FC = props => {
    const { children } = props;

    return (
        <Container>
            <HeaderWrapper>
                <div>Header</div>
            </HeaderWrapper>
            <MainWrapper>{children}</MainWrapper>
        </Container>
    );
};

export default MainLayout;
