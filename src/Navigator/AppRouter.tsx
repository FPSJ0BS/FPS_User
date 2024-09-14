import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
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
import { useSelector } from "react-redux";
import ReactGA from "react-ga4";
import { getGoogleAPIOAuth } from "@/api/api";
import { PaymentPopup } from "@Container/Dashboard/Container/Membership/components/PaymentPopup";
import LoginPopup from "@Container/Auth/Login/components/LoginPopup";
import { FilterJob } from "@Container/JobListing/FilterJob";
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
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: location.pathname,
    });
  }, [location]);

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

  const { modalOpen, modalOpenMembership, modalOpenmodalOpenLogin } = useSelector((state: any) => state.appliedJobSlice);

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
            UID
          }

          localStorage.setItem('token:fpsjob',JSON.stringify(main))


        } else {
          console.log("Invalid profile data.");
        }
      } catch (error) {
        console.error("Error decoding or parsing profile data:", error);
      }
    } else {
      console.log("No profile parameter found in the URL.");
    }
  }, [location]);


  const [locationn, setLocationn] = useState({
    latitude: null,
    longitude: null,
  });
  useEffect(()=>{
    console.log('locationn',locationn);

  },[locationn])
  const [errorMessage, setErrorMessage] = useState('');

  // Automatically request location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Position successfully fetched');
          console.log('position.coords.latitude', position.coords.latitude);
          setLocationn({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setErrorMessage('');
        },
        (error) => {
          console.error('Error getting location', error); // Log the error to see if any issue arises
          setErrorMessage(error.message); // Handle case where user denies location
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>

      {/* {isFetching || isMutating ? <Preloader /> : null} */}
      <Nof />
      {modalOpen && <TrackPopup />}
      {modalOpenMembership &&  <PaymentPopup />}
      { modalOpenmodalOpenLogin && <LoginPopup />}
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
              <Route path={AppRoute.ShareProfile} element={<ShareProfile />} />

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
