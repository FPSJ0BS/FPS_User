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


const Profile = () => {
  const { userData} = useGlobalContext();
  const userId = userData?.UID;
  const navigate = useNavigate();
  const { data: profileDetails, refetch: refetchProfile } = useProfileDetails({
    UID: userId,
  });
  const { mutateAsync: UploadImage } = useUploadProfileImage({});
  const [query, setQuery] = useState({
    stateID: "",
    industry_id: "",
  });
  const [industry, setIndustry] = useState({
    industry_id: "",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<IProfileType>({});
  const current_salary = watch("salary");
  const { data: Qualification } = useQualification({});
  const { data: Experiences } = useExperiences({});
  const { data: Salary } = useSalary({});
  const { data: State } = useStatesList({});
  const { mutateAsync: ProfileUpdate } = useProfileUpdate({});
  const { data: cityList } = useGetCityList(
    { enabled: !!query.stateID },
    query
  );
  const onSubmit: SubmitHandler<IProfileType> = async (data) => {
    const filterState =
      State?.states &&
      State?.states?.filter((item) => {
        return item?.id === data.state;
      });
    const filterCity =
      cityList?.cities &&
      cityList?.cities.filter((item) => {
        return item?.id === data.city;
      });
    const _data = {
      ...data,
      city: filterCity?.[0]?.name,
      state: filterState?.[0]?.name,
      UID: userData?.UID,
    };

    ProfileUpdate(_data).then((res) => {
      if (res.status === "success") {
        refetchProfile();
        navigate(`${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`);
        Toast("success", res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };
  const { data: Industry } = useIndustryList({});
  const { data: Jobs } = useJobTitle(
    { enabled: !!industry.industry_id },
    industry
  );
  useEffect(() => {
    setQuery({
      ...query,
      stateID:
        State?.states &&
        State?.states?.filter((item) => {
          return item?.name === profileDetails?.user?.state;
        })?.[0]?.id,
    });
    setIndustry({
      ...industry,
      industry_id: profileDetails?.user?.CID,
    });
  }, [profileDetails]);
  // useEffect(() => {
  //   setLocation({
  //     ...location,
  //     stateId:
  //       (State?.states &&
  //         State?.states?.find((item) => {
  //           return item?.name === profileDetails?.user?.state;
  //         })?.id) ||
  //       "",
  //     cityId:
  //       cityList?.cities &&
  //       cityList?.cities.find((item) => {
  //         return item?.name === profileDetails?.user?.city;
  //       })?.id,
  //   });
  // }, [profileDetails?.user?.city, profileDetails?.user?.state]);
  useEffect(() => {
    setTimeout(() => {
      setValue("name", profileDetails?.user?.name || "");
      setValue("email", profileDetails?.user?.email || "");
      setValue(
        "dob",
        profileDetails?.user?.dob === "0000-00-00"
          ? new Date()
          : profileDetails?.user?.dob
      );
      setValue("experience", profileDetails?.user?.experience_id || "");
      setValue("qualification", profileDetails?.user?.qualification_id || "");
      setValue("university", profileDetails?.user?.university || "");
      setValue("passing_year", profileDetails?.user?.passing_year || "");
      setValue("salary", profileDetails?.user?.salary_id || "");
      setValue(
        "expected_salary",
        profileDetails?.user?.expected_salary_id || ""
      );
      setValue(
        "state",
        (State?.states &&
          State?.states?.filter((item) => {
            return item?.name === profileDetails?.user?.state;
          })?.[0]?.id) ||
          ""
      );
      setValue(
        "city",
        (cityList?.cities &&
          cityList?.cities.filter((item) => {
            return item?.name === profileDetails?.user?.city;
          })?.[0]?.id) ||
          ""
      );
      setValue(
        "current_employer",
        profileDetails?.user?.current_employer || ""
      );
      setValue("last_employer", profileDetails?.user?.last_employer || "");
      setValue("demolecture", profileDetails?.user?.demolecture || "");
      setValue("industry", profileDetails?.user?.CID || "");
      setValue("job_function", profileDetails?.user?.job_function_id || "");
      setValue(
        "alternate_contact",
        profileDetails?.user?.alternate_contact || ""
      );
      setValue("gender", profileDetails?.user?.gender || "");
    }, 2000);
  }, [profileDetails, query.stateID, State?.states, cityList?.cities]);

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setTime(
    eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
  );

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
      
        <div>sf</div>

        
    </>
  );
};

export default memo(Profile);
