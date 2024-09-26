import { AppConst } from "@/Enum/AppConst";
import Banner from "@Components/Banner/Banner";
import Box from "@Components/Box/Box";
import Category from "@Components/Category/Category";
import Couter from "@Components/Couter/Couter";
import GetApp from "@Components/GetApp/GetApp";
import JobsByLocation from "@Components/JobsByLocation/JobsByLocation";

import Partner from "@Components/Partner/Partner";
import ReviewJob from "@Components/ReviewJob/ReviewJob";
import SEO from "@Components/Seo/Seo";
import Testimonial from "@Components/aboutPage/Testimonial";
import SignUPModal from "@Container/Auth/SignUp/SignUPModal";
import useFeaturedCity from "@Hooks/Queries/useFeaturedCity";
import Modal from "@Container/Home/Component/Modal/Modal";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAccessTokenGenerate from "@Hooks/Mutation/useAccessTokenGenerate";
import { useAccessTokenContext } from "@Context/AccessTokenContextProvider";
import useLinkedinProfile from "@Hooks/Queries/useLinkedinProfile";
import BannerNew from "./Component/BannerNew/BannerNew";
import CategoryNew from "./Component/CategoryNew/CategoryNew";
import Jobs from "@Components/Jobs/Jobs";
import BannerMobile from "./Component/BannerMobile/BannerMobile";
import RESUMEBANNER from "@Assets/Home/craft resume.svg";
import GetAppNew from "@Components/GetApp/GetAppNew";
import JobsByCityNew from "@Components/JobsByLocation/jobsByCityNew";
import WhyChoose from "./Component/WhyChoose/WhyChoose";
import { AppRoute } from "@Navigator/AppRoute";
import PopupHome from "./Component/PopupHome/PopupHome";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getEmailVerify } from "@/api/api";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";

const Home = () => {


  useEffect(() => {
    const storeData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const data = urlParams.get('data');

      console.log('data->>>>>>>',data);

      if (data) {
        try {
        
    
          const parsedData = await JSON.parse(data);

          const userData = await parsedData.userData;

 
          console.log('User Data:', userData);

       
          await localStorage.setItem('token:fpsjob', JSON.stringify(userData));

        

          Toast("success", "Registration Successful, redirecting...");
          

          setTimeout(() => {
            window.location.href = "http://localhost:5173/dashboard/profile";
        }, 2000);
        
        } catch (error) {
          console.error('Error parsing data:', error);
        }
      } else {
        console.log('No data found in query parameters.');
      }
    };

    storeData();
  }, []);



  const { authorization, setUserLoginData } = useAccessTokenContext();
  const navigate = useNavigate();
  let accessToken;

  const { data: cityList } = useFeaturedCity({});


  const [isModal, setIsModal] = useState(false);
  const { mutateAsync: GenerateToken } = useAccessTokenGenerate({});
  const { data: linkedinProfile } = useLinkedinProfile({
    enabled: !!authorization?.access_token,
  });
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const emailIdentity = queryParams.get("emailIdentity");
  const auth = queryParams.get("auth");

  useEffect(() => {
    const emailVerifyAPI = async () => {
      try {
        const res = await getEmailVerify(emailIdentity, auth);

        if (res?.data?.status) {
          Toast("success", res?.data?.message);
        } else {
          Toast("error", res?.data?.message);
        }
      } catch (error) {}
    };

    if (emailIdentity && auth) {
      emailVerifyAPI();
    }
  }, [emailIdentity, auth]);

  const handleLogin = async (code: string) => {
    GenerateToken({ code: code })
      .then((res) => {
        if (res) {
          setUserLoginData(res);
          setIsModal(true);
        }
      })
      .catch((_) => {
        navigate(-1);
        setIsModal(false);
      });
    // try {
    //   const response = await fetch("/api/accessToken", {
    //     method: "POST",
    //     body: new URLSearchParams({
    //       grant_type: "authorization_code",
    //       code,
    //       redirect_uri: LINKEDIN_CALLBACK_URL,
    //       client_id: LINKEDIN_CLIENT_ID,
    //       client_secret: LINKEDIN_CLIENT_SECRET,
    //     }),
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   });
    //   const data = await response.json();
    //   accessToken = data.access_token;
    //   if (accessToken) {
    //     const userProfileResponse = await fetch("/api2/userinfo", {
    //       headers: {
    //         Authorization: `${data?.token_type} ${accessToken}`,
    //       },
    //     });

    //     const userProfileData = await userProfileResponse.json();
    //     setIsModal(true);
    //   } else {
    //     navigate(-1);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  const linKedinCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    setUserLoginData(null);
    if (code) handleLogin(code);
  };
  useEffect(() => {
    if (!accessToken) {
      linKedinCallback();
    }
  }, []);



  return (
    <>
      <SEO
        title={`Best Teaching & IT recruitment platform | ${AppConst.LogoName} `}
        description={`Tallento: one of the best & trusted Job posting platform where you can find NEET faculty, Teaching faculty, medical faculty & IT Jobs easily. Visit the site and create your resume now.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={`${AppConst.LogoName}`}
        type={"Job Board"}
        canonicalUrl = {"https://tallento.ai/"}
      />
      {/* <PopupHome /> */}
      <BannerMobile />
      <BannerNew />

      {/* <Banner /> */}

      <Couter />

      <div
        onClick={() => navigate(`${AppRoute.resume}`)}
        className=" cursor-pointer  hidden    md:flex justify-center items-start"
      >
        <img src={RESUMEBANNER} className=" w-[100%] " alt="resume" />
      </div>

      {/* <Partner /> */}
      <CategoryNew className="job-category-section" />
      {/* <Category className="job-category-section" /> */}

      {/* <Jobs className="jobs-section-four" /> */}

      <JobsByCityNew />

      {/* <JobsByLocation
        data={cityList?.data?.cities}
        title={"City"}
        marginTop={5}
      /> */}
      <JobsByLocation
        data={cityList?.data?.states}
        title={"State"}
        marginTop={2}
      />
      <JobsByLocation
        data={cityList?.data?.categories}
        title={"Category"}
        marginTop={2}
      />
      <Testimonial />
      {/* <Box /> */}
      {/* <ReviewJob className="over-flow-hidden review-job-section-five" /> */}
      {/* <GetAppNew /> */}
      {/* <GetApp className="bg-get-app" /> */}
      {isModal && (
        <Modal
          children={<SignUPModal data={linkedinProfile} />}
          setIsModal={setIsModal}
          isModal={isModal}
          isFull={true}
        />
      )}
      <WhyChoose />
    </>
  );
};

export default memo(Home);
