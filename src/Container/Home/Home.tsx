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
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAccessTokenGenerate from "@Hooks/Mutation/useAccessTokenGenerate";
import { useAccessTokenContext } from "@Context/AccessTokenContextProvider";
import useLinkedinProfile from "@Hooks/Queries/useLinkedinProfile";
import BannerNew from "./Component/BannerNew/BannerNew";
import CategoryNew from "./Component/CategoryNew/CategoryNew";
import Jobs from "@Components/Jobs/Jobs";
import BannerMobile from "./Component/BannerMobile/BannerMobile";
import RESUMEBANNER from "@Assets/Home/resumeDreamJob.svg"
import GetAppNew from "@Components/GetApp/GetAppNew";
import JobsByCityNew from "@Components/JobsByLocation/jobsByCityNew";
import WhyChoose from "./Component/WhyChoose/WhyChoose";

const Home = () => {
  const { authorization, setUserLoginData } = useAccessTokenContext();
  const navigate = useNavigate();
  let accessToken;
  const { data: cityList } = useFeaturedCity({});
  const [isModal, setIsModal] = useState(false);
  const { mutateAsync: GenerateToken } = useAccessTokenGenerate({});
  const { data: linkedinProfile } = useLinkedinProfile({
    enabled: !!authorization?.access_token,
  });
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
    <div className="overflow-hidden w-[100vw] ">
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={`${AppConst.LogoName}`}
        type={"Job Board"}
      />
      <BannerMobile />
      <BannerNew />


      {/* <Banner /> */}

      <Couter />



        <div className="   w-full flex justify-center items-start">

          <img src={RESUMEBANNER} className=" w-[100%] bg-contain mr-[20px]"  alt="resume"/>

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
    </div>
  );
};

export default memo(Home);
