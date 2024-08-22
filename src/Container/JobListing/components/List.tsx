import INFOVERIFIED from "@Assets/approved.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { Toast } from "@Utils/Toast";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import Pagination from "@Components/Pagination";
import { createQueryBySlug } from "@Utils/navigationquery";
import { useNavigate } from "react-router-dom";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import { useDispatch } from "react-redux";
import ListDesignOne from "./ListDesignOne";
import ListDesignTwo from "./ListDesignTwo";

const List = ({ data, setQuery, query, refetch, setSearchJob, searchJob }) => {
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

  const removeSpecificTextAndTags = (htmlContent) => {
    let cleanedContent = htmlContent.replace(
      /<h3>Job Description:\s*(.*)<\/h3>/i,
      "<h3>$1</h3>"
    );
    cleanedContent = cleanedContent.replace(
      /<p><strong>Job Responsibilities:<\/strong><\/p>\s*<ul>.*<\/ul>/is,
      ""
    );
    const noHtmlTags = cleanedContent.replace(/<\/?[^>]+(>|$)/g, "");
    return noHtmlTags.trim();
  };

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
      facultyID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status) {
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
      facultyID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status) {
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

  const openingModal = async (applyID) => {
    await dispatch(
      updateAppliedJobValues({
        applyID,
      })
    );
    await dispatch(openModal());
  };

  return (
    <div className=" flex flex-col  h-full ">
      
        {/* <ListDesignOne
          jobLists={jobLists}
          handleOpenInNewTab={handleOpenInNewTab}
          getRelativeTime={getRelativeTime}
          userData={userData}
          setRemoveFavourite={setRemoveFavourite}
          setJobFavourite={setJobFavourite}
          data={data}
          Category={Category}
          removeSpecificTextAndTags={removeSpecificTextAndTags}
          openingModal={openingModal}
        /> */}
        
        <ListDesignTwo
          jobLists={jobLists}
          handleOpenInNewTab={handleOpenInNewTab}
          getRelativeTime={getRelativeTime}
          userData={userData}
          setRemoveFavourite={setRemoveFavourite}
          setJobFavourite={setJobFavourite}
          data={data}
          Category={Category}
          removeSpecificTextAndTags={removeSpecificTextAndTags}
          openingModal={openingModal}
        />

      
      <div className="my-[50px] ">
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
