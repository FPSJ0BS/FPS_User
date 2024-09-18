import useReg from "@Hooks/Mutation/useReg";
import useGetCityList from "@Hooks/Queries/useGetCityList";
import useIndustryList from "@Hooks/Queries/useIndustryList";
import useStatesList from "@Hooks/Queries/useStatesList";
import { memo, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useJobTitle from "@Hooks/Queries/useJobTitle";
import useVerificationOtp from "@Hooks/Mutation/useVerificationOtp";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEXP,
  STRONG_PASSWORD,
  STRONG_PASSWORD_MESSAGE,
} from "@Utils/Validate";
import { FormDataAppend } from "@Utils/FormDataAppend";

import Otp from "../Component/Otp";
import { Toast } from "@Utils/Toast";
import { IRegType } from "@Type/LoginType";
import { AppRoute } from "@Navigator/AppRoute";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { AppConst } from "@/Enum/AppConst";

import SignUpSecondModal from "./SignUpSecondModal";
import JOBMATCHING from "@Assets/Icons/jobmatching.png";
import AIICON from "@Assets/Icons/ai.png";
import RESUMEICON from "@Assets/Icons/resume.png";
import OtpSignUp from "../Component/OtpSignUp";
import useSendOtp from "@Hooks/Mutation/useSendOtp";
import useOtpCheck from "@Hooks/Mutation/useOtpCheck";
import useStatesListNode from "@Hooks/Queries/useStatesListNode";
import { getEmailVerifyInitiate, getGoogleAPI } from "@/api/api";
import useGetCityListNode from "@Hooks/Queries/useGetCityListNode";
import useIndustryListNode from "@Hooks/Queries/useIndustryListNode";
import useJobTitleNode from "@Hooks/Queries/useJobTitleNode";
import GoogleAuth from "../Component/GoogleAuth";
// import useExperiences from "@Hooks/Queries/useExperiences";
import googleIcon from "@Assets/search.png";
import regIconBlack from "@Assets/Icons/connection_x2C.png";
import regIconWhite from "@Assets/Icons/connection_white.png";
import useStatesListCountryNode from "@Hooks/Queries/useStatesListCountryNode";

interface State {
  id: string;
  name: string;
  code: string;
}

const SignUp = () => {
  const { setUserLoginData } = useGlobalContext();
  const [isOtpPage, setIsOtpPage] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showPassOne, setShowPassOne] = useState(false);
  const [mobileNumber, setMobileNumber] = useState<any>(null);
  const [isModal, setModal] = useState(false);
  // const [isExperienced, setIsExperienced] = useState<any>(null);
  // const { data: Experiences } = useExperiences({});
  const [query, setQuery] = useState({
    stateID: "",
  });

  const navigate = useNavigate();
  const [industry, setIndustry] = useState({
    industry_id: "",
  });

  // const { data: State } = useStatesListNode({});
  const { data: StateCountry, isSuccess: isSuccessStateCountry } =
    useStatesListCountryNode({});

  const [allNewStatesData, setAllNewStatesData] = useState<State[]>([]);

  useEffect(() => {
    const indiaData = StateCountry?.data[0]?.state;
    const qatar = StateCountry?.data[1]?.state;
    const uae = StateCountry?.data[2]?.state;

    const updatedStatesIndia = indiaData?.map((state) => ({
      ...state,
      id: String(state.id),
      code: "India",
    }));

    const updatedStatesQatar = qatar?.map((state) => ({
      ...state,
      id: String(state.id),
      code: "Qatar",
    }));

    const updatedStatesUAE = uae?.map((state) => ({
      ...state,
      id: String(state.id),
      code: "UAE",
    }));

    const allStates = [
      ...(updatedStatesIndia || []),
      ...(updatedStatesQatar || []),
      ...(updatedStatesUAE || []),
    ];

    setAllNewStatesData(allStates); // This should now work without errors

    console.log("Combined State Data:", allNewStatesData);
  }, [isSuccessStateCountry]);

  const { data: cityList } = useGetCityListNode(
    { enabled: !!query.stateID },
    query
  );
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<IRegType>();
  const { mutateAsync: reg, isPending } = useReg({});
  const { mutateAsync: verify, isPending: isSendOtp } = useVerificationOtp({});
  const { mutateAsync: sendOtp, isPending: isSendOtpLoader } = useSendOtp({});
  const { mutateAsync: OtpCheck, isPending: isOtpCheckLoader } = useOtpCheck(
    {}
  );

  const [hashValue, sethashValue] = useState("");
  const [otpSendData, setOtpSendData] = useState({});

  let pwd = watch("password");

  const onSubmit: SubmitHandler<IRegType> = async (data) => {
    setMobileNumber(data?.mobile);
    const filterState =
      allNewStatesData &&
      allNewStatesData?.filter((item) => {
        return Number(item?.id) === data.state;
      });
    const filterCity =
      cityList?.data &&
      cityList?.data.filter((item) => {
        return item?.id === data.city;
      });
    const _data = {
      ...data,
      city: filterCity?.[0]?.name,
      state: filterState?.[0]?.name,
      added_by: "web",
    };
    const formData: any = FormDataAppend(_data);
    try {
      await reg(formData).then((res) => {
        if (res?.statusCode === 200) {
          const facID = res?.data[0];

          sendOtp({
            mobile: _data?.mobile,
          }).then(async (res) => {
            if (res?.statusCode === 200) {
              await sethashValue(res?.data[0]);
              setOtpSendData({
                hash: res?.data[0],
                fcm_token: "no token",
                device_type: "Web",
              });
            } else {
              Toast("error", res?.message);
            }
          });

          const fetchEmailVerifyLink = async () => {
            try {
              const resp = await getEmailVerifyInitiate(facID);

              if (resp?.status) {
                Toast("success", resp?.message);
              } else {
                Toast("error", resp?.message);
              }
            } catch (error) {
              console.log(error);
            }
          };

          fetchEmailVerifyLink();

          Toast("success", res?.message);
          setIsOtpPage(false);
        } else {
          const msg = "This phone number already linked to another account...";
          if (res?.message === msg) {
            setTimeout(() => {
              navigate(AppRoute.Login);
            }, 3000);
          } else {}
          Toast("error", res?.message);
        }
      });
    } catch (e: any) {
      Toast("error", e?.response?.data?.data);
    }
  };

  const { data: Industry } = useIndustryListNode({});
  const { data: Jobs } = useJobTitleNode(
    { enabled: !!industry.industry_id },
    industry
  );

  const onVerificationOtp: SubmitHandler<any> = (data) => {
    try {
      OtpCheck(data).then((res) => {
        if (res?.statusCode === 200) {
          setUserLoginData(res?.data);
          navigate(AppRoute.Dashboard);
          Toast("success", "Login successful! Enjoy your experience.");
        } else {
          Toast("error", res?.message);
        }
      });
    } catch (e: any) {}
  };

  const validTypes = ["application/pdf", "application/msword", "image/jpeg"];

  const auth = async () => {
    try {
      const res = await getGoogleAPI();

      if (res.data.status) {
        const path = res?.data?.data;
        window.open(path, "_self");

        console.log(res?.data?.data);
      }
    } catch (error) {}

    // navigate(data?.data);
  };

  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Sign Up Page"}
        type={"Web Page"}
      />
      <Breadcrumb title=" Sign Up " />
      <section className=" w-full  ">
        <div className=" w-full ">
          <div className=" flex w-full items-center justify-center gap-4 md:p-[30px] lg:p-[10px] 2xl:p-[30px] ">
            {isOtpPage ? (
              <div className=" flex w-full  justify-center md:mx-[2vw]  items-start gap-5 h-[100vh] 2xl:h-[85vh] rounded-lg px-4">
                <div className="hidden   xl:flex justify-start items-start flex-col gap-3 w-[55%] h-full">
                  <h6 className=" text-[2.8vw] font-bold text-black text-left ">
                    {`Create your ${AppConst.LogoName} profile`}
                  </h6>
                  <p className=" text-base text-black ml-2">
                    Search & apply to jobs from India's No.1 Job Site
                  </p>

                  <div className=" grid grid-cols-2 2xl:grid-cols-2 gap-4">
                    <div className=" h-[15vw] w-[21vw] bg-white shadow-lg rounded-[20px] p-[30px] flex flex-col justify-center gap-2">
                      <img
                        src={regIconBlack}
                        alt="reg-icon"
                        className=" w-[2.3vw]"
                      />
                      <p className=" mb-0 font-bold text-black text-[1.3vw] leading-[1.4em]">
                        Personalized Job
                        <br /> Matching.
                      </p>
                      <p className=" mb-0 font-normal text-black text-[0.8vw] leading-[1.4em]">
                        Get matched with job openings that fit your skills and
                        preferences.
                      </p>
                    </div>
                    <div className=" h-[15vw] w-[21vw] bg-[#c94f56] rounded-[20px] p-[30px] flex flex-col justify-center gap-2">
                      <img
                        src={regIconWhite}
                        alt="reg-icon"
                        className=" w-[2.3vw]"
                      />
                      <p className=" mb-0 font-bold text-white text-[1.3vw] leading-[1.4em]">
                        AI-Powered Career Guidance.
                      </p>
                      <p className=" mb-0 font-normal text-white text-[0.8vw] leading-[1.4em]">
                        Receive expert advice and insights to help you grow in
                        your career.
                      </p>
                    </div>
                    <div className=" h-[15vw] w-[21vw] bg-[#c94f56] rounded-[20px] p-[30px] flex flex-col justify-center gap-2">
                      <img
                        src={regIconWhite}
                        alt="reg-icon"
                        className=" w-[2.3vw]"
                      />
                      <p className=" mb-0 font-bold text-white text-[1.3vw] leading-[1.4em]">
                        AI- Based Resume <br />
                        Builder.
                      </p>
                      <p className=" mb-0 font-normal text-white text-[0.8vw] leading-[1.4em]">
                        Create a stunning resume that showcases your
                        achievements.
                      </p>
                    </div>
                    <div className=" h-[15vw] w-[21vw] bg-white shadow-lg rounded-[20px] p-[30px] flex flex-col justify-center gap-2">
                      <img
                        src={regIconBlack}
                        alt="reg-icon"
                        className=" w-[2.3vw]"
                      />
                      <p className=" mb-0 font-bold text-black text-[1.3vw] leading-[1.4em]">
                        Professional <br />
                        Networking
                      </p>
                      <p className=" mb-0 font-normal text-black text-[0.8vw] leading-[1.4em]">
                        Connect with like-minded professionals and industry
                        leaders.
                      </p>
                    </div>
                  </div>
                </div>
                <form
                  className=" xl:w-[45%] gap-2 sm:grid grid-cols-2 bg-white shadow-lg border-solid border-2 border-[#dee2e5] h-[100%] py-4 rounded-xl px-3 overflow-y-auto postjobHandleScrollbar"
                  id="reg-form"
                  autoComplete="off"
                >
                  <div className="d-flex  flex-column w-full col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2">
                    <label className="fw-bolder text-black ">First Name</label>
                    <input
                      autoFocus={true}
                      {...register("first_name", {
                        required: "First Name is required",
                        pattern: {
                          value: NAME_REGEX,
                          message: "Please enter valid First name",
                        },
                      })}
                      name="first_name"
                      placeholder="What is your First Name..."
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black"
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.first_name && (
                      <small className="text-danger">
                        {errors.first_name.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full  flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2 ">
                    <label className="fw-bolder text-black">Last Name</label>
                    <input
                      {...register("last_name", {
                        required: "Last Name is required",
                        pattern: {
                          value: NAME_REGEX,
                          message: "Please enter valid Last name",
                        },
                      })}
                      name="last_name"
                      placeholder="What is your Last Name..."
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black "
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.last_name && (
                      <small className="text-danger">
                        {errors.last_name.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2">
                    <label className="fw-bolder text-black ">Email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Please enter a valid email address",
                        },
                      })}
                      name="email"
                      placeholder="Tell us your Email Id..."
                      aria-invalid="true"
                      type="undefined"
                      className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black "
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2">
                    <label className="fw-bolder text-black ">Mobile</label>
                    <input
                      {...register("mobile", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: PHONE_REGEXP,
                          message: "Invalid Mobile number",
                        },
                      })}
                      name="mobile"
                      placeholder="Enter your Mobile Number"
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black"
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.mobile && (
                      <small className="text-danger">
                        {errors.mobile.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2 col-span-2 ">
                    <label className="fw-bolder text-black">Password</label>

                    <p className=" text-black text-[10px]">
                      Password must contain atleast 8 characters, including 1
                      UPPER, lowercase, special character and numbers
                    </p>

                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: "Password is required",
                        pattern: {
                          value: STRONG_PASSWORD,
                          message: STRONG_PASSWORD_MESSAGE,
                        },
                      }}
                      render={({ field: { onChange, value } }) => (
                        <div className="relative">
                          <input
                            name="password"
                            type={showPassOne ? "text" : "password"}
                            className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black"
                            placeholder="Please Enter your Password..."
                            id="password-input"
                            value={value}
                            onChange={onChange}
                          />
                          <Link
                            className={`text-black password-addon ${
                              showPassOne ? "icon-eye" : "icon-eye-off"
                            }`}
                            id="password-addon"
                            onClick={() => setShowPassOne(!showPassOne)}
                            to={""}
                            style={{
                              position: "absolute",
                              right: "3%",
                              top: "30%",
                            }}
                          />
                        </div>
                      )}
                    />
                    {errors.password && (
                      <small className="text-danger">
                        {errors.password.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2 col-span-2">
                    <label className="fw-bolder text-black">
                      Confirm Password
                    </label>
                    <p className=" text-black text-[10px]">
                      Password must contain atleast 8 characters, including 1
                      UPPER, lowercase, special character and numbers
                    </p>

                    <Controller
                      name="confirm_password"
                      control={control}
                      rules={{
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === pwd || "The passwords do not match",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <div className="relative">
                          <input
                            name="confirm_password"
                            type={showPass ? "text" : "password"}
                            className="p-2 border-2 border-[#c3c6c7] text-black bg-transparent placeholder-black"
                            placeholder="Confirm your Password..."
                            id="password-input"
                            value={value}
                            onChange={onChange}
                          />
                          <Link
                            className={`text-black password-addon ${
                              showPass ? "icon-eye" : "icon-eye-off"
                            }`}
                            id="password-addon"
                            onClick={() => setShowPass(!showPass)}
                            to={""}
                            style={{
                              position: "absolute",
                              right: "3%",
                              top: "30%",
                            }}
                          />
                        </div>
                      )}
                    />

                    {errors.confirm_password && (
                      <small className="text-danger">
                        {errors.confirm_password.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2">
                    <label className="fw-bolder text-black">State</label>
                    <Controller
                      name="state"
                      control={control}
                      rules={{
                        required: "State is required",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <select
                          name="state"
                          className="select border-2 border-[#c3c6c7] form-select text-black bg-transparent postjobHandleScrollbar"
                          value={value}
                          onChange={(e) => {
                            setQuery({
                              ...query,
                              stateID: e.target.value,
                            });
                            onChange(e);
                          }}
                          autoComplete="off"
                        >
                          <option className="text-black" value="">
                            <span className="text-black">
                              Please select your State...
                            </span>
                          </option>

                          {/* India States */}
                          <optgroup label="India" className="bg-gray-200">
                            {allNewStatesData
                              .filter((item) => item.code === "India") // Filter states for India
                              .map((item, index) => (
                                <option
                                  className="text-black"
                                  value={item.id}
                                  key={index}
                                >
                                  {item.name}
                                </option>
                              ))}
                          </optgroup>

                          {/* Qatar States */}
                          <optgroup label="Qatar" className="bg-gray-200">
                            {allNewStatesData
                              .filter((item) => item.code === "Qatar") // Filter states for Qatar
                              .map((item, index) => (
                                <option
                                  className="text-black"
                                  value={item.id}
                                  key={index}
                                >
                                  {item.name}
                                </option>
                              ))}
                          </optgroup>

                          {/* UAE States */}
                          <optgroup label="UAE" className="bg-gray-200">
                            {allNewStatesData
                              .filter((item) => item.code === "UAE") // Filter states for UAE
                              .map((item, index) => (
                                <option
                                  className="text-black"
                                  value={item.id}
                                  key={index}
                                >
                                  {item.name}
                                </option>
                              ))}
                          </optgroup>
                        </select>
                      )}
                    />

                    {errors.state && (
                      <small className="text-danger">
                        {errors.state.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2 ">
                    <label className="fw-bolder text-black ">City</label>
                    <select
                      {...register("city", {
                        required: "City is required",
                      })}
                      name="city"
                      className="select border-2  form-select   text-black bg-transparent postjobHandleScrollbar"
                      autoComplete="off"
                    >
                      <option className="text-black" value="">
                        <span className="text-black">
                          Please select your City...
                        </span>
                      </option>
                      {cityList?.data &&
                        cityList?.data.map((item, index) => {
                          return (
                            <option
                              className="text-black"
                              value={item?.id}
                              key={index}
                            >
                              <span className="text-black">{item?.name}</span>
                            </option>
                          );
                        })}
                    </select>

                    {errors.city && (
                      <small className="text-danger">
                        {errors.city.message?.toString() || ""}
                      </small>
                    )}
                  </div>

                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2">
                    <label className="fw-bolder text-black ">
                      Industry, looking for a job in?
                    </label>
                    <Controller
                      name="industry"
                      control={control}
                      rules={{
                        required: "Industry is required",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <select
                          name="industry"
                          className="select border-2 border-[#c3c6c7] form-select  text-black bg-transparent"
                          value={value}
                          onChange={(e) => {
                            setIndustry({
                              ...industry,
                              industry_id: e.target.value,
                            });
                            onChange(e);
                          }}
                        >
                          <option className=" text-black" value="">
                            <span className="text-black">
                              Please select Your Industry...
                            </span>
                          </option>
                          {Industry?.data &&
                            Industry?.data.map((item, index) => {
                              return (
                                <option
                                  className="text-black"
                                  value={item?.ID}
                                  key={index}
                                >
                                  <span className="text-black">
                                    {item?.category}
                                  </span>
                                </option>
                              );
                            })}
                        </select>
                      )}
                    />

                    {errors.industry && (
                      <small className="text-danger">
                        {errors.industry.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-2 gap-2 px-md-2 ">
                    <label className="fw-bolder text-black ">Job Title</label>
                    <select
                      {...register("subject", {
                        required: "Job Title is required",
                      })}
                      disabled={industry?.industry_id === ""}
                      name="subject"
                      className="select border-2 border-[#c3c6c7] form-select  text-black bg-transparent"
                    >
                      <option className="text-black" value="">
                        <span className="text-black">
                          Please select Job Title...
                        </span>
                      </option>
                      {Jobs?.data &&
                        Jobs?.data.map((item, index) => {
                          return (
                            <option
                              className="text-black"
                              value={item?.ID}
                              key={index}
                            >
                              <span className="text-black">
                                {item?.function}
                              </span>
                            </option>
                          );
                        })}
                    </select>
                    {industry?.industry_id === "" && (
                      <p className=" mb-0 text-black font-semibold">
                        *Please Select Industry First.
                      </p>
                    )}
                    {errors.subject && (
                      <small className="text-danger">
                        {errors.subject.message}
                      </small>
                    )}
                  </div>

                  <div className="d-flex w-full flex-column cols-span-2  px-2 col-span-2  ">
                    <label
                      htmlFor="formFile"
                      className="form-label fw-bolder text-black"
                    >
                      Upload Resume (Optional)
                    </label>

                    <input
                      {...register("resume", {
                        required: false,
                      })}
                      className="form-control border-2 border-[#c3c6c7] w-full bg-transparent border-dashed text-black "
                      type="file"
                      id="formFile"
                      accept=".pdf,.doc,.docx,image/jpeg"
                      name="resume"
                      style={{ height: "100px", width: "100%" }}
                      onChange={(e: any) => {
                        const file = e.target.files[0];
                        const validTypes = [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          "image/jpeg",
                        ];

                        if (file && validTypes.includes(file.type)) {
                          // File is valid, do something with the file
                        } else {
                          setValue("resume", "");
                          Toast(
                            "error",
                            "File type not supported. Please upload a valid PDF, Word document, or JPEG image."
                          );
                        }
                      }}
                    />
                  </div>

                  <div className="flex flex-col align-items-center mt-2 col-12 mb-2 col-span-2 ">
                    <div className="flex flex-row gap-2 justify-content-center">
                      <input
                        type="checkbox"
                        {...register("term", {
                          required: "Please select terms & conditions ",
                        })}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label w-lg-[50%] text-black"
                        htmlFor="flexCheckDefault"
                      >
                        By submitting our webform, I agreed to the{" "}
                        <NavLink
                          to={AppRoute.Terms_of_use}
                          style={{ color: "#a73358" }}
                        >
                          Terms and Conditions
                        </NavLink>{" "}
                        &{" "}
                        <NavLink
                          to={AppRoute.Privacy_Policy}
                          style={{ color: "#a73358" }}
                        >
                          Privacy Policy
                        </NavLink>{" "}
                        governing the use of fpsjobs.com.
                      </label>
                    </div>
                    {errors.term && (
                      <small className="text-danger d-block">
                        {errors.term.message}
                      </small>
                    )}
                  </div>
                  <div className="flex flex-col xl:flex-row justify-center items-center mt-1  col-span-2 gap-4  ">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className={`bg-black  text-[15px] font-bold  text-white reg w-full border-[1px] border-solid border-black ${
                        isPending &&
                        "d-flex w-full flex-row justify-content-center"
                      }`}
                      disabled={isPending ? true : false}
                    >
                      {isPending ? (
                        <div className="btn-loader"></div>
                      ) : (
                        "Register Now"
                      )}
                    </button>

                    {/* <p className=" mb-0 text-black font-bold text-[18px]">OR</p>

                    <div
                      typeof="button"
                      onClick={() => auth()}
                      className=" flex gap-2 items-center justify-center px-2 py-[10px] bg-black cursor-pointer rounded-[30px] w-[100%] xl:w-[50%]"
                    >
                      <img
                        src={googleIcon}
                        alt="google icon"
                        className=" w-[30px]"
                      />
                      <p className="mb-0 text-black xl:text-[14px] 2xl:text-[16px] font-semibold ">
                        Sign-Up with Google
                      </p>
                    </div> */}
                  </div>
                  <div
                    typeof="button"
                    className="sign-up text-center mt-2 flex justify-center items-center w-full col-span-2"
                  >
                    <span className="fw-bolder text-black">
                      Already have an account?
                    </span>
                    <NavLink to={AppRoute.Login} className="text-black">
                      &nbsp;Login
                    </NavLink>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div className="d-flex w-full flex-column justify-content-center align-items-center gap-4 ">
                  <OtpSignUp
                    name={"otp"}
                    cb={(_data) => {
                      const data = {
                        phone_number: mobileNumber,
                        ..._data,
                        ...otpSendData,
                      };
                      onVerificationOtp(data);
                    }}
                    digit={6}
                    label={
                      " Please enter your verification code to complete your registration."
                    }
                    isResendOtp={false}
                    isPending={isSendOtp}
                    mobile={mobileNumber}
                    sethashValue={sethashValue}
                    setOtpSendData={setOtpSendData}
                    otpSendData={otpSendData}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <SignUpSecondModal setModal={setModal} isModal={isModal} />
    </>
  );
};

export default memo(SignUp);
