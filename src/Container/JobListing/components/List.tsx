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

const List = ({
  data,
  setQuery,
  query,
  refetch,
  setSearchJob,
  searchJob,
  setShowSidebar,
}) => {
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: Category } = useCategoryList({});

  const jobsData = data?.data?.jobsList;

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

  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job add sucessfully favourite");

        refetch();
      } else {
        Toast("error", res?.message);
      }
    });
  };

  const setRemoveFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    removeFavourite({
      UID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job removed from favourites" || res?.message);
        refetch();
      } else {
        Toast("error", res?.message);
      }
    });
  };

  const handleOpenInNewTab = (item, category) => {
    const url = createQueryBySlug(item, category);
    window.open(url, "_blank");
  };

  const [listSet, setListSet] = useState({
    listOne: false,
    listTwo: false,
    listThree: true,
  });

  const handleListSetChange = (listName) => {
    setListSet((prevListSet) => ({
      listOne: listName === "listOne",
      listTwo: listName === "listTwo",
      listThree: listName === "listThree",
    }));
  };

  return (
    <div className=" flex flex-col  h-full ">
    
      



      <div className=" mb-4 w-full xl:flex justify-end gap-2 items-center hidden ">
        <img
          onClick={() => handleListSetChange("listOne")}
          src={ListIconOne}
          className=" cursor-pointer w-[30px] h-[25px]"
          alt="menu"
        />
        <img
          onClick={() => handleListSetChange("listTwo")}
          src={ListIconTwo}
          className=" cursor-pointer w-[30px] h-[22px]"
          alt="menu"
        />
        <img
          onClick={() => handleListSetChange("listThree")}
          src={ListIconThree}
          className=" cursor-pointer w-[30px] h-[30px]"
          alt="menu"
        />
      </div>
      {listSet.listThree && (
        <ListDesignThree
          jobsData={jobsData}
          data={data}
          setJobFavourite={setJobFavourite}
          setRemoveFavourite={setRemoveFavourite}
          getRelativeTime={getRelativeTime}
          handleOpenInNewTab={handleOpenInNewTab}
          Category={Category}
          colors={colors}
          setShowSidebar = {setShowSidebar}
        />
      )}
      {listSet.listTwo && (
        <ListDesignTwo
          jobsData={jobsData}
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
          jobsData={jobsData}
          data={data}
          setJobFavourite={setJobFavourite}
          setRemoveFavourite={setRemoveFavourite}
          getRelativeTime={getRelativeTime}
          handleOpenInNewTab={handleOpenInNewTab}
          Category={Category}
          colors={colors}
        />
      )}
      <div className="pb-[150px] pt-[50px] ">
        <Pagination
          total={data?.data?.totalPages}
          current={searchJob?.page}
          onChange={(page) => {
            setSearchJob({
              ...searchJob,
              page: page,
            });
          }}
          pageSize={searchJob?.limit}
        />
      </div>
    </div>
  );
};

export default List;
