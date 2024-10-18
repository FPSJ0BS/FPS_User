import { Navigate } from "react-router-dom";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { AppRoute } from "@Navigator/AppRoute";
import { postVerifyToken } from "@/api/api";
import { useEffect, useState } from "react";

type IProps = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: IProps) {
  const { isAppLoaded, userData, setUserLoginData } = useGlobalContext();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Set initial state to null for loading
  const [loading, setLoading] = useState(true); // Manage loading state


  useEffect(() => {
    const checkToken = async () => {
      if (!userData?.UID) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      const tok = localStorage.getItem("token:fpsjob");
      if (!tok) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      const main = JSON.parse(tok);
      const token = main?.loginToken;

      const data = {
        facultyID: userData.UID,
        login_token: token,
      };

      try {
        const res = await postVerifyToken(data);
        if (res?.data?.status) {
          setIsAuthenticated(true);
          
          
        } else {
          setIsAuthenticated(false);
          setUserLoginData("");
          localStorage.removeItem("token:fpsjob");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    if (isAppLoaded) {
      checkToken();
    }
  }, [isAppLoaded, userData]);

  // While loading, you can return a loading indicator or null
  if (loading) {
    return <div>Loading...</div>; // Optional: Loading state
  }

  // After loading, check the authentication state
  if (isAuthenticated) {
    return <>{children}</>; // Render the children if authenticated
  } else {
    return <Navigate to={AppRoute.Login} replace />; // Redirect to login if not authenticated
  }
}

export default PrivateRoute;
