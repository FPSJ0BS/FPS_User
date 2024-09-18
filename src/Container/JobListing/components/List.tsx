import { Toast } from "@Utils/Toast";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import Pagination from "@Components/Pagination";
import { createQueryBySlug } from "@Utils/navigationquery";
import { useNavigate } from "react-router-dom";
import useCategoryList from "@Hooks/Queries/useCategoryList";

import ListDesignTwo from "./ListDesignTwo";
import ListIconTwo from "@Assets/two-columns-layout.png";
import ListIconThree from "@Assets/columns three.png";
import ListIconOne from "@Assets/single-column.png";
import ListDesignThree from "./ListDesignThree";
import { useEffect, useState } from "react";
import ListDesignOne from "./ListDesignOne";
import useMediaQuery from "@Hooks/useMediaQuery";
import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import { useDispatch } from "react-redux";
import bannerImg from '@Assets/filter/filterbanner.png'

const List = ({
  data,
  setQuery,
  query,
  refetch,
  setSearchJob,
  searchJob,
  setShowSidebar,
}) => {
  const jobLists = data?.data?.jobsList;
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: Category } = useCategoryList({});
  const dispatch = useDispatch();

  const colors = [
    "bg-[#fae1cd]",
    "bg-[#daf5ed]",
    "bg-[#e0daf7]",
    "bg-[#e2f2fd]",
    "bg-[#f7e2f3]",
    "bg-[#eceef3]",
  ];

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInTime = now.getTime() - date.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else if (differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInMonths === 1) {
      return "1 month ago";
    } else if (differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    } else if (differenceInYears === 1) {
      return "1 year ago";
    } else {
      return `${differenceInYears} years ago`;
    }
  };

  const setJobFavourite = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    try {
      const res = await Favourite({
        facultyID: userData?.UID,
        jobID: id,
      });

      if (res?.status) {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job added successfully to favourites");
        refetch();
      } else {
        Toast("error", res?.message);
      }
    } catch (error) {
      Toast("error", "Failed to add job to favourites");
    }
  };

  const setRemoveFavourite = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    try {
      const res = await removeFavourite({
        facultyID: userData?.UID,
        jobID: id,
      });

      if (res?.status) {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job removed from favourites");
        refetch();
      } else {
        Toast("error", res?.message);
      }
    } catch (error) {
      Toast("error", "Failed to remove job from favourites");
    }
  };

  const handleOpenInNewTab = (item, category) => {
    const url = createQueryBySlug(item, category);
    window.open(url, "_blank");
  };

  const [listSet, setListSet] = useState({
    listOne: true,
    listTwo: false,
    listThree: false,
  });

  const handleListSetChange = (listName) => {
    setListSet({
      listOne: listName === "listOne",
      listTwo: listName === "listTwo",
      listThree: listName === "listThree",
    });
  };

  const openingModal = async (applyID) => {
    await dispatch(updateAppliedJobValues({ applyID }));
    await dispatch(openModal());
  };

  return (
    <div className="flex flex-col h-full mt-2 w-full items-center">
      <div className=" hidden  relative mb-5  min-h-[74px] w-[95%] rounded-lg  bg-cover bg-gradient-to-r from-[#060606] to-[#1f1f21]  bg-no-repeat lg:flex justify-between items-center px-[50px]">
     
        <div className="relative flex items-center w-[60%]"> 
          <input
            onChange={(e) => {
              setQuery({
                ...query,
                job_title: e.target.value,
              });
            }}
            value={query?.job_title}
            type="text"
            className="w-full xl:h-[40px] 2xl:h-[45px] px-4 py-2 pr-12 border border-gray-300 bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[30px]"
            placeholder="Search Jobs"
          />
          <button className=" font-semibold text-[16px]  border-0 shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#c94f56] text-white px-3 w-[30%] h-[100%] rounded-[30px] hover:bg-blue-600">
            Search Jobs
          </button>
        </div>

        <div className="  xl:flex justify-end gap-2 items-center hidden w-[40%]">
          <svg
            onClick={() => handleListSetChange("listOne")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify text-white cursor-pointer"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>

          {/* <svg
            onClick={() => handleListSetChange("listTwo")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-columns-2 text-white cursor-pointer"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 3v18" />
          </svg> */}

          <svg
            onClick={() => handleListSetChange("listThree")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-columns-3 text-white cursor-pointer"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
          </svg>
        </div>
      </div>

      {listSet.listThree && (
        <ListDesignThree
          jobsData={jobLists}
          data={data}
          setJobFavourite={setJobFavourite}
          setRemoveFavourite={setRemoveFavourite}
          getRelativeTime={getRelativeTime}
          handleOpenInNewTab={handleOpenInNewTab}
          Category={Category}
          colors={colors}
          setShowSidebar={setShowSidebar}
        />
      )}

      {listSet.listTwo && (
        <ListDesignTwo
          jobsData={jobLists}
          data={data}
          setJobFavourite={setJobFavourite}
          setRemoveFavourite={setRemoveFavourite}
          getRelativeTime={getRelativeTime}
          handleOpenInNewTab={handleOpenInNewTab}
          Category={Category}
          colors={colors}
        />
      )}

      {listSet.listOne && (
        <ListDesignOne
          jobsData={jobLists}
          data={data}
          setJobFavourite={setJobFavourite}
          setRemoveFavourite={setRemoveFavourite}
          getRelativeTime={getRelativeTime}
          handleOpenInNewTab={handleOpenInNewTab}
          Category={Category}
          colors={colors}
        />
      )}

      <div className="pb-[150px] pt-[50px]">
        <div className="my-[50px]">
          <Pagination
            total={data?.data?.totalPages}
            current={searchJob?.page}
            onChange={(page) => setSearchJob((prev) => ({ ...prev, page }))}
            pageSize={searchJob?.limit}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
