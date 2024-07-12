import { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCancelJob from "@Hooks/Mutation/useCancelJob";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { Toast } from "@Utils/Toast";
import { useQueryClient } from "@tanstack/react-query";
import { Querykeys } from "@Hooks/Queries/queryname";
import { formatDistance } from "date-fns";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import {  useDispatch } from "react-redux";


const List = ({ data }: any) => {

  const dispatch = useDispatch()

  const { userData } = useGlobalContext();
  const [isDropDown, setIsDropDown] = useState(false);
  const navigate = useNavigate();
  const btnRef = useRef<any>();
  const queryClient = useQueryClient();
  const { data: Category } = useCategoryList({});
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const { mutateAsync: cancelJob } = useCancelJob({});
  const date =
    data?.appliedDate &&
    formatDistance(new Date(data?.appliedDate), new Date(), {
      addSuffix: true,
    });
  const dateUpdate =
    data?.appliedDate !== "0000-00-00 00:00:00" &&
    formatDistance(new Date(data?.appliedDate), new Date(), {
      addSuffix: true,
    });

    const openingModal = async (applyID) => {
      console.log('we are here');

      await dispatch(updateAppliedJobValues({
        applyID
      }))
      
      await dispatch(openModal())
      console.log('we are here');



    }
 

  return (
    <div className="job-list-one style-two position-relative mb-20">
      <div className="row justify-content-between align-items-center">
        <div className="col-xxl-3 col-lg-3 ">
          <div
            className="job-title d-flex align-items-center cursor-pointer"
            onClick={() => navigate(createQueryBySlug(data, Category))}
          >
            <a className="title fw-500 tran3s w-100">{data?.job_title}</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 ms-auto">
          <a className="job-duration fw-500 ">{data?.job_type}</a>
          <div className="job-salary d-flex flex align-items-center gap-2">
            {/* <span className="icon-dolar1 fw-500 text-dark">
              {data?.min_salary} - {data?.max_salary}
            </span> */}
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
        <div className="col-xxl-2 col-lg-2 col-md-6 col-sm-6 col-6 ms-auto xs-mt-10 d-flex flex-row flex-wrap">
          <div className="job-location">
            <a className="d-block">{`${data?.city},${data?.state}`}</a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-6 sm-mt-10 d-flex flex-col justify-content-center align-items-center">
          <a className={"status"}>{data?.appliedStatus}</a>
          {data?.appliedStatus === "Applied" ? (
            <span> {date.toString().replace("about", "")}</span>
          ) : (
            dateUpdate && (
              <span> {dateUpdate.toString().replace("about", "")}</span>
            )
          )}
          <span></span>
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
                  <a className="dropdown-item">View</a>
                </li>

                {data?.appliedStatus === "Applied" && (
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      cancelJob({
                        UID: userData?.UID,
                        jobID: data?.jobID,
                      }).then((res) => {
                        if (res?.status === "success") {
                          Toast("success", res?.message);
                          queryClient.invalidateQueries({
                            queryKey: [Querykeys.jobApplied],
                          });
                        }
                      });
                    }}
                  >
                    <a className="dropdown-item">Cancel Job</a>
                  </li>
                )}
                <li
                  className="cursor-pointer"
                  onClick={() => openingModal(data?.applyID)}
                >
                  <a className="dropdown-item">Track</a>
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
