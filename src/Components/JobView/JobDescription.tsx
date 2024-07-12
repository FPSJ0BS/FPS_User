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

const JobDescription = ({ data, id }: any) => {
  const { userData } = useGlobalContext();
  const [searchJob] = useState<any>({
    UID: userData?.UID ? userData?.UID : 103082,
    pageNo: 0,
    limit: 10,
  });
  const { data: jobs } = useSearchJobsQuery(
    { enabled: !!searchJob?.UID },
    searchJob
  );

  
  const date = data?.created_at
    ? formatDistance(new Date(data?.created_at), new Date(), {
        addSuffix: true,
      })
    : "";


  const relatedJob =
    jobs?.jobs &&
    jobs?.jobs?.filter((item) => {
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
          <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <aside className="sidebar">
              <div className="sidebar-widget">
                <h4 className="widget-title">Job Overview</h4>
                <div className="widget-content">
                  <ul className="job-overview">
                    <li>
                      <i
                        className="icon icon-calendar d-flex flex-row justify-content-center align-items-center fs-4"
                        style={{ color: "#a73358" }}
                      />
                      <h5>Date Posted:</h5>
                      <span>{`Posted ${date
                        .toString()
                        .replace("about", "")}`}</span>
                    </li>
                    <li>
                      <span
                        className="icon-map-pin icon d-flex flex-row justify-content-center align-items-center fs-4"
                        style={{ color: "#a73358" }}
                      ></span>
                      <h5>Location:</h5>
                      <span className="mr-2">{`${data?.city},`}</span>
                      <span> {`${data?.state}`}</span>
                    </li>
                    <li>
                      <Imag
                        src={User}
                        style={{ width: "30px", height: "30px" }}
                        className="icon"
                      />
                      <h5>Job Title:</h5>
                      <span>{data?.job_title}</span>
                    </li>
                    <li>
                      <Imag
                        src={Salary}
                        style={{ width: "30px", height: "30px" }}
                        className="icon"
                      />
                      <div>
                        <h5>Salary:</h5>
                        {data?.salary_type === "annually" && (
                          <>
                            <span className="fw-500 text-dark">
                              {data?.salary_unit.replaceAll("LPA", "")}
                            </span>{" "}
                            <span className="year">{`${data?.salary_type.replaceAll(
                              "annually",
                              "Lac. per year"
                            )}`}</span>
                          </>
                        )}
                        {data?.salary_type === "monthly" && (
                          <>
                            <span className="fw-500 text-dark">
                              {data?.salary_unit.replaceAll("Per/Month", "")}
                            </span>
                            <span className="year">{`${data?.salary_type.replaceAll(
                              "monthly",
                              "Per Month"
                            )}`}</span>
                          </>
                        )}
                      </div>
                    </li>
                    <li>
                      <Imag
                        src={User}
                        style={{ width: "30px", height: "30px" }}
                        className="icon"
                      />
                      <h5>Job Level:</h5>
                      <span>{data?.job_level}</span>
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
