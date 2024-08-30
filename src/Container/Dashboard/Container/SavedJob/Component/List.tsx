import Imag from "@Components/Image/Image";
import { memo, useEffect, useRef, useState } from "react";
import View from "@Assets/dashboard-svg/view.svg";
import { useNavigate } from "react-router-dom";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import { Toast } from "@Utils/Toast";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";
const List = ({ data }: any) => {
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const [isDropDown, setIsDropDown] = useState(false);
  const navigate = useNavigate();
  const { data: Category } = useCategoryList({});
  const btnRef = useRef<any>();
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  return (
    <div className="job-list-one style-two position-relative mb-10">
      <div className="row justify-content-between align-items-center">
        <div className="col-xxl-3 col-lg-3">
          <div
            className="job-title d-flex align-items-center cursor-pointer"
            onClick={() => navigate(createQueryBySlug(data, Category))}
          >
            <a className="title fw-500 tran3s w-100">{data?.job_title}</a>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 ms-auto">
          <a className="job-duration fw-500 " href="/job-details-v1/4">
            {data?.job_type}
          </a>
          <div className="job-salary d-flex flex align-items-center gap-2">
            <span className="icon-dolar1 fw-500 text-dark"></span>
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
        </div>
        <div className="col-xxl-2 col-lg-2 col-md-5 col-sm-5 col-11 ms-auto xs-mt-10 d-flex flex-row flex-wrap">
          <div className="job-location">
            <a className="d-block">{`${data?.city},${data?.state}`}</a>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-1 sm-mt-10 d-flex flex-row justify-content-center">
          <span
            className="icon-heart activefar cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              removeFavourite({
                facultyID: userData?.UID,
                jobID: data?.jobID,
              }).then((res) => {
                if (res?.status) {
                  queryClient.invalidateQueries({
                    queryKey: ["allFavourite"],
                  });
                  Toast(
                    "success",
                    "Job removed from favourites" || res?.message
                  );
                } else {
                  Toast("error", res?.message);
                }
              });
            }}
          ></span>
        </div>
        <div className="col-lg-1 col-md-4">
          <div className="action-dots float-end">
            <button
              className="action-btn dropdown-toggle show"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropDown(!isDropDown);
              }}
            >
              <span />
            </button>
            {isDropDown && (
              <ul
                className="dropdown-menu dropdown-menu-end show"
                style={{
                  position: "absolute",
                  inset: "0px 0px auto auto",
                  margin: 0,
                  transform: "translate(-25px, 90px)",
                }}
                data-popper-placement="bottom-end"
              >
                <li
                  className="cursor-pointer"
                  onClick={() => navigate(createQueryBySlug(data, Category))}
                >
                  <a className="dropdown-item">
                    <Imag
                      alt="icon"
                      loading="lazy"
                      width={17}
                      height={14}
                      decoding="async"
                      data-nimg={1}
                      className="lazy-img mt-2"
                      src={View}
                      style={{ color: "transparent" }}
                    />{" "}
                    View
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(List);
