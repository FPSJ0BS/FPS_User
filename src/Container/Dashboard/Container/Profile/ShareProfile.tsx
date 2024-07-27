import { useGlobalContext } from "@Context/GlobalContextProvider";
import useQualification from "@Hooks/Queries/useQualification";
import useSalary from "@Hooks/Queries/useSalary";
import { useEffect, memo } from "react";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import {  useDispatch, useSelector } from "react-redux";
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
import {
  getRefetchPercentageDetail,
  getRefetchUserProfileData,
} from "@/api/api";
import useLanguagesType from "@Hooks/Queries/useLanguagesType";
import useCity from "@Hooks/Queries/useCity";
import useCareerPreferenceCity from "@Hooks/Queries/useCareerPreferenceCity";
import usePercentageData from "@Hooks/Queries/usePercentageData";
import TopSectionShareProfile from "./Top Section/TopSectionShareProfile";
import EducationShareProfile from "./Bottom Section/Right Section/Education/EducationShareProfile";
import EmploymentShareProfile from "./Bottom Section/Right Section/Employment/EmploymentShareProfile";
import SkillsShareProfile from "./Bottom Section/Right Section/Skills/SkillsShareProfile";
import CertificateShareprofile from "./Bottom Section/Right Section/Certificate/CertificateShareprofile";
import LanguageShareProfile from "./Bottom Section/Right Section/Language/LanguageShareProfile";
import CareerPreferenceShareProfile from "./Bottom Section/Right Section/Career Preference/CareerPreferenceShareProfile";
import OtherDetailsShareProfile from "./Bottom Section/Right Section/Other Details/OtherDetailsShareProfile";
import SocialMediaShareProfile from "./Bottom Section/Right Section/Social Media/SocialMediaShareProfile";

const ShareProfile = () => {
  const dispatch = useDispatch();
  const { userData } = useGlobalContext();
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

  const { data: useData, isSuccess: userDataSuccess } = useUserDetailByUID(
    userId,
    {
      enabled: !!userId, 
    }
  );

  const { data: skillsData, isSuccess: skillsDataSuccess } = useskillsType(
    userId,
    {
      enabled: !!userId, 
    }
  );

  const { data: languagesData, isSuccess: languagesDataSuccess } =
    useLanguagesType(userId, {
      enabled: !!userId, 
    });

  const { data: CityTypeData, isSuccess: CityTypeSuccess } = useCity({});
  const { data: SalaryTypeData, isSuccess: SalaryTypeSuccess } = useSalary({});
  const {
    data: CareerPreferenceTypeData,
    isSuccess: CareerPreferenceTypeSuccess,
  } = useCareerPreferenceCity({});

  const { data: percentageData, isSuccess: percentageDataSuccess } =
    usePercentageData(userId, {
      enabled: !!userId, 
    });

  

  useEffect(() => {
    const submitArrays = async () => {
      const data = await Qualification?.qualifications;
      const resultData = await ResultTypeData?.data;
      const educationtData = await EducationTypeData?.data;
      const fullUserData = useData?.user;
      const skillsDataFull = skillsData?.data;
      const languagesDataFull = languagesData?.data;
      const cityDataFull = CityTypeData?.cities;
      const citySalaryFull = SalaryTypeData?.salaries;
      const careerPreferenceSalaryFull = CareerPreferenceTypeData?.data;
      const percentData = percentageData?.data;

      await dispatch(addQualificationData(data));
      await dispatch(addResultData(resultData));
      await dispatch(addEducationData(educationtData));
      await dispatch(addUserData(fullUserData));
      await dispatch(addSkillsData(skillsDataFull));
      await dispatch(addMultipleSkillsFromAPI(skillsDataFull));
      await dispatch(addLanguageData(languagesDataFull));

      await dispatch(addCityData(cityDataFull));
      await dispatch(addSalaryData(citySalaryFull));
      await dispatch(addCareerPreferenceData(careerPreferenceSalaryFull));
      await dispatch(addPercentageData(percentData));
    };

    if (
      QialificationSuccess &&
      ResultTypeSuccess &&
      EducationTypeSuccess &&
      userDataSuccess &&
      skillsDataSuccess &&
      languagesDataSuccess &&
      CityTypeSuccess &&
      SalaryTypeSuccess &&
      CareerPreferenceTypeSuccess &&
      percentageDataSuccess
    ) {
      submitArrays();
    }
  }, [
    QialificationSuccess,
    ResultTypeSuccess,
    EducationTypeSuccess,
    userDataSuccess,
    skillsDataSuccess,
    languagesDataSuccess,
    CityTypeSuccess,
    SalaryTypeSuccess,
    CareerPreferenceTypeSuccess,
    percentageDataSuccess,
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getRefetchUserProfileData(userId);

        if (res?.data?.status) {
          const fullUserData = await res?.data?.user;
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

      <div className=" w-full h-full flex flex-col gap-3 relative px-5 py-5">
        <TopSectionShareProfile />
        <div className=" w-full grid grid-cols-3 gap-4">
          <EducationShareProfile />
          <EmploymentShareProfile />
          <SkillsShareProfile />
          <CertificateShareprofile />
          <LanguageShareProfile />
          <CareerPreferenceShareProfile />
          <OtherDetailsShareProfile />
          <SocialMediaShareProfile />
        </div>
      </div>
    </>
  );
};

export default memo(ShareProfile);
