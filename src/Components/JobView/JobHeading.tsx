import { useNavigate } from "react-router-dom";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import { Toast } from "@Utils/Toast";
import { AppRoute } from "@Navigator/AppRoute";
import { formatDistance } from "date-fns";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { useQueryClient } from "@tanstack/react-query";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { memo } from "react";

const JobHeading = ({ data, packType }: any) => {
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const { data: profileDetails } = useProfileDetails({
    UID: userData?.UID,
  });

  const { mutateAsync: Favourite } = useFavourite({});
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const navigate = useNavigate();

  const date = data?.created_at
    ? formatDistance(new Date(data?.created_at), new Date(), {
        addSuffix: true,
      })
    : "";
    
  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID,
      jobID: data?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["jobDetails"] });
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
      jobID: data?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["jobDetails"] });
        Toast("success", "Job removed from favourites" || res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };

  return (
    <>
      <div className="upper-box">
        <div className="auto-container">
          <div className="job-block-seven">
            <div className="inner-box">
              <div className="content">
                {packType === "Prepaid" && userData?.UID !== undefined  ? (
                  <h6 className="mb-3" style={{ color: "#a73358" }}>
                    {data?.name}
                  </h6>
                ) : data?.show_all === 1 ? (
                  <h6 className="mb-3" style={{ color: "#a73358" }}>
                    {data?.name}
                  </h6>
                ) : (
                  <h6 className="mb-3" style={{ color: "#a73358" }}>
                    {data?.category_title}
                  </h6>
                )}

                <h6 className="mb-3" style={{ color: "#a73358" }}>
                  {data?.job_title}
                </h6>

                <ul className="job-info">
                  <li>
                    <span className="icon-map-pin icon"></span>
                    <span className="mr-2">{`${data?.city},`}</span>
                    <span> {`${data?.state}`}</span>
                  </li>
                  <li>
                    <span className="icon-calendar icon"></span>
                    <span>{date.toString().replace("about", "")}</span>
                  </li>
                  <li>
                    <span className="year icon">₹</span>{" "}
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
                  </li>
                </ul>
                <ul className="job-other-info">
                  <li className="time">{data?.job_type}</li>
                  <li className="privacy">{data?.selection_process}</li>
                  <li className="time">{data?.job_level}</li>
                </ul>
              </div>
              <div className="btn-box">
                {data?.appliedStatus === "Applied" && userData?.UID ? (
                  <span>
                    <span className="d-inline-flex align-items-center text-success fs-6 justify-content-end">
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
                      if (Number(profileDetails?.user?.packID) > 0) {
                        navigate(AppRoute.Apply_job, {
                          state: data,
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
                    <a
                      className="theme-btn btn-style-one"
                      data-bs-toggle="modal"
                      data-bs-target="#applyJobModal"
                      onClick={() => navigate(`${AppRoute.SignUp}`)}
                    >
                      Register For Apply
                    </a>
                  </div>
                )}

                <button
                  className={`bookmark-btn ${
                    data?.favourite > 0 ? "bookmark-btn-active" : ""
                  }`}
                  onClick={(e) => {
                    if (data?.favourite > 0) {
                      setRemoveFavourite(e);
                    } else {
                      setJobFavourite(e);
                    }
                  }}
                >
                  <i className="icon-heart" />
                </button>
              </div>
              <div
                className="modal fade"
                id="applyJobModal"
                tabIndex={-1}
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(JobHeading);
