import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Suspense, lazy, useEffect, useLayoutEffect, useState } from "react";
import { AppRoute } from "./AppRoute";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import Preloader from "@Components/Loader";
import ScrollToTop from "@Hooks/useScrollTop";
import { Querykeys } from "@Hooks/Queries/queryname";
import ForgotPassword from "@Container/Auth/ForgotPassword/ForgotPassword";
import RejectedJob from "@Container/Dashboard/Container/RejectedJob/RejectedJob";
import AccptedJob from "@Container/Dashboard/Container/AccptedJob/AccptedJob";
import Error from "@Container/Error/Error";
import JobDetailsUpdate from "@Container/JobDetail/JobDetailsUpdate";
import Nof from "@Components/Message";
import ShareProfile from "@Container/Dashboard/Container/Profile/ShareProfile";
import TrackPopup from "@Container/Dashboard/Container/Applied/Component/TrackPopup";
import { useDispatch, useSelector } from "react-redux";
import ReactGA from "react-ga4";
import {
  getGoogleAPIOAuth,
  getJobDetailById,
  postVerifyToken,
} from "@/api/api";
import { PaymentPopup } from "@Container/Dashboard/Container/Membership/components/PaymentPopup";
import LoginPopup from "@Container/Auth/Login/components/LoginPopup";
import { FilterJob } from "@Container/JobListing/FilterJob";
import CityPopup from "@Container/JobListing/components/popups/CityPopup";
import { RootState } from "@/store/store";
import SubjectsPopup from "@Container/JobListing/components/popups/SubjectsPopup";
import Review from "@Components/Review/Review";
import axios from "axios";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import BannerPopup from "@Components/Modal/BannerPopup";
import { addShareProfileUID } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
ReactGA.initialize("G-41YD1SK57B");

const BlogDetails = lazy(() => import("@Container/Blog/BlogDetails"));

const ChooseTemplate = lazy(
  () => import("@Container/Resume Builder/Choose Template/ChooseTemplate")
);

const ResumeDesignsOne = lazy(
  () =>
    import(
      "@Container/Resume Builder/Resume Designs/Resume-one/ResumeDesignsOne"
    )
);
const Info = lazy(() => import("@Container/Resume Builder/Info/Info"));

const ResumeIndex = lazy(() => import("@Container/Resume Builder/ResumeIndex"));
const ResumeMain = lazy(
  () => import("@Container/Resume Builder/Resume Main/ResumeMain")
);
const Applied = lazy(
  () => import("@Container/Dashboard/Container/Applied/Applied")
);
const Profile = lazy(
  () => import("@Container/Dashboard/Container/Profile/Profile")
);
const DashboardLayout = lazy(
  () => import("@Container/Dashboard/DashboardLayout")
);
const UserDashboard = lazy(
  () => import("@Container/Dashboard/Container/UserDashboard/UserDashboard")
);
const Resume = lazy(
  () => import("@Container/Dashboard/Container/Resume/Resume")
);
const SavedJob = lazy(
  () => import("@Container/Dashboard/Container/SavedJob/SavedJob")
);
const AccountSetting = lazy(
  () => import("@Container/Dashboard/Container/AccountSetting/AccountSetting")
);
const Home = lazy(() => import("../Container/Home/Home"));

// const JobListing = lazy(() => import("@Container/JobListing/JobListing"));
const JobListing = lazy(() => import("@Container/JobListing/FilterJob"));

const Login = lazy(() => import("@Container/Auth/Login/Login"));
const SignUp = lazy(() => import("@Container/Auth/SignUp/SignUp"));
const Layout = lazy(() => import("@Container/Layout/Layout"));
const Membership = lazy(
  () => import("@Container/Dashboard/Container/Membership/Membership")
);
const ApplyJob = lazy(() => import("@Container/ApplyJob/ApplyJob"));
const PublicRoute = lazy(() => import("./PublicRoute/PublicRoute"));
const PrivateRoute = lazy(() => import("./PrivateRoute/PrivateRoute"));
const Thankyou = lazy(() => import("@Container/ThankYou/ThankYou"));
// const Error = lazy(() => import("@Container/Error/Error"));
const ContactUs = lazy(() => import("@Container/contactUs/ContactUs"));
const Subjects = lazy(() => import("@Container/Subjects/Subjects"));
const Aboutus = lazy(() => import("@Container/Aboutus/Aboutus"));
const Faq = lazy(() => import("@Container/Faq/Faq"));
const Termsofuse = lazy(() => import("@Container/Termsofuse"));
const Blog = lazy(() => import("@Container/Blog/Blog"));
const Privacypolicy = lazy(
  () => import("@Container/privacypolicy/Privacypolicy")
);
const RefundPolicy = lazy(() => import("@Container/RefundPolicy/RefundPolicy"));

const AppRouter = () => {
  const dispatch = useDispatch();
  const { userData } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: location.pathname,
    });
  }, [location]);

  const { shareprofileUID } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const isFetching = useIsFetching({
    predicate: (query) => {
      const notLoadingApisQueryKey = [
        Querykeys.jobTitle,
        Querykeys.cityList,
        Querykeys.categoryList,
        Querykeys.latestJobs,
      ];
      return !notLoadingApisQueryKey.includes(query.queryKey[0] as string);
    },
  });
  const isMutating = useIsMutating({
    predicate: (query: any) => {
      const notLoadingApisQueryKey = [
        "login-with-email",
        "verificationOtp",
        "sendOtp",
        "resetPassword",
        "otpCheck",
        "mobileNumberCheck",
        "forgotPassword",
        "reg",
        "workStatus",
        "UploadCv",
      ];
      return !notLoadingApisQueryKey.includes(
        query.options.mutationKey[0] as string
      );
    },
  });
  ScrollToTop();

  const {
    modalOpen,
    modalOpenMembership,
    modalOpenmodalOpenLogin,
    modalOpenReview,
  } = useSelector((state: any) => state.appliedJobSlice);
  const { showPopup, showPopupSubjects } = useSelector(
    (state: RootState) => state.filterJobsSlice
  );

  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);

    // Extract the profile parameter from the URL
    const profileParam = params.get("profile");

    if (profileParam) {
      try {
        // Decode and parse the profile parameter (assuming it's URL-encoded JSON)
        const profileData = JSON.parse(decodeURIComponent(profileParam));

        // Access the individual data within profileData if it exists
        if (profileData && profileData.userData) {
          const { message } = profileData;
          const { status, loginToken, UID } = profileData.userData;

          console.log("Message:", message);
          console.log("Status:", status);
          console.log("Login Token:", loginToken);
          console.log("UID:", UID);

          const main = {
            status,
            loginToken,
            UID,
          };

          localStorage.setItem("token:fpsjob", JSON.stringify(main));
        } else {
          console.log("Invalid profile data.");
        }
      } catch (error) {
        console.error("Error decoding or parsing profile data:", error);
      }
    } else {
      console.log("No profile parameter found in the URL.");
    }

   
  }, []);

  useEffect(() => {
    const headerData = localStorage.getItem("token:fpsjob");
  
    if (!headerData) return; // Early return if headerData is null
  
    // Now it's safe to parse since we've checked it's not null
    const main = JSON.parse(headerData);
    console.log("-<><><><><><><>", main?.loginToken);
  
    // Check if userData?.UID exists before proceeding
    if (!userData?.UID) return;
  
   
  
    const checkToken = async () => {
      const data = {
        facultyID: userData?.UID,
        login_token: main,
      };
      try {
        const res = await postVerifyToken(data);
        if (res?.status) {
          console.log("restoken ->>>>>>>>>>>>>>>>>>>>>>>", res);
        } else {
          console.log("restoken fail ->>>>>>>>>>>>>>>>>>>>>>>", res);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };
  
    checkToken();
  }, []);
  

  // useEffect(()=>{

  //   const headerData = JSON.parse(localStorage.getItem("header"));

  //   console.log('headerDataheaderDataheaderDataheaderDataheaderDataheaderDatav',headerData);
  //   if (!headerData) return;
  //   if (!userData?.UID) return;

  //   const checkToken = async () => {
  //     const data = {
  //       facultyID: userData?.UID,
  //       login_token: headerData,
  //     };
  //     try {
  //       const res = await postVerifyToken(data);
  //       if(res?.status){

  //         console.log('restoken ->>>>>>>>>>>>>>>>>>>>>>>', res);

  //       } else{
  //         console.log('restoken ->>>>>>>>>>>>>>>>>>>>>>>', res);

  //       }
  //     } catch (error) {}
  //   };

  //   checkToken();

  // },[userData?.UID])

  // useEffect(() => {
  //   const headerData = localStorage.getItem("header");
  //   if (!headerData) return;
  //   if (!userData?.UID) return;

  //   const checkToken = async () => {
  //     const data = {
  //       facultyID: userData?.UID,
  //       login_token: headerData,
  //     };
  //     try {
  //       const res = await postVerifyToken(data);
  //       if(res?.status){

  //         console.log('restoken ->>>>>>>>>>>>>>>>>>>>>>>', res);

  //       }
  //     } catch (error) {}
  //   };

  //   checkToken();
  // }, []);

  useEffect(() => {
    const basePath = location.pathname.split("&")[0];
    const hasExtraParams = location.pathname.includes("/signup&");
    if (basePath === "/signup" && hasExtraParams) {
      navigate("/signup");
      // window.location.href = "https://tallento.ai/signup";
    }
  }, [location, navigate]);

  const [locationn, setLocationn] = useState({
    latitude: null,
    longitude: null,
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Automatically request location when the component mounts
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log("Position successfully fetched");
  //         console.log("position.coords.latitude", position.coords.latitude);
  //         setLocationn({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         setErrorMessage("");
  //       },
  //       (error) => {
  //         console.error("Error getting location", error); // Log the error to see if any issue arises
  //         setErrorMessage(error.message); // Handle case where user denies location
  //       }
  //     );
  //   } else {
  //     setErrorMessage("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tallento.ai",
    url: "https://tallento.ai/",
    logo: "https://tallento.ai/assets/tallento%20white%20(1)-B-59H5Wc.png",
    telephone: "9783143666",
    sameAs: [
      "https://www.facebook.com/fpsjobdeed/",
      "https://cd.linkedin.com/company/fpsjobs",
      "https://www.instagram.com/fpsjobs/",
    ],
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("lastPopupShown");
    const now = new Date().getTime();

    // Check if the popup was shown in the last 24 hours
    if (!lastShown || now - lastShown > 24 * 60 * 60 * 1000) {
      setIsVisible(true);
      localStorage.setItem("lastPopupShown", now);
    }

    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const setpopupTime = () => {
    const now = new Date().getTime();
    localStorage.setItem("lastPopupShown", now);
    setIsVisible(false);
  };

  const extractUserId = (url) => {
    const regex = /\/user\/([A-Za-z0-9]+)$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    // Example usage
    const url = window.location.href; // Change this as needed
    const userId = extractUserId(url);

    if (userId) {
      console.log("User ID:", userId); // Log the user ID
      dispatch(addShareProfileUID(userId));
      navigate("/share-profile");
    } else if (url.includes("/user") && !userId) {
      console.log("User segment found, but no user ID present.");
      navigate("/"); // Navigate to home if /user exists but no ID
    }
  }, []);


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {/* {isFetching || isMutating ? <Preloader /> : null} */}
      <Nof />
      {modalOpen && <TrackPopup />}
      {modalOpenMembership && <PaymentPopup />}
      {modalOpenmodalOpenLogin && <LoginPopup />}
      {showPopup && <CityPopup />}
      {showPopupSubjects && <SubjectsPopup />}
      {modalOpenReview && <Review />}
      {/* {isVisible && <BannerPopup setpopupTime = {setpopupTime} />} */}

      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Error />} />
            {/* <Route path="/signin-linkedin" component={LinkedInCallback} /> */}
            <Route path={`${AppRoute.Find_Jobs}`} element={<JobListing />} />
            <Route path={AppRoute.Home} element={<Home />} />
            <Route path={AppRoute.Faqs} element={<Faq />} />
            <Route path={AppRoute.About_Us} element={<Aboutus />} />
            <Route path={AppRoute.Terms_of_use} element={<Termsofuse />} />
            <Route path={AppRoute.Privacy_Policy} element={<Privacypolicy />} />
            <Route path={AppRoute.Contact_Us} element={<ContactUs />} />
            <Route path={AppRoute.Refund_Policy} element={<RefundPolicy />} />
            <Route path={AppRoute.Blog} element={<Blog />} />

            {shareprofileUID ? (
              <Route path={AppRoute.ShareProfile} element={<ShareProfile />} />
            ) : (
              <Route
                path={AppRoute.ShareProfile}
                element={<Navigate to="/" />}
              />
            )}

            {/* <Route path={AppRoute.Careers} element={<Careers />} /> */}
            <Route
              path={`${AppRoute.Blog}/:title/:id`}
              element={<BlogDetails />}
            />

            <Route path={`:category/:sub_id`} element={<Subjects />} />

            <Route
              path={`${AppRoute.Find_Jobs}/:title/:id/:state/:city/:range/:experience`}
              element={<JobDetailsUpdate />}
            />
            <Route
              path={`${AppRoute.Find_Jobs}/:category/:subjects`}
              element={<JobListing />}
            />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Outlet />
                </PrivateRoute>
              }
            >
              <Route path={AppRoute.ResumeIndex} element={<ResumeIndex />}>
                {/* Redirect to Info when accessing ResumeIndex */}
                <Route
                  index
                  element={<Navigate to={AppRoute.Info} replace />}
                />
                <Route path={AppRoute.Info} element={<Info />} />
                <Route
                  path={AppRoute.ChooseTemplate}
                  element={<ChooseTemplate />}
                />
                <Route path={AppRoute.ResumeMain} element={<ResumeMain />} />
                <Route
                  path={AppRoute.ResumeDesignOne}
                  element={<ResumeDesignsOne />}
                />
              </Route>
              {/* Other private routes */}
            </Route>

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Outlet />
                </PrivateRoute>
              }
            >
              <Route path={AppRoute.Thank_You} element={<Thankyou />} />

              <Route path={AppRoute.Dashboard} element={<DashboardLayout />}>
                <Route path="*" element={<Error />} />
                <Route path={AppRoute.Profile} element={<Profile />} />
                <Route
                  path={`${AppRoute.User_Dashboard}`}
                  element={<UserDashboard />}
                />
                <Route path={`${AppRoute.Resume}`} element={<Resume />} />
                <Route path={`${AppRoute.Saved_Job}`} element={<SavedJob />} />
                <Route path={`${AppRoute.Applied_Job}`} element={<Applied />} />
                <Route
                  path={`${AppRoute.Accepted_Job}`}
                  element={<AccptedJob />}
                />
                <Route
                  path={`${AppRoute.Rejected_Job}`}
                  element={<RejectedJob />}
                />
                <Route
                  path={`${AppRoute.Account_Setting}`}
                  element={<AccountSetting />}
                />
                <Route
                  path={`${AppRoute.Membership}`}
                  element={<Membership />}
                />
              </Route>
              <Route path={`${AppRoute.Apply_job}`} element={<ApplyJob />} />
            </Route>

            <Route
              path="/"
              element={
                <PublicRoute>
                  <Outlet />
                </PublicRoute>
              }
            >
              <Route path={AppRoute.ShareProfile} element={<ShareProfile />} />
              <Route path={AppRoute.Login} element={<Login />} />

              <Route path={AppRoute.SignUp} element={<SignUp />} />
              <Route
                path={AppRoute.Forgot_password}
                element={<ForgotPassword />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
