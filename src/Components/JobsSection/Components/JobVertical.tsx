import useFavourite from "@Hooks/Mutation/useFavourite";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContextProvider";
import { Toast } from "@Utils/Toast";
import { formatDistance } from "date-fns";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { useQueryClient } from "@tanstack/react-query";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";
// import useProfileDetails from "@Hooks/Queries/useProfileDetails";
const JobVertical = ({ job, jobIdSet = new Set(), className }: any) => {
  const queryClient = useQueryClient();
  const { userData } = useGlobalContext();
    // const { data: profileDetails } = useProfileDetails({
    //   UID: userData?.UID,
    // });
  const { mutateAsync: Favourite } = useFavourite({});
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const navigate = useNavigate();
  const { data: Category } = useCategoryList({});
  const date =
    job?.created_at &&
    formatDistance(new Date(job?.created_at), new Date(), {
      addSuffix: true,
    });
  const isJobFavourited = jobIdSet.has(job?.jobID) || job?.favourite > 0;

  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID,
      jobID: job?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["jobApplied"] });
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        queryClient.invalidateQueries({ queryKey: ["featuredJobs"] });
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
        queryClient.invalidateQueries({ queryKey: ["jobApplied"] });
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        queryClient.invalidateQueries({ queryKey: ["featuredJobs"] });
        Toast("success", "Job removed from favourites" || res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };

  return (
    <div
      className={`features-job ${
        className ? "cl2" : "cl3"
      } d-flex justify-content-between flex-column`}
      onClick={() => navigate(createQueryBySlug(job, Category))}
    >
      <div className="job-archive-header">
        {/* {profileDetails?.user?.premium === "1" ? (
          <p style={{ color: "#a73358" }}>{job?.company_name}</p>
        ) : (
          <p style={{ color: "#a73358" }}>-IIT JEE NEET</p>
        )} */}
        <div className="inner-box">
          <div className="box-content">
            <h3>
              <Link to=""> {job?.job_title} </Link>
              <span className="icon-bolt"></span>
            </h3>
            {userData?.UID && (
              <span
                className={`icon-heart ${isJobFavourited && "icon-active"}`}
                onClick={(e) =>
                  isJobFavourited ? setRemoveFavourite(e) : setJobFavourite(e)
                }
              ></span>
            )}
          </div>
        </div>
      </div>
      <ul className="col-12 mt-1">
        <li
          className={`d-flex flex-row align-items-center  grayColor ${
            !className ? "flex-wrap gap-2" : "gap-3"
          }`}
        >
          <div className="d-flex flex-row justify-content-center align-items-center gap-1">
            <span className="icon-map-pin"></span>
            <span> {`${job?.city},`}</span>
            <span> {`${job?.state}`}</span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center gap-1">
            <span className="icon-calendar"></span>
            <span> {date.toString().replace("about", "")}</span>
          </div>
        </li>
      </ul>
      <div className="job-archive-footer ">
        <div className="job-footer-left ">
          <ul className="job-tag">
            <li className="mb-2">
              <a>{job?.job_type}</a>
            </li>
            <li>
              <a>{job?.selection_process}</a>
            </li>
            {job?.job_level && (
              <li>
                <a>{job?.job_level}</a>
              </li>
            )}
          </ul>
        </div>
        <div className="job-footer-right">
          <div className="price">
            <span className="icon-dolar1"></span>
            <p>
              {job?.salary_type === "annually" && (
                <>
                  {job?.salary_unit.replaceAll("LPA", "")}{" "}
                  <span className="year">{`${job?.salary_type.replaceAll(
                    "annually",
                    "Lac. per year"
                  )}`}</span>
                </>
              )}
              {job?.salary_type === "monthly" && (
                <>
                  {job?.salary_unit.replaceAll("Per/Month", "")}{" "}
                  <span className="year">{`${job?.salary_type.replaceAll(
                    "monthly",
                    "Per Month"
                  )}`}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <Link to="" className="jobtex-link-item" tabIndex={0}></Link>
    </div>
  );
};

export default JobVertical;
