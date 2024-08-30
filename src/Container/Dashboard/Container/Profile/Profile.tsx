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
import { useState, useEffect, memo, useLayoutEffect } from "react";
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
import Loader from "@Container/Dashboard/Loader/laoder";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
  addCareerPreferenceData,
  addCityData,
  addEducationData,
  addLanguageData,
  addMultipleSkillsFromAPI,
  addPercentageData,
  addQualificationData,
  addResultData,
  addSalaryData,
  addSkillsData,
  addUserData,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import useResultType from "@Hooks/Queries/useResultType";
import useEducationType from "@Hooks/Queries/useEducationType";
import useUserDetailByUID from "@Hooks/Mutation/useUserDetailByUID";
import useskillsType from "@Hooks/Queries/useSkillsType";
import useSkillsSubmitted from "@Hooks/Queries/useSkillsSubmitted";
import {
  getRefetchPercentageDetail,
  getRefetchUserProfileData,
} from "@/api/api";
import useLanguagesType from "@Hooks/Queries/useLanguagesType";
import useCity from "@Hooks/Queries/useCity";
import useCareerPreferenceCity from "@Hooks/Queries/useCareerPreferenceCity";
import usePercentageData from "@Hooks/Queries/usePercentageData";
import useUserDetailByUIDNode from "@Hooks/Mutation/useUserDetailByUIDNode";
import useSalaryNode from "@Hooks/Queries/useSalaryNode";

const Profile = () => {
  const dispatch = useDispatch();
  const { userData,setUserLoginData } = useGlobalContext();
  const userId = userData?.UID;
  const { refetchProfile } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const { data: Qualification, isSuccess: QialificationSuccess } =
    useQualification({});
  const { data: ResultTypeData, isSuccess: ResultTypeSuccess } = useResultType(
    {}
  );
  const { data: EducationTypeData, isSuccess: EducationTypeSuccess } =
    useEducationType({});

  // const { data: useData, isSuccess: userDataSuccess } = useUserDetailByUIDNode(
  //   userId,
  //   {
  //     enabled: !!userId, // ensures the query runs only when UID is available
  //   }
  // );

  const { data: skillsData, isSuccess: skillsDataSuccess } = useskillsType(
    userId,
    {
      enabled: !!userId, // ensures the query runs only when UID is available
    }
  );

  const { data: languagesData, isSuccess: languagesDataSuccess } =
    useLanguagesType(userId, {
      enabled: !!userId, // ensures the query runs only when UID is available
    });

  const { data: skillsDataSubmitted, isSuccess: skillsDataSubmittedSuccess } =
    useskillsType(userId, {
      enabled: !!userId, // ensures the query runs only when UID is available
    });

  const { data: CityTypeData, isSuccess: CityTypeSuccess } = useCity({});
  const { data: SalaryTypeData, isSuccess: SalaryTypeSuccess } = useSalaryNode(
    {}
  );
  const {
    data: CareerPreferenceTypeData,
    isSuccess: CareerPreferenceTypeSuccess,
  } = useCareerPreferenceCity({});

  // const { data: percentageData, isSuccess: percentageDataSuccess } =
  //   usePercentageData(userId, {
  //     enabled: !!userId, // ensures the query runs only when UID is available
  //   });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getRefetchUserProfileData(userId);

        if (res?.status) {
          const fullUserData = await res?.data?.data?.user;
          console.log('res?.data?.data?.user',res?.data?.data);
          await dispatch(addUserData(fullUserData));
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await getRefetchPercentageDetail(userId);

        if (response?.data?.status) {
          const percentData = await response?.data?.data;
          await dispatch(addPercentageData(percentData));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  

  useEffect(() => {
    const submitArrays = async () => {
      const data = await Qualification?.data;
      const resultData = await ResultTypeData?.data;
      const educationtData = await EducationTypeData?.data;
      // const fullUserData = useData?.data?.user;
      const skillsDataFull = skillsData?.data;
      const skillsDataFullTwo = skillsData?.data.map((skill) => {
        return {
          ...skill,
          active: 0,
        };
      });
      const languagesDataFull = languagesData?.data;
      const cityDataFull = CityTypeData?.data;
      const citySalaryFull = SalaryTypeData?.data;
      const careerPreferenceSalaryFull = CareerPreferenceTypeData?.data;
      // const percentData = percentageData?.data?.data;

      await dispatch(addQualificationData(data));
      await dispatch(addResultData(resultData));
      await dispatch(addEducationData(educationtData));
      // await dispatch(addUserData(fullUserData));
      await dispatch(addSkillsData(skillsDataFullTwo));
      await dispatch(addMultipleSkillsFromAPI(skillsDataFull));
      await dispatch(addLanguageData(languagesDataFull));

      await dispatch(addCityData(cityDataFull));
      await dispatch(addSalaryData(citySalaryFull));
      await dispatch(addCareerPreferenceData(careerPreferenceSalaryFull));
      // await dispatch(addPercentageData(percentData));
    };

    if (
      QialificationSuccess &&
      ResultTypeSuccess &&
      EducationTypeSuccess &&
      skillsDataSuccess &&
      skillsDataSubmittedSuccess &&
      languagesDataSuccess &&
      CityTypeSuccess &&
      SalaryTypeSuccess &&
      CareerPreferenceTypeSuccess
    ) {
      submitArrays();
    }
  }, [
    QialificationSuccess,
    ResultTypeSuccess,
    EducationTypeSuccess,
    skillsDataSuccess,
    skillsDataSubmittedSuccess,
    languagesDataSuccess,
    CityTypeSuccess,
    SalaryTypeSuccess,
    CareerPreferenceTypeSuccess,
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getRefetchUserProfileData(userId);

        if (res?.status) {
          const fullUserData = await res?.data?.data?.user;
          await dispatch(addUserData(fullUserData));
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await getRefetchPercentageDetail(userId);

        if (response?.data?.status) {
          const percentData = await response?.data?.data;
          await dispatch(addPercentageData(percentData));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [refetchProfile]);

 

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
      <div className=" w-full h-full flex flex-col gap-3 relative">
        <BottomSection />
      </div>
    </>
  );
};

export default memo(Profile);
