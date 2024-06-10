import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../../Navigator/AppRoute";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { useGlobalContext } from "../../../Context/GlobalContextProvider";
import { Toast } from "@Utils/Toast";
import { formatDistance } from "date-fns";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { useQueryClient } from "@tanstack/react-query";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobHorizontal = ({ job, jobIdSet = new Set() }: any) => {
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const { data: Category } = useCategoryList({});
  const { mutateAsync: Favourite } = useFavourite({});
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

  return (
    <div
      key={job?.id}
      className="features-job style-3 jobs-row"
      onClick={() => navigate(createQueryBySlug(job, Category))}
    >
      {/* {profileDetails?.user?.premium === "1" ? (
        <p style={{ color: "#a73358" }}>{job?.company_name}</p>
      ) : (
        <p style={{ color: "#a73358" }}>-IIT JEE NEET</p>
      )} */}

      <div className="inner-box">
        <div className="company">
          <div className="box-content">
            <h3>
              <Link to="">{job?.job_title}</Link>
              <span className="icon-bolt mx-2"></span>
            </h3>
            {/* <div className="star">
              <span className="icon-star-full"></span>
              <span className="icon-star-full"></span>
              <span className="icon-star-full"></span>
              <span className="icon-star-full"></span>
              <span className="icon-star-full"></span>
            </div> */}
          </div>
        </div>
        <div className="group-btn">
          {userData?.UID && (
            <span
              className={`icon-heart ${isJobFavourited && "activefar"}`}
              onClick={(e) =>
                isJobFavourited ? setRemoveFavourite(e) : setJobFavourite(e)
              }
            ></span>
          )}
          {userData?.UID ? (
            job?.applied_job !== "Applied" ? (
              <button
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
                Apply
              </button>
            ) : (
              <div className="d-flex align-items-center text-success fs-6">
                <i className="icon-check mr-1" />
                Applied
              </div>
            )
          ) : (
            <button
              onClick={() =>
                navigate(AppRoute.Apply_job, {
                  state: { jobID: job?.jobID },
                })
              }
            >
              View Job
            </button>
          )}
        </div>

        <div className="category">
          <ul className="job-tag">
            <li>
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
        <div className="salary ">
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
        <ul className="info">
          <li className="d-flex flex-col justify-content-center gap-1">
            <div className="d-flex flex-row justify-content-center align-items-center gap-1">
              <span className="icon-map-pin"></span>
              <span> {`${job?.city},`}</span>
              <span> {`${job?.state}`}</span>
              <span> ,{date.toString().replace("about", "")}</span>
            </div>
          </li>
        </ul>
      </div>
      {/* <Link to="/Jobsingle_v1" className="jobtex-link-item" tabIndex="0"></Link> */}
    </div>
  );
};

export default JobHorizontal;
