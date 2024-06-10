import StorageInstance from "@Utils/Storage";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type IAccessTokenContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorization: any;
  setAuthorization: (obj: any) => void;
  setUserLoginData: (userdata: any) => void;
};

const AccessTokenContext = createContext({} as IAccessTokenContext);
const useAccessTokenContext = () => {
  const context = useContext(AccessTokenContext);
  return context;
};

const AccessTokenProvider = (props: any) => {
  const [authorization, setAuthorization] = useState<any>(null);
   const [isAppLoaded, setIsAppLoaded] = useState(false);
   
   const setUserLoginData = useCallback((userdata: any) => {
     StorageInstance.saveLinkedinToken(JSON.stringify(userdata));
     setAuthorization(userdata);
   }, []);

   useLayoutEffect(() => {
     const userData = StorageInstance.getLinkedinToken();
     setIsAppLoaded(true);
     if (userData) {
       setUserLoginData(JSON.parse(userData));
     }
   }, []);
  const AccessTokenContextValue = useMemo(
    () => ({ authorization, setUserLoginData, isAppLoaded, setIsAppLoaded }),
    [authorization, isAppLoaded]
  );

  return (
    <AccessTokenContext.Provider value={AccessTokenContextValue} {...props} />
  );
};

export { AccessTokenProvider, useAccessTokenContext };
