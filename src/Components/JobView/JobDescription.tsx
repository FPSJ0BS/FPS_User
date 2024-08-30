import { formatDistance } from "date-fns";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import facebook from "@Assets/images/facebook.svg";
import Twitter from "@Assets/images/Twitter.svg";
import Linkedin from "@Assets/images/linkedin.svg";
import Salary from "@Assets/dashboard-svg/icon-salary.svg";
import Imag from "@Components/Image/Image";
import User from "@Assets/dashboard-svg/icon-user-2.svg";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { memo, useState } from "react";
import useSearchJobsQuery from "@Hooks/Queries/useSearchJobsQuery";
import FlatList from "@Components/FlatList/FlatLIst";
import RelatedJobCard from "@Components/JobView/RelatedJobCard";
import useSearchJobsQueryNode from "@Hooks/Queries/useSearchJobsQueryNode";

const JobDescription = ({ data, id }: any) => {
  const { userData } = useGlobalContext();
  const [searchJob] = useState<any>({
    facultyID: userData?.UID ? userData?.UID : 103082,
    page: 0,
    limit: 10,
  });
  
  const { data: jobs } = useSearchJobsQueryNode(
    { enabled: !!searchJob?.facultyID },
    searchJob
  );

  const date = data?.created_at
    ? formatDistance(new Date(data?.created_at), new Date(), {
        addSuffix: true,
      })
    : "";

 

  const relatedJob =
    jobs?.data?.jobsList &&
    jobs?.data?.jobsList?.filter((item) => {
      return item?.catID === data?.catID && item?.slug !== id;
    });

  return (
    <div className="job-detail-outer">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-8 col-md-12 col-sm-12">
            <div className="job-detail">
              <h4>Job Description</h4>
              <div
                className="job-desc-details"
                dangerouslySetInnerHTML={{ __html: data?.job_description }}
              ></div>
            </div>
            <div className="other-options">
              <div className="social-share flex-wrap">
                <div className="col-sm-12" style={{ marginBottom: "20px" }}>
                  <h5>Share this job</h5>
                </div>
                <div className="col-sm-12">
                  <FacebookShareButton
                    children={
                      <a className={`facebook w-100`} target="_blank">
                        <img src={facebook} className={`w-2 me-2`} />
                        Facebook
                      </a>
                    }
                    url={window.location.href}
                  />
                  <TwitterShareButton
                    children={
                      <a className={`twitter w-100`} target="_blank">
                        <img src={Twitter} className={`w-2 me-2 mr-2`} />
                        Twitter
                      </a>
                    }
                    url={window.location.href}
                  />
                  <LinkedinShareButton
                    children={
                      <a className={`linkedin w-100`} target="_blank">
                        <img src={Linkedin} className={`w-2 me-2 mr-2`} />
                        Linkedin
                      </a>
                    }
                    url={window.location.href}
                  />
                </div>
              </div>
            </div>
            <div className="related-jobs">
              <div className="title-box">
                <h3>Related Jobs</h3>
              </div>
              <FlatList
                data={relatedJob?.slice(0, 10)}
                renderItem={RelatedJobCard}
              />
            </div>
          </div>
          <div className="sidebar-column col-lg-4 col-md-12 col-sm-12 ">
            <aside className="sidebar ">
              <div className="sidebar-widget rounded-[20px] ">
                <h4 className="widget-title text-white">Job Overview</h4>
                <div className="widget-content">
                  <ul className="job-overview text-white">
                    <li>
                      <i
                        className="icon icon-calendar d-flex flex-row justify-content-center align-items-center fs-4"
                        style={{ color: "#fff" }}
                      />
                      <h5 className=" text-white">Date Posted:</h5>
                      <span className="text-white text-[14px]">{`Posted ${date
                        .toString()
                        .replace("about", "")}`}</span>
                    </li>
                    <li>
                      <span
                        className="icon-map-pin icon d-flex flex-row justify-content-center align-items-center fs-4"
                        style={{ color: "#fff" }}
                      ></span>
                      <h5 className=" text-white">Location:</h5>
                      <span className="mr-2 text-[14px]">{`${data?.city},`}</span>
                      <span className="text-[14px]"> {`${data?.state}`}</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-captions icon"
                      >
                        <rect
                          width="18"
                          height="14"
                          x="3"
                          y="5"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                      </svg>
                      <h5 className=" text-white">Job Title:</h5>
                      <span className="text-[14px]">{data?.job_title}</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-indian-rupee icon text-white "
                      >
                        <path d="M6 3h12" />
                        <path d="M6 8h12" />
                        <path d="m6 13 8.5 8" />
                        <path d="M6 13h3" />
                        <path d="M9 13c6.667 0 6.667-10 0-10" />
                      </svg>
                      <div>
                        <h5 className=" text-white">Salary:</h5>
                        {data?.salary_type === "annually" && (
                          <>
                            <span className="fw-500 text-dark text-white text-[14px]">
                              {data?.salary_unit.replaceAll("LPA", "")}
                            </span>{" "}
                            <span className="year text-[14px] text-white">{`${data?.salary_type.replaceAll(
                              "annually",
                              "Lac. per year"
                            )}`}</span>
                          </>
                        )}
                        {data?.salary_type === "monthly" && (
                          <>
                            <span className="fw-500 text-dark text-[14px]">
                              {data?.salary_unit.replaceAll("Per/Month", "")}
                            </span>
                            <span className="year text-[14px]">{`${data?.salary_type.replaceAll(
                              "monthly",
                              "Per Month"
                            )}`}</span>
                          </>
                        )}
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-gauge icon"
                      >
                        <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M13.4 10.6 19 5" />
                      </svg>
                      <h5 className=" text-white">Job Level:</h5>
                      <span className=" text-[14px]">{data?.job_level}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(JobDescription);
