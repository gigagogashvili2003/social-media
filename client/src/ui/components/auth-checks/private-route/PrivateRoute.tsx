import useUserStore, { userSelectors } from '@/store/user';
import { FC } from '@/types';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC = ({ children }) => {
    const isUserLoggedIn = useUserStore(userSelectors.isLoggedIn);
    const isLoading = useUserStore(userSelectors.loading);

    if (isLoading) return <div>HEllo</div>;

    if (!isUserLoggedIn && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
