import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useEffect, useState } from "react";
import SidebarNew from "./components/SidebarNew";
import SearchTopBar from "./components/SearchTopBar";
import ListDesignThree from "./components/ListDesignThree";
import useSearchJobsQueryNode from "@Hooks/Queries/useSearchJobsQueryNode";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { Toast } from "@Utils/Toast";
import { useQueryClient } from "@tanstack/react-query";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { createQueryBySlug } from "@Utils/navigationquery";
import ListDesignOne from "./components/ListDesignOne";
import { getFiltetJobs } from "@/api/api";
import Seo from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";

// const colors = [
//   "bg-[#f9f9f9]",
//   "bg-[#f9f9f9]",
//   "bg-[#f9f9f9]",
//   "bg-[#f9f9f9]",
//   "bg-[#f9f9f9]",
//   "bg-[#f9f9f9]",
// ];
const colors = ["bg-[#fdf3ea]", "bg-[#f1fbf8]", "bg-[#f5f3fe]", "bg-[#f1f8fe]"];
const colorsStar = [
  "bg-[#f5e1ce]",
  "bg-[#def4ed]",
  "bg-[#ded9f4]",
  "bg-[#d2e9fd]",
];
const colorsLineBreak = [
  "border-[#efe6dd]",
  "border-[#e4eeeb]",
  "border-[#e8e5f0]",
  "border-[#e4ecf1]",
];
// const colors = [
//   "bg-[#fae1cd]",
//   "bg-[#daf5ed]",
//   "bg-[#e0daf7]",
//   "bg-[#e2f2fd]",
//   "bg-[#f7e2f3]",
//   "bg-[#eceef3]",
// ];

const FilterJob = () => {
  
  const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
  const [showSidebar, setShowSidebar] = useState(true);
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const [citySelect, setCitySelect] = useState("");

  //   Infintie Scrolling start ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/ 2

  const [searchJob, setSearchJob] = useState({
    facultyID: userData?.UID ? userData?.UID : 103082,
    totalPage: 0,
    limit: 12,
    page: 1,
  });

  const [jobList, setJobList] = useState<any[]>([]);

  const {
    data: jobs,
    refetch,
    isFetching,
  } = useSearchJobsQueryNode({ enabled: !!searchJob?.facultyID }, searchJob);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight / 2 && !isFetching) {
      setSearchJob((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  useEffect(() => {
    if (searchJob.page > 1) {
      refetch();
    }
  }, [searchJob, refetch]);

  useEffect(() => {
    if (jobs?.data?.jobsList && jobs?.data?.jobsList?.length > 0) {
      setJobList((prevJobs) => [...prevJobs, ...jobs?.data?.jobsList]);
    }
  }, [jobs]);

  //   Infintie Scrolling end ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { data: Category } = useCategoryList({});

  const setJobFavourite = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    try {
      const res = await Favourite({
        facultyID: userData?.UID,
        jobID: id,
      });

      if (res?.status) {
        // Keep all previous jobs, and update only the job that matches the id
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job added successfully to favourites");

        refetch();
        setJobList((prevJobs) =>
          prevJobs.map((job) =>
            job.jobID === id ? { ...job, favourite: "1" } : job
          )
        );
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
        setJobList((prevJobs) =>
          prevJobs.map((job) =>
            job.jobID === id ? { ...job, favourite: "0" } : job
          )
        );
      } else {
        Toast("error", res?.message);
        refetch();
      }
    } catch (error) {
      Toast("error", "Failed to remove job from favourites");
    }
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

  const handleOpenInNewTab = (item, category) => {
    const url = createQueryBySlug(item, category);
    window.open(url, "_blank");
  };

  const data = jobs?.data?.pack_type;

  const [query, setQuery] = useState<any>({});

  const [listSet, setListSet] = useState({
    listOne: true,
    listTwo: false,
    listThree: false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setListSet({
          listOne: false,
          listTwo: false,
          listThree: true,
        });
      } else {
        setListSet({
          listOne: true,
          listTwo: false,
          listThree: false,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <Seo
        title={`Find Medical, school teaching & IT Jobs easily | ${AppConst.LogoName} `}
        description={`Looking good job opportunity in educational field like Medical teaching, IIT, JEE NEET coaching job & IT Jobs like Web-app developer, UI/UX Designer. Explore  Tallento Now.`}
        name={`${AppConst.LogoName}`}
        canonicalUrl = {"https://tallento.ai/jobs"}

      />
      <div 
      onClick={() => {
        if (window.innerWidth <= 768 && showSidebar) {
          setShowSidebar(false);
        }
      }}
      className=" min-h-screen w-full flex bg-[#f5f5f5] lg:px-[50px] 2xl:px-[150px]">
        <div
          className={`bg-white  h-[100vh] w-[70%] sm:w-[30%] z-50 lg:w-[25%] ${
            showSidebar ? "absolute" : "hidden"
          } absolute lg:sticky top-20 p-4 overflow-y-auto postjobHandleScrollbar m-3 rounded-xl`}
        >
          <div  className=" w-full lg:hidden flex justify-end items-center">
            <svg
              onClick={() => setShowSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x cursor-pointer "
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <SidebarNew
            searchJob={searchJob}
            setSearchJob={setSearchJob}
            query={query}
            setQuery={setQuery}
            setJobList={setJobList}
            citySelect={citySelect}
            scrollToTop = {scrollToTop}
          />
        </div>
        <div 
             
              className=" h-full w-full lg:w-[75%] p-[20px] min-h-[100vh] mr-5 rounded-xl flex flex-col gap-3 ">
          <SearchTopBar
            query={query}
            setQuery={setQuery}
            setListSet={setListSet}
          />

          {listSet.listOne && (
            <ListDesignOne
              jobsData={jobList}
              data={data}
              setJobFavourite={setJobFavourite}
              setRemoveFavourite={setRemoveFavourite}
              getRelativeTime={getRelativeTime}
              handleOpenInNewTab={handleOpenInNewTab}
              Category={Category}
              colors={colors}
              colorsStar={colorsStar}
              colorsLineBreak={colorsLineBreak}
              setCitySelect={setCitySelect}
              query={query}
              setQuery={setQuery}
              
            />
          )}

          {listSet?.listThree && (
            <ListDesignThree
              jobsData={jobList}
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
        </div>
      </div>
    </>
  );
};

export default FilterJob;
