import useReg from "@Hooks/Mutation/useReg";
import useGetCityList from "@Hooks/Queries/useGetCityList";
import useIndustryList from "@Hooks/Queries/useIndustryList";
import useStatesList from "@Hooks/Queries/useStatesList";
import { memo, useState } from "react";
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
// import useExperiences from "@Hooks/Queries/useExperiences";
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
  const { data: State } = useStatesList({});
  const { data: cityList } = useGetCityList(
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

  let pwd = watch("password");

  const onSubmit: SubmitHandler<IRegType> = async (data) => {
    setMobileNumber(data?.mobile);
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
    };
    const formData: any = FormDataAppend(_data);
    try {
      // setModal(true);
      // console.log(formData);
      await reg(formData).then((res) => {
        if (res?.success) {
          Toast("success", res?.message);
          setIsOtpPage(false);
        } else {
        }
      });
    } catch (e: any) {
      Toast("error", e?.response?.data?.data);
      console.log(e);
    }
  };

  const { data: Industry } = useIndustryList({});
  const { data: Jobs } = useJobTitle(
    { enabled: !!industry.industry_id },
    industry
  );
  const onVerificationOtp: SubmitHandler<any> = (data) => {
    const _data = { mobile: data?.mobile, otp: data?.otp };
    try {
      verify(_data)
        .then((res) => {
          if (res.success) {
            setUserLoginData({
              ...res?.data,
              UID: res?.data?.faculityID,
            });
            Toast("success", "Login successful! Enjoy your experience.");
            navigate(AppRoute.Home);
          }
        })
        .catch((_) => {
          Toast("error", "Invalid  Otp");
        });
    } catch (e: any) {}
  };
  const validTypes = [
    'application/pdf',
    'application/msword',

    'image/jpeg',
  ];
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
              <div className=" flex w-full bg-black justify-center md:mx-[5vw]  items-center gap-5 h-[74vh] rounded-lg">
                <div className="hidden  mb-4 xl:flex justify-start items-start flex-col w-[35%]">
                  <h6 className="fs-4 pt-4 fw-bolder text-left text-white">
                    {`Create your ${AppConst.LogoName} profile`}
                  </h6>
                  <p className="mt-2 text-base text-white">
                    Search & apply to jobs from India's No.1 Job Site
                  </p>

                  <div className=" grid grid-cols-2 2xl:grid-cols-1 gap-2">
                    <div className="flex flex-col mt-4 gap-1">
                      <img src={JOBMATCHING} className=" w-[40px]" alt="img" />
                      <h3 className="text-white font-semibold text-[15px] mt-1">
                        Personalized Job Matching
                      </h3>
                      <p className="text-white font-normal text-[12px]">
                        Get matched with job openings that fit your skills and
                        preferences.
                      </p>
                    </div>

                    <div className="flex flex-col mt-4 gap-1">
                      <img src={AIICON} className=" w-[40px]" alt="img" />
                      <h3 className="text-white font-semibold text-[15px] mt-1">
                        AI-Powered Career Guidance
                      </h3>
                      <p className="text-white font-normal text-[12px]">
                        Receive expert advice and insights to help you grow in
                        your career.
                      </p>
                    </div>

                    <div className="flex flex-col mt-4 gap-1">
                      <img src={RESUMEICON} className=" w-[35px]" alt="img" />
                      <h3 className="text-white font-semibold text-[15px] mt-1">
                        Resume Builder
                      </h3>
                      <p className="text-white font-normal text-[12px]">
                        Create a stunning resume that showcases
                        your achievements
                      </p>
                    </div>
                  </div>
                </div>
                <form
                  className=" w-[90%] lg:w-[50%] gap-2 grid grid-cols-2  bg-[#302f2f]  h-[95%] py-4 mr-3 rounded-xl px-3 overflow-y-auto"
                  id="reg-form"
                  autoComplete="off"
                >
                  <div className="d-flex  flex-column w-full col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white ">First Name</label>
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
                      placeholder="Fill in your first name"
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-1 text-white bg-transparent  placeholder-white"
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.first_name && (
                      <small className="text-danger">
                        {errors.first_name.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full  flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2 ">
                    <label className="fw-bolder text-white">Last Name</label>
                    <input
                      {...register("last_name", {
                        required: "Last Name is required",
                        pattern: {
                          value: NAME_REGEX,
                          message: "Please enter valid Last name",
                        },
                      })}
                      name="last_name"
                      placeholder="Last Name"
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-1 text-white bg-transparent placeholder-white "
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.last_name && (
                      <small className="text-danger">
                        {errors.last_name.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white ">Email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Please enter a valid email address",
                        },
                      })}
                      name="email"
                      placeholder="Email Address"
                      aria-invalid="true"
                      type="undefined"
                      className="p-2 border-1 text-white bg-transparent placeholder-white "
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white ">Mobile</label>
                    <input
                      {...register("mobile", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: PHONE_REGEXP,
                          message: "Invalid Mobile number",
                        },
                      })}
                      name="mobile"
                      placeholder="Mobile Number"
                      aria-invalid="true"
                      type="text"
                      className="p-2 border-1 text-white bg-transparent placeholder-white"
                      autoComplete="false"
                      style={{ paddingLeft: 10 }}
                    />
                    {errors.mobile && (
                      <small className="text-danger">
                        {errors.mobile.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2 ">
                    <label className="fw-bolder text-white">Password</label>

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
                            className="p-2 border-1 text-white bg-transparent placeholder-white"
                            placeholder="Password"
                            id="password-input"
                            value={value}
                            onChange={onChange}
                          />
                          <Link
                            className={`text-white password-addon ${
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
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white">
                      Confirm Password
                    </label>
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
                            className="p-2 border-1 text-white bg-transparent placeholder-white"
                            placeholder="Confirm Password"
                            id="password-input"
                            value={value}
                            onChange={onChange}
                          />
                          <Link
                            className={`password-addon ${
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
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white">State</label>
                    <Controller
                      name="state"
                      control={control}
                      rules={{
                        required: "State is required",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <select
                          name="state"
                          className="select border-1 form-select border border-slate-100 text-white bg-transparent"
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
                            <span className="text-black">Select State</span>
                          </option>
                          {State?.states &&
                            State?.states?.map((item: any, index) => {
                              return (
                                <option
                                  className="text-black"
                                  value={item?.id}
                                  key={index}
                                >
                                  <span className="text-black">
                                    {item?.name}
                                  </span>
                                </option>
                              );
                            })}
                        </select>
                      )}
                    />

                    {errors.state && (
                      <small className="text-danger">
                        {errors.state.message}
                      </small>
                    )}
                  </div>
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2 ">
                    <label className="fw-bolder text-white ">City</label>
                    <select
                      {...register("city", {
                        required: "City is required",
                      })}
                      name="city"
                      className="select border-1 form-select border border-slate-100 text-white bg-transparent"
                      autoComplete="off"
                    >
                      <option value="">
                        <span className="text-black">Select City</span>
                      </option>
                      {cityList?.cities &&
                        cityList?.cities.map((item, index) => {
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

                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2">
                    <label className="fw-bolder text-white ">Industry, looking for a job in?</label>
                    <Controller
                      name="industry"
                      control={control}
                      rules={{
                        required: "Industry is required",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <select
                          name="industry"
                          className="select border-1 form-select border border-slate-100 text-white bg-transparent"
                          value={value}
                          onChange={(e) => {
                            setIndustry({
                              ...industry,
                              industry_id: e.target.value,
                            });
                            onChange(e);
                          }}
                        >
                          <option value="">
                            <span className="text-black">
                              Select Your Industry
                            </span>
                          </option>
                          {Industry?.industries &&
                            Industry?.industries.map((item, index) => {
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
                  <div className="d-flex w-full flex-column col-12 col-md-6 col-lg-4 mb-4 gap-2 px-md-2 ">
                    <label className="fw-bolder text-white ">Job Title</label>
                    <select
                      {...register("subject", {
                        required: "Job Title is required",
                      })}
                      name="subject"
                      className="select border-1 form-select border border-slate-100 text-white bg-transparent"
                    >
                      <option value="">
                        <span className="text-black">Select Job Title </span>
                      </option>
                      {Jobs?.jobs &&
                        Jobs?.jobs.map((item, index) => {
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
                    {errors.subject && (
                      <small className="text-danger">
                        {errors.subject.message}
                      </small>
                    )}
                  </div>

                  <div className="d-flex w-full flex-column cols-span-2  px-2 col-span-2  ">
                    <label
                      htmlFor="formFile"
                      className="form-label fw-bolder text-white"
                    >
                      Upload Resume
                    </label>

                    <input
                      {...register("resume", {
                        required: false,
                      })}
                      className="form-control border-1 w-full bg-transparent border-dashed text-white "
                      type="file"
                      id="formFile"
                      accept=".pdf,.doc,.docx,image/jpeg"
                      name="resume"
                      style={{ height: "100px", width:"100%" }}
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
                        className="form-check-label w-lg-[50%] text-white"
                        htmlFor="flexCheckDefault"
                      >
                        By submitting our webform, we agree to receive
                        promotional calls on the number shared, and such calls
                        and SMS would be coming from a third-party platform.I
                        agreed to the{" "}
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
                  <div className="flex flex-row justify-center mt-1  col-span-2 ">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className={`bg-white border-2 text-[15px] font-bold border-black border-solid text-black reg w-full ${
                        isPending && "d-flex w-full flex-row justify-content-center"
                      }`}
                      disabled={isPending ? true : false}
                    >
                      {isPending ? (
                        <div className="btn-loader"></div>
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </div>
                  <div
                    typeof="button"
                    className="sign-up text-center mt-2 flex justify-center items-center w-full col-span-2"
                  >
                    <span className="fw-bolder text-white">
                      Already have an account?
                    </span>
                    <NavLink to={AppRoute.Login} className="text-white">
                      &nbsp;Sign in
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
                      const data = { mobile: mobileNumber, ..._data };
                      onVerificationOtp(data);
                    }}
                    digit={4}
                    label={
                      " Please enter your verification code to complete your registration."
                    }
                    isResendOtp={false}
                    isPending={isSendOtp}
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
