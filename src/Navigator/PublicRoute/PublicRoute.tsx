import { useGlobalContext } from "@Context/GlobalContextProvider";
import { AppRoute } from "@Navigator/AppRoute";
import { Navigate } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
};

function PublicRoute({ children }: IProps) {
  const { userData, isAppLoaded } = useGlobalContext();

  if (!isAppLoaded) {
    return;
  }

  if (!userData?.UID) {
    return children;
  } else {
    return <Navigate to={AppRoute.Home} replace />;
  }
}

export default PublicRoute;
