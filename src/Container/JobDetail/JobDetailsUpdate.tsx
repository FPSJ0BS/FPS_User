import { useNavigate, useParams } from "react-router-dom";
import "./jobDetails.scss";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { memo, useEffect, useState } from "react";
import useJobDetailsNode from "@Hooks/Queries/useJobDetailsNode";
import parse from "html-react-parser";
import useSearchJobsQueryNode from "@Hooks/Queries/useSearchJobsQueryNode";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { AppRoute } from "@Navigator/AppRoute";
import { getRefetchUserProfileData } from "@/api/api";
import { Toast } from "@Utils/Toast";
import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import { useDispatch } from "react-redux";
import {
  FaBusinessTime,
  FaCalendarDays,
  FaLanguage,
  FaLocationDot,
} from "react-icons/fa6";
import { AiFillAlert } from "react-icons/ai";
import { TbHourglassFilled } from "react-icons/tb";
import { AiFillProfile } from "react-icons/ai";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoIosTime } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { DiCssdeck } from "react-icons/di";

const JobDetailsUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("idididididid", id);
  const { userData } = useGlobalContext();
  const { data: Category } = useCategoryList({});
  const uid = userData?.UID ? userData?.UID : 103082;
  // const { data: jobsDetails } = useJobDetails(
  //   { enabled: !!uid },
  //   {
  //     UID: uid,
  //     jobID: id || "",
  //   }
  // );

  const { data: jobsDetails } = useJobDetailsNode(
    { enabled: !!uid },
    {
      facultyID: uid,
      jobID: id || "",
    }
  );
  const jobWhole = jobsDetails?.data?.job;
  console.log("jobWhole,jobWhole", jobWhole);

  const [searchJob] = useState<any>({
    facultyID: userData?.UID ? userData?.UID : 103082,
    page: 0,
    limit: 10,
  });
  const { data: jobs } = useSearchJobsQueryNode(
    { enabled: !!searchJob?.facultyID },
    searchJob
  );
  const relatedJob =
    jobs?.data?.jobsList &&
    jobs?.data?.jobsList?.filter((item) => {
      return item?.catID === jobWhole?.catID && item?.slug !== id;
    });

  const navigate = useNavigate();

  const [profileDetails, setProfileDetails] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getRefetchUserProfileData(userData?.UID);

        if (res?.data?.status) {
          setProfileDetails(res?.data?.data?.user);
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  const openingModal = async (applyID) => {
    await dispatch(
      updateAppliedJobValues({
        applyID,
      })
    );
    await dispatch(openModal());
  };

  // const job = jobsDetails?.job;

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInTime = now.getTime() - date.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else if (differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInMonths === 1) {
      return "1 month ago";
    } else if (differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    } else if (differenceInYears === 1) {
      return "1 year ago";
    } else {
      return `${differenceInYears} years ago`;
    }
  };

  const convertToAmPm = (timeStr) => {
    // Create a Date object from the time string
    const [hours, minutes, seconds] = timeStr.split(":");

    // Convert to 12-hour format and determine AM/PM
    let hour = parseInt(hours, 10); // Convert the hour to an integer
    const ampm = hour >= 12 ? "PM" : "AM";

    // Convert hour from 24-hour to 12-hour format
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12' (midnight case)

    return `${hour} ${ampm}`;
  };

  return (
    <div className="container cursor-default">
      {/* {jobsDetails && (
        <SEO
          title={job?.meta_title || `${job?.job_title} - ${job?.name}`}
          description={job?.meta_description}
          metaKeywords={job?.meta_keywords}
          ogKeywords={job?.og_keywords}
          ogDescription={job?.og_description}
          ogTitle={job?.og_title}
          name={`${AppConst.LogoName} Detail`}
          type={"Job Detail Page"}
        />
      )} */}

      {/* <div className="job-details__update">
        <section className="job-detail-section">
          <JobHeading data={jobWhole } packType={jobsDetails?.data?.pack_type} />
          <JobDescription data={jobWhole} id={id} />
        </section>
      </div> */}

      <div className=" min-h-[100vh] w-full flex flex-col-reverse lg:flex-row gap-3 ">
        <div className="h-full w-[100%] lg:w-[20%] bg-white shadow-lg p-3 my-4 flex flex-col gap-4 rounded-lg ">
          <div className="flex flex-col gap-2">
            <h3 className=" text-[18px] font-semibold ">Related Jobs</h3>

            <hr />
          </div>

          <div className="flex flex-col gap-3 cursor-default">
            {relatedJob?.slice(0, 8)?.map((item, index) => {
              const isLast = index === relatedJob.length - 1;
              return (
                <div
                  key={index}
                  onClick={() => navigate(createQueryBySlug(item, Category))}
                  className="  w-full min-h-[50px] rounded-lg border-solid flex flex-col gap-2 p-2 cursor-pointer"
                >
                  <h6 className=" font-bold text-[16px]">{item?.job_title}</h6>
                  <div className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    <p className="mb-0 text-[14px] font-medium">
                      {item?.city}, {item?.state}
                    </p>
                  </div>

                  {item?.job_type && (
                    <div className=" flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-briefcase-business"
                      >
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>

                      <p className="mb-0 text-[14px] font-medium">
                        {item?.job_type}
                      </p>
                    </div>
                  )}

                  {item?.job_level && (
                    <div className=" flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-gauge"
                      >
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                      </svg>

                      <p className="mb-0 text-[14px] font-medium">
                        {item?.job_level}
                      </p>
                    </div>
                  )}
                  {item?.selection_process && (
                    <div className=" flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user-round-pen"
                      >
                        <path d="M2 21a8 8 0 0 1 10.821-7.487" />
                        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                        <circle cx="10" cy="8" r="5" />
                      </svg>

                      <p className="mb-0 text-[14px] font-medium">
                        {item?.selection_process}
                      </p>
                    </div>
                  )}
                  {!isLast && <hr />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-full w-[100%] lg:w-[80%]  p-4 flex flex-col gap-[30px]">
          <div className="w-full min-h-[200px] justify-center gap-3 bg-[url('@Assets/Home/JDbanner.png')] bg-cover  bg-no-repeat rounded-lg shadow-none bg-black pr-[50px] p-[25px] flex flex-col ">
            {jobsDetails?.data?.pack_type === "Prepaid" &&
            userData?.UID !== undefined ? (
              <h6 className=" text-white text-[17px] md:text-[25px] font-semibold break-words">
                {jobWhole?.name}
              </h6>
            ) : jobWhole?.show_all === 1 ? (
              <h6 className=" text-white text-[17px] md:text-[25px] font-semibold break-words">
                {jobWhole?.name}
              </h6>
            ) : (
              <h6 className=" text-white text-[17px] md:text-[25px] font-semibold break-words">
                {jobWhole?.category_title}
              </h6>
            )}

            <h6 className=" text-white text-[14px] md:text-[18px] font-medium">
              {jobWhole?.job_title}
            </h6>

            <div className=" flex flex-col md:flex-row items-center gap-3 w-full justify-between">
              <div className="flex gap-2 flex-col md:flex-row md:items-center lg:gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-white"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <span className=" mb-0 text-white font-medium">
                    {jobWhole?.city}, {jobWhole?.city}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-indian-rupee text-white"
                  >
                    <path d="M6 3h12" />
                    <path d="M6 8h12" />
                    <path d="m6 13 8.5 8" />
                    <path d="M6 13h3" />
                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                  </svg>

                  <span className=" mb-0 text-white font-medium">
                    {jobWhole?.salary_unit}
                  </span>
                </div>
              </div>
              <div className=" flex gap-2 items-center">
                {!(jobWhole?.appliedStatus === "0") && (
                  <div
                    onClick={() => openingModal(jobWhole?.applyID)}
                    className="bg-[#f9dcc4]  text-[14px] px-4  h-[30px]  md:h-[35px]  rounded-[30px] font-bold text-black flex items-center justify-center cursor-pointer "
                  >
                    Track
                  </div>
                )}

                <div className=" bg-[#c94f56] text-[14px] w-[150px] h-[30px]  md:w-[150px] md:h-[35px]  rounded-[30px] font-semibold text-white flex items-center justify-center cursor-pointer">
                  {jobWhole?.appliedStatus === "Applied" && userData?.UID ? (
                    <span>
                      <span className="d-inline-flex align-items-center text-success fs-6 justify-content-end text-white">
                        <i className="icon-check mr-1" />
                        Applied
                      </span>
                    </span>
                  ) : userData?.UID ? (
                    <a
                      className="theme-btn btn-style-one"
                      data-bs-toggle="modal"
                      data-bs-target="#applyJobModal"
                      onClick={() => {
                        if (Number(profileDetails?.packID) > 0) {
                          navigate(AppRoute.Apply_job, {
                            state: jobWhole,
                          });
                        } else {
                          Toast(
                            "error",
                            "Upgrade to a subscription for unlimited access! Enjoy exclusive features and content"
                          );
                          navigate(
                            `${AppRoute.Dashboard}/${AppRoute.Membership}`
                          );
                        }
                      }}
                    >
                      Apply For Job
                    </a>
                  ) : (
                    <div className=" flex flex-col gap-2">
                      <a
                        className="theme-btn btn-style-one"
                        data-bs-toggle="modal"
                        data-bs-target="#applyJobModal"
                        onClick={() => navigate(`${AppRoute.Login}`)}
                      >
                        Login For Apply
                      </a>
                    </div>
                  )}
                </div>
                <div className="btn-box"></div>
              </div>
            </div>
          </div>

          <div className=" min-h-[20vh] w-full bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className=" text-[18px] font-semibold ">Overview</h3>

              <hr />
            </div>

            <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <FaLocationDot size={20} className=" " />
                  <p className=" mb-0 text-[13px] font-semibold">Location:</p>
                </div>
                <p className=" text-[#c94f56] font-bold">
                  {jobWhole?.city}, {jobWhole?.state}
                </p>
              </div>

              {jobWhole?.selection_process && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <AiFillAlert size={22} />
                    <p className=" mb-0 text-[13px] font-semibold">
                      Selection Process:
                    </p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {jobWhole?.selection_process}
                  </p>
                </div>
              )}

              <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <TbHourglassFilled size={20} />
                  <p className=" mb-0 text-[13px] font-semibold">
                    Experience Required:
                  </p>
                </div>
                <p className=" text-[#c94f56] font-bold">
                  {jobWhole?.min_experience} to {jobWhole?.max_experience} years
                </p>
              </div>
              {jobWhole?.job_type && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <AiFillProfile size={20} />
                    <p className=" mb-0 text-[13px] font-semibold">Job Type:</p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {jobWhole?.job_type}
                  </p>
                </div>
              )}

              {jobWhole?.job_level && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <SiLevelsdotfyi size={18} />
                    <p className=" mb-0 text-[13px] font-semibold">
                      Job Level:
                    </p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {jobWhole?.job_level}
                  </p>
                </div>
              )}

              {jobWhole?.created_at && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <IoIosTime size={20} />
                    <p className=" mb-0 text-[13px] font-semibold">
                      Job Posted:
                    </p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {getRelativeTime(jobWhole?.created_at)}
                  </p>
                </div>
              )}
              {jobWhole?.shift_start && jobWhole?.shift_end && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <FaBusinessTime size={20} />
                    <p className=" mb-0 text-[13px] font-semibold">
                      Shift Timings:
                    </p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {convertToAmPm(jobWhole?.shift_start)} -{" "}
                    {convertToAmPm(jobWhole?.shift_end)}
                  </p>
                </div>
              )}
              {jobWhole?.working_days && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <FaCalendarDays size={18} />
                    <p className=" mb-0 text-[13px] font-semibold">
                      Working Days:
                    </p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {jobWhole?.working_days}
                  </p>
                </div>
              )}
              {jobWhole?.process_language && (
                <div className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <FaLanguage size={25} />
                    <p className=" mb-0 text-[13px] font-semibold">Language:</p>
                  </div>
                  <p className=" text-[#c94f56] font-bold">
                    {jobWhole?.process_language}
                  </p>
                </div>
              )}
            </div>
          </div>

          {jobsDetails?.data?.benefits.length > 0 && (
            <div className=" min-h-[20vh] w-full bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className=" text-[18px] font-semibold ">Benefits</h3>

                <hr />
              </div>

              <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {jobsDetails?.data?.benefits?.map(({ title, icon }, index) => {
                  return (
                    <div
                      key={index}
                      className=" bg-[#f9eeef] min-h-[50px] min-w-[150px] rounded-lg p-2 flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-1">
                        {icon ? (
                          <img
                            src={icon}
                            alt={`${title}${icon}`}
                            className="w-[30px]"
                          />
                        ) : (
                          <DiCssdeck size={30} />
                        )}
                        <p className=" mb-0 text-[13px] font-semibold">
                          {title}
                        </p>
                      </div>
                      {/* <p className=" text-[#c94f56] font-bold">
                        {title}, {title}
                      </p> */}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className=" min-h-[35vh] w-full bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className=" text-[18px] font-semibold ">Job Description</h3>

              <hr />
            </div>

            {parse(jobWhole?.job_description ? jobWhole?.job_description : "")}
          </div>
        </div>
      </div>

      {/* {isModal && (
        <Modal
          children={<LoginModal setIsModal={setIsModal} />}
          setIsModal={setIsModal}
          isModal={isModal}
          isFull={true}
        />
      )} */}
    </div>
  );
};

export default memo(JobDetailsUpdate);
