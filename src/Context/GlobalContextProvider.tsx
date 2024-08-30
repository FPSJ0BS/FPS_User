import StorageInstance from "@Utils/Storage";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type IGlobalContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserLoginData: (userdata: any) => void;
  isAppLoaded: boolean;
  isModalShow: boolean;
  setIsModalshow: (value: boolean) => void;
  jobDetails: any;
  setJobDetails: (value: any) => void;
  categoryData: any;
  setCategoryData: (value: any) => void;
  subjectData: any;
  setSubjectData: (value: any) => void;
  progress: any;
  setProgress: (value: any) => void;
  codeLinkedin: string;
  setLinkedinCode: (value: string) => void;
};

const GlobalContext = createContext({} as IGlobalContext);
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

const GlobalProvider = (props: any) => {
  const [userData, setUserData] = useState<any>();
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [isModalShow, setIsModalshow] = useState(false);
  const [categoryData, setCategoryData] = useState({});
  const [subjectData, setSubjectData] = useState({});
  const [progress, setProgress] = useState(0);
  const [jobDetails, setJobDetails] = useState<any>(null);
  const setUserLoginData = useCallback((userdata: any) => {
    StorageInstance.saveUserToken(JSON.stringify(userdata));
    setUserData(userdata);
  }, []);

  useLayoutEffect(() => {
    const userData = StorageInstance.getUserToken();
    setIsAppLoaded(true);
  
    try {
      if (userData) {
        const parsedData = JSON.parse(userData);
        setUserData(parsedData);
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
      // Handle the error, maybe clear the storage or set a default value
    }
  }, []);
  

  const GlobalContextValue = useMemo(
    () => ({
      userData,
      setUserLoginData,
      isAppLoaded,
      isModalShow,
      setIsModalshow,
      setJobDetails,
      jobDetails,
      categoryData,
      setCategoryData,
      subjectData,
      setSubjectData,
      setProgress,
      progress,
    }),
    [
      setUserLoginData,
      userData,
      isAppLoaded,
      isModalShow,
      jobDetails,
      categoryData,
      setCategoryData,
      subjectData,
      progress,
    ]
  );

  return <GlobalContext.Provider value={GlobalContextValue} {...props} />;
};

export { GlobalProvider, useGlobalContext };
