import { useGlobalContext } from "@Context/GlobalContextProvider";
import useProfileUpdate from "@Hooks/Mutation/useProfileUpdate";
import useUploadProfileImage from "@Hooks/Mutation/useUploadProfileImage";
import useExperiences from "@Hooks/Queries/useExperiences";
import useGetCityList from "@Hooks/Queries/useGetCityList";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import useQualification from "@Hooks/Queries/useQualification";
import useSalary from "@Hooks/Queries/useSalary";
import useStatesList from "@Hooks/Queries/useStatesList";
import { IProfileType } from "@Type/ProfileType";
import { Toast } from "@Utils/Toast";
import { EMAIL_REGEX, PHONE_REGEXP, URL_REGEX } from "@Utils/Validate";
import { useState, useEffect, memo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AppRoute } from "@Navigator/AppRoute";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import useIndustryList from "@Hooks/Queries/useIndustryList";
import useJobTitle from "@Hooks/Queries/useJobTitle";
import Imag from "@Components/Image/Image";
import { downloadResumePdf } from "@Utils/downloadFile";
import TopSection from "./Top Section/TopSection";
import BottomSection from "./Bottom Section/BottomSection";

const Profile = () => {
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Profile Page"}
        type={"Web Page"}
      />

      <div className=" w-full h-full flex flex-col gap-3">
        <TopSection />

        <BottomSection />
      </div>
    </>
  );
};

export default memo(Profile);
