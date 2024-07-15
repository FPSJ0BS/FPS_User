// JobListing.tsx
import React, { memo } from "react";
import "./jobcard.scss"; // Import the external CSS
import Briefcase from "@Assets/images/briefcase.svg";
import Graduation from "@Assets/images/graduation.svg";
import SaveJob from "@Assets/saveJob.svg";
import Apply from "@Assets/apply.svg";
import FillSave from "@Assets/fillsave.svg";
import useFavourite from "@Hooks/Mutation/useFavourite";

import { Toast } from "@Utils/Toast";
import { formatDistance } from "date-fns";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { useQueryClient } from "@tanstack/react-query";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import useQualification from "@Hooks/Queries/useQualification";
import { AppRoute } from "@Navigator/AppRoute";
import Interview from "@Assets/interview.svg";

const JobCard = ({ jobIdSet = new Set(), job, packType }: any) => {
  console.log('jobjobjobjobjobjobjobjobjobjobjobjobjobjob', job);
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const { data: Category } = useCategoryList({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { data: Qualification } = useQualification({});
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const isJobFavourited = jobIdSet.has(job?.jobID) || job?.favourite > 0;
  const navigate = useNavigate();
  const { data: profileDetails } = useProfileDetails({
    UID: userData?.UID,
  });
  const date =
    job?.created_at &&
    formatDistance(new Date(job?.created_at), new Date(), {
      addSuffix: true,
    });
  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID,
      jobID: job?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job add sucessfully favourite");
      } else {
        Toast("error", res?.message);
      }
    });
  };
  const setRemoveFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    removeFavourite({
      UID: userData?.UID,
      jobID: job?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job removed from favourites" || res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };
  const qualification_filter =
    Qualification?.qualifications &&
    Qualification?.qualifications?.filter((item) => {
      return item?.ID === job?.qualification;
    });
  const url = window.location.href.split("/");

  return (
    <div
      className="job-card"
      onClick={() => navigate(createQueryBySlug(job, Category))}
    >
      <div className="job-listing">
        <div className="job-header">

          {packType === "Prepaid" || job?.show_all === "1" ? (
            <h2 className="school-name">{job?.company_name}</h2>
          ) : (
            <h2 className="school-name">*********-{job?.category_title}</h2>
          )}

          

          <div className="job-actions">
            {userData?.UID ? (
              job?.applied_job !== "Applied" ? (
                <button
                  className="btn apply-btn d-flex flex-row align-items-center gap-1 justify-content-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (Number(profileDetails?.user?.packID) > 0) {
                      navigate(AppRoute.Apply_job, {
                        state: { jobID: job?.jobID },
                      });
                    } else {
                      Toast(
                        "error",
                        "Upgrade to a subscription for unlimited access! Enjoy exclusive features and content"
                      );
                      navigate(`${AppRoute.Dashboard}/${AppRoute.Membership}`);
                    }
                  }}
                >
                  <img src={Apply} style={{ width: "15px", height: "16px" }} />
                  Apply
                </button>
              ) : (
                <div className="d-flex align-items-center text-success fs-6">
                  <i className="icon-check mr-1" />
                  Applied
                </div>
              )
            ) : (
              <button className="btn apply-btn d-flex flex-row align-items-center gap-1 justify-content-center">
                View Job
              </button>
            )}
            {userData?.UID && (
              <div
                className="d-flex flex-row align-items-center gap-1 justify-content-center"
                onClick={(e) =>
                  isJobFavourited ? setRemoveFavourite(e) : setJobFavourite(e)
                }
              >
                {isJobFavourited ? (
                  <img
                    src={FillSave}
                    style={{ width: "25px", height: "25px" }}
                  />
                ) : (
                  <img
                    src={SaveJob}
                    style={{ width: "25px", height: "25px" }}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <h3 className="job-title">{job?.job_title}</h3>
        <div className="details d-flex flex-row align-items-center gap-2">
          <img src={Graduation} style={{ width: "15px", height: "16px" }} />
          {`${qualification_filter?.[0]?.qualification}/Diploma`}
        </div>
        <div className="job-location d-flex flex-row align-items-center gap-2">
          <span className="icon-map-pin " style={{ color: "#a73358" }}></span>
          {`${job?.state} (${job?.city})`}
        </div>

        {/* Job Details */}
        <div className="job-details d-flex flex-row justify-content-between">
          <div className="details col-lg-2 col-md-4 col-sm-5 col-4 d-flex flex-row align-items-center gap-2">
            <span className="icon-time" style={{ color: "#a73358" }}></span>
            {`${job?.min_experience} Years Min.`}
          </div>
          <div className="details col-lg-3 col-md-4 col-sm-5 col-6 d-flex flex-row align-items-center gap-2">
            <img src={Graduation} style={{ width: "15px", height: "16px" }} />
            {job?.job_level}
          </div>

          <div className="details col-lg-2 col-md-4 col-sm-5 col-4 d-flex flex-row align-items-center gap-2">
            <img src={Briefcase} style={{ width: "15px", height: "16px" }} />
            {job?.job_type}
          </div>
          <div className="details col-lg-3 col-md-4 col-sm-5 col-6 d-flex flex-row align-items-center gap-2">
            <img src={Interview} style={{ width: "15px", height: "16px" }} />
            {job?.selection_process}
          </div>

          {/* <div className="details col-2">{props.joiningTimeframe}</div>
          <div className="details col-3">{props.vacancies} Vacancies</div> */}
        </div>
        <div className="details col-lg-5 col-sm-52 d-flex flex-row align-items-center gap-2">
          <span className="icon-dolar1" style={{ color: "#a73358" }}></span>
          {`${job?.salary_unit} Max.`}
        </div>

        <div
          className="job-description"
          dangerouslySetInnerHTML={{ __html: job?.job_description }}
        ></div>

        {/* Footer */}
        <div
          className="job-footer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <WhatsappShareButton
            children={
              <button className="share-btn d-flex flex-row align-items-center gap-2">
                <WhatsappIcon size={25} borderRadius={15} />
                Share This Job
              </button>
            }
            url={`${`${url[0]}//${url[2]}`}${createQueryBySlug(job, Category)}`}
          />

          <div className="applicants-info">
            {/* {job?.applicantsCount} Applicant |{" "} */}
            {date.toString().replace("about", "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(JobCard);
