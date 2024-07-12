import { memo, useState } from "react";
import "./JobsByLocation.scss";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";
import { useGlobalContext } from "@Context/GlobalContextProvider";

const JobsByLocation = ({ data, title, marginTop }: any) => {

    const {  setCategoryData } = useGlobalContext();
  const [showMore, setShowMore] = useState(12);
  const navigate = useNavigate();
  return (
    <div className={`container mt-${marginTop}`}>
      <div className="jobs-by-location">
        <h2>{`Jobs By ${title}`}</h2>
        <ul className="d-flex align-items-center justify-content-start w-full">
          {data &&
            data.slice(0, showMore).map((job, index) => (
              <li
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-center "
                onClick={() => {
                  if (title === "Category") {
                       setCategoryData(job);
                       navigate(
                         `${job?.category
                           .trim()
                           .replaceAll(" ", "-")
                           .toLowerCase()}/${job?.ID}`,
                         {
                           state: job?.ID,
                         }
                       );
                  } else {
                    if (job?.name) {
                      navigate({
                        pathname: AppRoute.Find_Jobs,
                        search: createSearchParams({
                          [title.toLowerCase()]: job?.name,
                        }).toString(),
                      });
                    }
                  }
                }}
              >
                <span className="icon-keyboard_arrow_right fs-3" />
                {title === "Category" ? (
                  <a>{`${job?.category}`}</a>
                ) : (
                  <a>{`Teacher Jobs in ${job?.name}`}</a>
                )}
              </li>
            ))}
        </ul>
        <div className="divider">
          {data && data?.length > 12 && showMore <= data?.length && (
            <button
              className="show-more d-flex align-items-center"
              onClick={() => {
                setShowMore(showMore + 12);
              }}
            >
              <span className="icon-keyboard_arrow_down fs-3" />
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(JobsByLocation);
