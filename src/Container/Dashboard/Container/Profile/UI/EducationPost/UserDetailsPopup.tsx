import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalEducationModal,
  closeModalEmploymentAddModal,
  closeModalUserDetailsModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { postSubmitEducationDetails } from "@/api/api";
import useProfileEducationPost from "@Hooks/Mutation/useProfileEducationPost";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationSchema } from "@/schema/educationSchema";
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
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { AppRoute } from "@Navigator/AppRoute";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import useIndustryList from "@Hooks/Queries/useIndustryList";
import useJobTitle from "@Hooks/Queries/useJobTitle";
import Imag from "@Components/Image/Image";
import { downloadResumePdf } from "@Utils/downloadFile";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import "./inputs/profilesection.scss";
import DefaultImage from "@Assets/Icons/Profile/user.png"


function UserDetailsPopup() {
  const dispatch = useDispatch();
  const { userData } = useGlobalContext();
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
        dispatch(toggleRefetchProfile());
        navigate(`${AppRoute.Dashboard}/${AppRoute.Profile}`);
        Toast("success", res?.message);
        popupCloseFunc();
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
   
  }, [profileDetails, query.stateID, State?.states, cityList?.cities]);

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setTime(
    eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
  );

  const popupCloseFunc = async () => {
    await dispatch(closeModalUserDetailsModal());
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    const formData = new FormData();
    formData.append("UID", userData?.UID);
    formData.append("profilePic", file);
    UploadImage(formData).then((res) => {
      if (res?.status === "success") {
        refetchProfile();
        dispatch(toggleRefetchProfile());
        Toast("success", res?.message);
        popupCloseFunc()
      } else {
        popupCloseFunc()
        Toast("error", res?.message);
      }
    });
  };

  return (
    <div className="TrackPopup h-full w-[100vw] lg:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[90%] rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Add Personal Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full overflow-y-auto px-5 py-4 handleScrollbarMain">
          <form id="update-profile" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white card-box border-20 my-4">

              <div className="user-avatar-setting d-flex align-items-center mb-30 flex-col md:flex-row">
                
                <img
                  alt="avatar"
                  loading="lazy"
                  width={68}
                  height={68}
                  decoding="async"
                  data-nimg={1}
                  className="lazy-img user-img"
                  style={{ color: "transparent" }}
                  src={profileDetails?.user?.image || DefaultImage}
                />
                <div
                  className={`border-dashed border-2 border-black upload-btn position-relative tran3s ms-4 me-3 cursor-pointer videoButton flex gap-3 ${
                    isDragging ? "dragging" : ""
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <label
                    htmlFor="uploadImg"
                    className="cursor-pointer w-full h-full flex items-center justify-center "
                  >
                    Drop image or click to select
                    <input
                      type="file"
                      id="uploadImg"
                      name="uploadImg"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          handleFileUpload(e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className=" grid md:grid-cols-2 gap-4 ">
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor="">Your Name</label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                      })}
                      name="name"
                      placeholder=" Your Name"
                      aria-invalid="true"
                      type="text"
                      disabled
                      autoComplete="false"
                      style={{ color: "#000" }}
                    />
                    {errors.name && (
                      <small className="text-danger mt-2">
                        {errors?.name?.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor="">Email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email",
                        },
                      })}
                      name="email"
                      disabled
                      placeholder="email"
                      aria-invalid="true"
                      type="email"
                      autoComplete="false"
                      style={{ color: "#000" }}
                    />
                    {errors.email && (
                      <small className="text-danger mt-2">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor=""> Date of Birth</label>
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          value={value ? new Date(value) : new Date()}
                          onChange={onChange}
                          maxDate={new Date(eighteenYearsAgo)}
                          calendarIcon={null}
                          clearIcon={null}
                          className={"w-100 text-black border-0"}
                          calendarClassName={
                            "w-100 text-black border border-secondary"
                          }
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor="">Category</label>
                    <Controller
                      name="industry"
                      control={control}
                      rules={{
                        required: "Category is required",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <select
                          name="industry"
                          className="select border-1 form-select border border-slate-100"
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
                              Select Your Category
                            </span>
                          </option>
                          {Industry?.industries &&
                            Industry?.industries.map((item, index) => {
                              return (
                                <option value={item?.ID} key={index}>
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
                </div>
                {/* <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">Skill</label>
                <select
                  {...register("job_function", {
                    required: "Please add a skill",
                  })}
                  name="job_function"
                  className="form-select form-input border border-slate-100  block w-full "
                >
                  <option value={""}>
                    <span className="text-black">Select Skill</span>
                  </option>
                  {Jobs?.jobs &&
                    Jobs?.jobs.map((item, index) => {
                      return (
                        <option value={item?.ID} key={index}>
                          <span className="text-black">{item?.function}</span>
                        </option>
                      );
                    })}
                </select>
                {errors.job_function && (
                  <small className="text-danger mt-2">
                    {errors.job_function.message}
                  </small>
                )}
              </div>
            </div> */}
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor="">Alternate Mobile</label>

                    <input
                      {...register("alternate_contact", {
                        required: false,
                        pattern: {
                          value: PHONE_REGEXP,
                          message: "Invalid Mobile number",
                        },
                      })}
                      name="alternate_contact"
                      placeholder="Alternate Mobile Number"
                      aria-invalid="true"
                      type="text"
                      // className="p-2 border-1"
                      autoComplete="false"
                    />
                    {errors.alternate_contact && (
                      <small className="text-danger">
                        {errors.alternate_contact.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="dash-input-wrapper ">
                    <label htmlFor="">Gender</label>
                    <select
                      {...register("gender", {
                        required: "Please select one…",
                      })}
                      name="gender"
                      className="select border-1 form-select border border-slate-100"
                    >
                      <option value="">
                        <span className="text-black">Please select one…</span>
                      </option>
                      <option value="Male">
                        <span className="text-black">Male</span>
                      </option>
                      <option value="Female">
                        <span className="text-black">Female</span>
                      </option>
                      <option value="Other">
                        <span className="text-black">Other</span>
                      </option>
                    </select>

                    {errors.gender && (
                      <small className="text-danger">
                        {errors.gender.message}
                      </small>
                    )}
                  </div>
                </div>
                {/* <div className=" ">
              <div className="dash-input-wrapper ">
                <label htmlFor="">Resume</label>
                <div className="d-flex flex-row gap-1">
                  <div className="col-4">
                    <button
                      className="dash-btn-one videoButton"
                      onClick={() => {
                        navigate(`${AppRoute.Dashboard}/${AppRoute.Resume}`);
                      }}
                    >{`${
                      profileDetails?.user?.cv_doc ? "Edit" : "Upload"
                    } Resume`}</button>
                  </div>
                  {profileDetails?.user?.cv_doc && (
                    <div className="col-6">
                      <button
                        className="dash-btn-one videoButton"
                        onClick={() =>
                          downloadResumePdf(profileDetails?.user?.cv_doc)
                        }
                      >
                        Preview
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div> */}
              </div>
            </div>
            {/* <div className="bg-white card-box border-20 my-4">
          <h4 className="main-title fs-5">Qualification/Work Info</h4>
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">Total Experience</label>
                <select
                  {...register("experience", {
                    required: "Please select an experience",
                  })}
                  name="experience"
                  className="form-select form-input border border-slate-100  block w-full "
                >
                  <option value={""}>Select experience</option>
                  {Experiences?.experiences &&
                    Experiences?.experiences.map((item, index) => {
                      return (
                        <option value={item?.ID} key={index}>
                          {item?.experience}
                        </option>
                      );
                    })}
                </select>
                {errors.experience && (
                  <small className="text-danger mt-2">
                    {errors.experience.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor=""> Highest Qualification</label>
                <select
                  {...register("qualification", {
                    required: "Please select qualification",
                  })}
                  name="qualification"
                  className="form-select form-input border border-slate-100  block w-full "
                >
                  {Qualification?.qualifications &&
                    Qualification?.qualifications.map((item, index) => {
                      return (
                        <option value={item?.ID} key={index}>
                          {item?.qualification}
                        </option>
                      );
                    })}
                </select>
                {errors.qualification && (
                  <small className="text-danger mt-2">
                    {errors.qualification.message}
                  </small>
                )}
              </div>
            </div>{" "}
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor=""> College/University</label>
                <input
                  {...register("university", {
                    required: "Please enter College/University name",
                  })}
                  name="university"
                  placeholder="College/University Name"
                  aria-invalid="true"
                  type="text"
                  autoComplete="false"
                  style={{ paddingLeft: 10, color: "#000" }}
                />
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor=""> Passing Year </label>
                <input
                  {...register("passing_year", {
                    required: "Please enter Passing year",
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Please enter a valid year",
                    },
                  })}
                  name="passing_year"
                  placeholder="Passing Year"
                  aria-invalid="true"
                  type="text"
                  autoComplete="false"
                  style={{ paddingLeft: 10, color: "#000" }}
                />
                {errors.passing_year && (
                  <small className="text-danger mt-2">
                    {errors.passing_year.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor=""> Current Salary (Annual)</label>
                <select
                  {...register("salary", {
                    required: "Please select Current Salary",
                  })}
                  name="salary"
                  className="select border-1 form-select border border-slate-100"
                >
                  {Salary?.salaries &&
                    Salary?.salaries.map((item, index) => {
                      return (
                        <option value={item?.ID} key={index}>
                          <span className="text-black">{item?.salary}</span>
                        </option>
                      );
                    })}
                </select>

                {errors.salary && (
                  <small className="text-danger mt-2">
                    {errors.salary.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label>Expected Salary (Annual)</label>
                <Controller
                  name="expected_salary"
                  control={control}
                  rules={{
                    required: "Expected salary is required",
                    validate: (value) => {
                      if (Number(value) < Number(current_salary)) {
                        return "Your expected salary is lower than your current salary. Please re-select your expected salary.";
                      }
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <select
                      name="expected_salary"
                      className="select border-1 form-select border border-slate-100"
                      value={value}
                      onChange={onChange}
                    >
                      <option value="">
                        <span className="text-black">
                          Select Your Expected Salary (Annual)
                        </span>
                      </option>
                      {Salary?.salaries &&
                        Salary?.salaries.map((item, index) => {
                          return (
                            <option value={item?.ID} key={index}>
                              <span className="text-black">{item?.salary}</span>
                            </option>
                          );
                        })}
                    </select>
                  )}
                />

                {errors.expected_salary && (
                  <small className="text-danger">
                    {errors.expected_salary.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper">
                <label htmlFor="">State</label>
                <Controller
                  name="state"
                  control={control}
                  rules={{
                    required: "State is required",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <select
                      name="state"
                      className="form-select form-input border border-slate-100  block w-full"
                      value={value}
                      onChange={(e) => {
                        setQuery({
                          ...query,
                          stateID: e.target.value,
                        });
                        setValue("city", "");
                        onChange(e);
                      }}
                    >
                      <option value="">
                        <span className="text-black">Select Your State</span>
                      </option>
                      {State?.states &&
                        State?.states?.map((item: any, index) => {
                          return (
                            <option value={item?.id} key={index}>
                              <span className="text-black">{item?.name}</span>
                            </option>
                          );
                        })}
                    </select>
                  )}
                />

                {errors.state && (
                  <small className="text-danger mt-2">
                    {errors.state.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">City</label>
                <select
                  {...register("city", {
                    required: "City is required",
                  })}
                  name="city"
                  className="form-select form-input border border-slate-100  block w-full "
                >
                  <option value="">
                    <span className="text-black">Select Your City</span>
                  </option>
                  {cityList?.cities &&
                    cityList?.cities.map((item, index) => {
                      return (
                        <option value={item?.id} key={index}>
                          <span className="text-black">{item?.name}</span>
                        </option>
                      );
                    })}
                </select>

                {errors.city && (
                  <small className="text-danger mt-2">
                    {errors.city.message}
                  </small>
                )}
              </div>
            </div>
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">
                  {" "}
                  Demo Lecture (YouTube video link place in text box){" "}
                </label>
                <input
                  {...register("demolecture", {
                    required: false,
                    pattern: {
                      value: URL_REGEX,
                      message: "Please enter valid url",
                    },
                  })}
                  name="demolecture"
                  placeholder="YouTube video link place in text box"
                  aria-invalid="true"
                  type="text"
                  autoComplete="false"
                  style={{ paddingLeft: 10, color: "#000" }}
                />
                {errors.demolecture && (
                  <small className="text-danger mt-2">
                    {errors.demolecture.message}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div> */}
            {/* <div className="bg-white card-box border-20 my-4">
          <h4 className="main-title fs-5">Current Company Info</h4>
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">Currently working Company </label>
                <input
                  {...register("current_employer", {
                    required: false,
                  })}
                  name="current_employer"
                  placeholder=" Currently working Company"
                  aria-invalid="true"
                  type="text"
                  autoComplete="false"
                  style={{ paddingLeft: 10, color: "#000" }}
                />
              </div>
            </div>{" "}
            <div className="">
              <div className="dash-input-wrapper ">
                <label htmlFor="">Past Company </label>
                <input
                  {...register("last_employer", {
                    required: false,
                  })}
                  name="last_employer"
                  placeholder="Name of the company"
                  aria-invalid="true"
                  type="text"
                  autoComplete="false"
                  style={{ paddingLeft: 10, color: "#000" }}
                />
              </div>
            </div>{" "}
          </div>
        </div> */}

            <div className="flex gap-3 mt-30">
              <button
                className="bg-[#9a3c58] px-5 py-2 rounded-lg text-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPopup;
