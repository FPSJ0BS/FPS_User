import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { createQueryBySlug } from "@Utils/navigationquery";
import { formatDistance } from "date-fns";
import { useState, useRef, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = ({ item }: any) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const navigate = useNavigate();
  const btnRef = useRef<any>();
  const { data: Category } = useCategoryList({});
  const dispatch = useDispatch();
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const date =
    item?.appliedDate &&
    formatDistance(new Date(item?.appliedDate), new Date(), {
      addSuffix: true,
    });
  const openingModal = async (applyID) => {
    await dispatch(
      updateAppliedJobValues({
        applyID,
      })
    );

    await dispatch(openModal());
  };

  return (
    <div className="job-item-list d-flex align-items-center mb-[-10px] ">
      <div className="job-title">
        <h6 className="mb-5 ">
          <a className="text-[17px] font-semibold">{item?.job_title}</a>
        </h6>
        <div className="meta">
          <span>{item?.job_type}</span> .{" "}
          <span>{`${item?.city},${item?.state}`}</span>
          <div className="d-flex flex-row align-items-center gap-1">
            <span className="icon-calendar"></span>
            <span> {date.toString().replace("about", "")}</span>
          </div>
        </div>

        <button
          onClick={() => openingModal(item?.applyID)}
          className=" py-1 px-3 bg-[#9a3c58] rounded-xl font-semibold text-white mt-2"
        >
          Track Application
        </button>
      </div>
      <div className="job-action">
        <button
          ref={btnRef}
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
            className="dropdown-menu show"
            style={{
              position: "absolute",
              inset: "0px 0px auto auto",
              margin: 0,
              transform: "translate(0px, 22px)",
            }}
            data-popper-placement="bottom-end"
          >
            <li
              onClick={() => navigate(createQueryBySlug(item, Category))}
              className="cursor-pointer"
            >
              <a className="dropdown-item">View Job</a>
            </li>

            <li
              onClick={() => openingModal(item?.applyID)}
              className="cursor-pointer"
            >
              <a className="dropdown-item">Track Application</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default memo(List);
