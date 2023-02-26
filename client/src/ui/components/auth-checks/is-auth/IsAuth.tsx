import useUserStore, { userSelectors } from '@/store/user';
import { FC } from '@/types';
import { Navigate } from 'react-router-dom';

const IsAuth: FC = ({ children }) => {
    const isLoggedIn = useUserStore(userSelectors.isLoggedIn);
    const isLoading = useUserStore(userSelectors.loading);

    if (isLoading) return <div>Loading</div>;

    if (isLoggedIn && !isLoading) return <Navigate to="/" replace />;

    return <>{children}</>;
};

export default IsAuth;
