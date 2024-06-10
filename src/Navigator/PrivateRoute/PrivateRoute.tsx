import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '@Context/GlobalContextProvider';
import { AppRoute } from '@Navigator/AppRoute';

type IProps = {
    children: React.ReactNode
}

function PrivateRoute({ children }: IProps) {
    const { isAppLoaded, userData } = useGlobalContext();

    if (!isAppLoaded) {
        return;
    }

    if (userData?.UID) {
      return children;
    } else {
      return <Navigate to={AppRoute.Login} replace />;
    }

}

export default PrivateRoute