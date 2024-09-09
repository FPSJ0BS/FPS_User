import { useGlobalContext } from "@Context/GlobalContextProvider";
import useFavourite from "@Hooks/Mutation/useFavourite";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { Querykeys } from "@Hooks/Queries/queryname";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { useQueryClient } from "@tanstack/react-query";
import { createQueryBySlug } from "@Utils/navigationquery";
import { Toast } from "@Utils/Toast";
import { formatDistance } from "date-fns";
import { useNavigate } from "react-router-dom";

const RelatedJobCard = (item: any) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { userData } = useGlobalContext();
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { data: Category } = useCategoryList({});
  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID ,
      jobID: item?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: [Querykeys.allJobsQuery] });
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
      jobID: item?.jobID,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: [Querykeys.allJobsQuery] });
        Toast("success", "Job removed from favourites" || res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };
  const date = item?.created_at
    ? formatDistance(new Date(item?.created_at), new Date(), {
        addSuffix: true,
      })
    : "";
  return (
    <div
      className="job-block cursor-pointe"
      onClick={() => navigate(createQueryBySlug(item, Category))}
    >
      <div className="inner-box">
        <div className="content">
          <h4>
            <a>{item?.job_title}</a>
          </h4>
          <ul className="job-info">
            <li>
              <span className="icon-map-pin icon"></span>
              <span className="mr-2">{`${item?.city},`}</span>
              <span> {`${item?.state}`}</span>
            </li>
            <li>
              <span className="icon-calendar icon"></span>
              <span>{date.toString().replace("about", "")}</span>
            </li>
            <li>
              <span className="year icon">₹</span>{" "}
              {item?.salary_type === "annually" && (
                <>
                  <span className="fw-500 text-dark">
                    {item?.salary_unit.replaceAll("LPA", "")}
                  </span>{" "}
                  <span className="year">{`${item?.salary_type.replaceAll(
                    "annually",
                    "Lac. per year"
                  )}`}</span>
                </>
              )}
              {item?.salary_type === "monthly" && (
                <>
                  <span className="fw-500 text-dark">
                    {item?.salary_unit.replaceAll("Per/Month", "")}
                  </span>
                  <span className="year">{`${item?.salary_type.replaceAll(
                    "monthly",
                    "Per Month"
                  )}`}</span>
                </>
              )}
            </li>
          </ul>
          <ul className="job-other-info">
            <li className="time">{item?.job_type}</li>
            <li className="privacy">{item?.selection_process}</li>
            <li className="time">{item?.job_level}</li>
          </ul>
          <button
            className={`bookmark-btn ${
              Number(item?.favourite) > 0 ? "bookmark-btn-active" : ""
            }`}
            onClick={(e) => {
              if (Number(item?.favourite) > 0) {
                setRemoveFavourite(e);
              } else {
                setJobFavourite(e);
              }
            }}
          >
            <i className="icon-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedJobCard;
