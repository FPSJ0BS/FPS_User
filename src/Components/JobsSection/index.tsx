import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import JobVertical from "./Components/JobVertical";
import Pagination from "@Components/Pagination";
import useAllFavourite from "@Hooks/Queries/useAllFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import NoResults from "@Container/NoResults/NoResults";
import Sidebar from "@Components/Sidebar/Sidebar";
import FlatList from "@Components/FlatList/FlatLIst";
import checkmarkIcon from "@Assets/dashboard-svg/verfied.svg"; // Update with the path to your checkmark icon
import mainImage from "@Assets/images/banner-image.webp";
import JobSeekerVertical from "@Components/JobSeekerBenefits/JobSeekerVertical";
// import JobHorizontal from "./Components/JobHorizontal";
import JobSeekerBenefits from "@Components/JobSeekerBenefits/JobseekerBenefits";
import JobCard from "./JobCard";
import JobCardVertical from "./JobCardVertical";
import { memo, useEffect, useState } from "react";
import Sortbuy from "@Components/Dropdown/Sortbuy";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { Toast } from "@Utils/Toast";
import INFOVERIFIED from "@Assets/approved.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useFilterCity from "@Hooks/Queries/useFilterCity";
import useSalary from "@Hooks/Queries/useSalary";
import useExperiences from "@Hooks/Queries/useExperiences";
import { AppRoute } from "@Navigator/AppRoute";
import CustomSelect from "@Components/Dropdown";
import Dropdown from "react-dropdown";
import "./index.scss";
import useStatesList from "@Hooks/Queries/useStatesList";

import LoaderJobs from "./Components/LoaderJobs";
import Preloader from "@Components/Loader";
import { findJobsSearch } from "@/api/api";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";


function JobSection(props: any) {
  <SEO
    title={`Find Latest Faculty Jobs | Faculty Recruitment  | ${AppConst.LogoName} `}
    description={`Get all teaching and faculty jobs recruitment for freshers and experienced under all states in India at ${AppConst.LogoName}.`}
    metaKeywords={
      "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
    }
    name={`Jobs ${AppConst.LogoName}`}
    type={"Jobs Page"}
  />;

  const { userData } = useGlobalContext();
  const { mutateAsync: Favourite } = useFavourite({});

  const { data, searchJob, setSearchJob } = props;
  const { data: AllFavourite } = useAllFavourite(
    { enabled: !!userData?.UID },
    {
      UID: userData?.UID,
    }
  );

  const jobIdSet = AllFavourite?.jobs
    ? new Set(AllFavourite?.jobs.map((job) => job?.jobID))
    : new Set();
  const benefits = [
    { text: "5500+ Teaching & non teaching jobs", iconUrl: checkmarkIcon },
    {
      text: "Personalized Job Alerts through email & whatsapp",
      iconUrl: checkmarkIcon,
    },
    { text: "Verified Job Listings", iconUrl: checkmarkIcon },
    { text: "Fair and Transparent Recruitment", iconUrl: checkmarkIcon },
  ];

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const differenceInTime = now.getTime() - date.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  // const setJobFavourite = (
  //   e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  // ) => {
  //   e.stopPropagation();
  //   Favourite({
  //     UID: userData?.UID,
  //     jobID: job?.jobID,
  //   }).then((res) => {
  //     if (res?.status === "success") {
  //       queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
  //       Toast("success", "Job add sucessfully favourite");
  //     } else {
  //       Toast("error", res?.message);
  //     }
  //   });
  // };
  // const setRemoveFavourite = (
  //   e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  // ) => {
  //   e.stopPropagation();
  //   removeFavourite({
  //     UID: userData?.UID,
  //     jobID: job?.jobID,
  //   }).then((res) => {
  //     if (res?.status === "success") {
  //       queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
  //       Toast("success", "Job removed from favourites" || res?.message);
  //     } else {
  //       Toast("error", res?.message);
  //     }
  //   });
  // };

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

  // Sidebar ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const { subjects, category } = useParams();
  const [query, setQuery] = useState<any>({});
  const { data: cityList } = useFilterCity({});
  const { data: Salary } = useSalary({});
  const { data: Experiences } = useExperiences({});
  const { data: stateList } = useStatesList({});

  let [searchParams, setSearchParams] = useSearchParams();

  const findJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchParams((params) => {
      let queryParams = Object.keys(query);

      queryParams.forEach((param) => {
        const value = query[param] || "";
        params.delete(param);
        if (value && !subjects) {
          params.set(param, value);
        }
      });

      return params;
    });

    if (subjects) {
      let queryParam = Object.keys(query);
      queryParam.forEach((param) => {
        const value = query[param] || "";
        queryParams.set(param, value);
      });

      navigate({
        pathname: `${AppRoute.Find_Jobs}/${category}/${
          query?.title ? query?.title : subjects
        }`,
        search: queryParams.toString(),
      });
    }
  };

  useEffect(() => {
    const _query = {
      city: searchParams.get("city"),
      // state: searchParams.get("state"),
      title: searchParams.get("title"),
      jobType: searchParams.get("jobType") || "",
      min_salary: searchParams.get("min_salary") || "",
      min_experience: searchParams.get("min_experience") || "",
    };
    setQuery((oldQuery) => ({
      ...oldQuery,
      ..._query,
    }));

    if (subjects) {
      // searchApi(searchJob)

      setSearchJob({
        ...searchJob,
        ..._query,
        title: query?.title ? query?.title : subjects?.replaceAll("-", " "),
        city: query?.city,
        jobType: query?.jobType,
        min_salary: query?.min_salary,
        min_experience: query?.min_experience,
        // state: query?.state,
        pageNo: 0,
      });
    } else {
      // searchApi(searchJob)

      setSearchJob({
        ...searchJob,
        ..._query,
        pageNo: 0,
      });
    }
  }, [setSearchParams]);

  // const searchApi = async (datavalue) => {

  //   const data = createFormData(datavalue)

  //   try {

  //     const res = await findJobsSearch(data)

  //     if (res){

  //       console.log('res',res);

  //     } else{
  //       console.log('res',res);

  //     }

  //   } catch (error) {

  //   }

  // }

  // const createFormData = (data) => {
  //   const formData = new FormData();

  //   formData.append('UID', userData?.UID);
  //   formData.append('pageNo', '10');
  //   formData.append('limit', '10');
  //   formData.append('title', data?.title);
  //   formData.append('city', data?.city);
  //   formData.append('jobType', data?.jobType);
  //   formData.append('min_salary', data?.min_salary);
  //   formData.append('min_experience', data?.min_experience);
  //   formData.append('state', data?.state);

  //   return formData;
  // };

  const clearAllFilters = () => {
    const _query = {
      city: "",
      state: "",
      title: "",
      jobType: "",
      min_salary: "",
      min_experience: "",
    };

    // Clear query parameters from the URL
    setSearchParams({});

    // Reset query state
    setQuery((oldQuery) => ({
      ...oldQuery,
      ..._query,
    }));

    // Reset search job state
    setSearchJob({
      ...searchJob,
      ..._query,
      pageNo: 0,
    });
  };

  const _salary = Salary?.salaries &&
    Salary?.salaries.length && [
      { value: "", label: "Select Salary" },
      ...(Salary?.salaries || [])?.map((salary) => {
        const _salary = salary?.salary?.toString().replaceAll("Lakhs", "LPA");
        return { value: salary?.ID, label: _salary };
      }),
    ];

  // Sidebar ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <div
        // onSubmit={(e) => findJob(e)}
        className="w-[100%] bg-black h-[150px] flex px-[100px] gap-5 items-center"
      >
        <div className=" flex flex-col gap-2">
          {/* <button
            aria-label="Search for jobs"
            type="submit"
            className=" bg-green-600 rounded-3xl text-white font-semibold h-[30px] w-[100px] flex justify-center items-center"
          >
            Apply Filters
          </button> */}
          <div
            onClick={() => clearAllFilters()}
            className=" cursor-pointer bg-red-600 rounded-3xl text-white font-semibold h-[30px] w-[100px] flex justify-center items-center"
          >
            Clear Filters
          </div>
        </div>

        <div className="h-[80px] border-1 border-white border-solid cursor-pointer"></div>

        <div className="flex flex-row items-center w-[290px]">
          <div className="group-input has-icon w-full">
            <label className="title text-white underline">Job Title</label>
            <div className=" flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-type text-white"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1="9" x2="15" y1="20" y2="20" />
                <line x1="12" x2="12" y1="4" y2="20" />
              </svg>
              <input
                className=" border-t-0 border-l-0 border-r-0 w-full text-white"
                name={"title"}
                type="text"
                placeholder="Job title, key words or company"
                value={query?.title}
                onChange={(e) => {
                  setQuery({
                    ...query,
                    title: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="h-[40px] border-1 border-white border-solid"></div>

        <div className="flex flex-row items-center w-[200px]">
          <div className="group-input has-icon">
            <label className="title text-white underline">State</label>
            <div className=" flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search text-white"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <select
                title="state"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    state: value.target.value,
                  });
                }}
                value={query?.state}
                className="w-full border-t-0 border-r-0 border-l-0 border-b border-solid border-gray-300 text-white bg-transparent py-2 px-3 focus:outline-none focus:ring-0"
              >
                <option className="text-black" value="" disabled>
                  Select a State
                </option>
                {stateList?.states?.map((option, index) => (
                  <option
                    className="text-black"
                    key={index}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="h-[40px] border-1 border-white border-solid"></div>

        <div className="flex flex-row items-center w-[200px]">
          <div className="group-input has-icon">
            <label className="title text-white underline">City</label>
            <div className=" flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search text-white"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <select
                title="state"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    city: value.target.value,
                  });
                }}
                value={query?.city}
                className="w-full border-t-0 border-r-0 border-l-0 border-b border-solid border-gray-300 text-white bg-transparent py-2 px-3 focus:outline-none focus:ring-0"
              >
                <option className="text-black" value="" disabled>
                  Select a City
                </option>
                {cityList?.cities?.map((option, index) => (
                  <option
                    className="text-black"
                    key={index}
                    value={option.city}
                  >
                    {option.city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="h-[40px] border-1 border-white border-solid"></div>

        <div className="flex flex-row items-center w-[200px]">
          <div className="group-input has-icon w-full">
            <label className="title text-white underline">Salary</label>
            <div className=" flex items-center text-white findjobsalary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-indian-rupee text-white"
              >
                <path d="M6 3h12" />
                <path d="M6 8h12" />
                <path d="m6 13 8.5 8" />
                <path d="M6 13h3" />
                <path d="M9 13c6.667 0 6.667-10 0-10" />
              </svg>
              <Dropdown
                options={_salary || []}
                className="react-dropdown select2 bg-black border-t-0 border-l-0 border-r-0 text-white placeholder-white text-[15px]"
                placeholder="Select Salary"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    min_salary: value.value,
                  });
                }}
                value={query?.min_salary}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container ctn-full wrap-sidebar-full pl">
        <div className="row">
          <div className="col-lg-3">
            <div className="content-left style2 po-sticky">
              <div className="inner st-filter">
                <Sidebar
                  searchJob={searchJob}
                  setSearchJob={setSearchJob}
                  findJob={findJob}
                  setQuery={setQuery}
                  query={query}
                />
              </div>
            </div>
          </div>
          <Tabs className="col-lg-9 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <TabList className="inner menu-tab">
                    <Tab className="btn-display current active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                          fill="#A0A0A0"
                        />
                        <path
                          d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                          fill="#A0A0A0"
                        />
                        <path
                          d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                          fill="#A0A0A0"
                        />
                      </svg>
                    </Tab>

                    <Tab className="btn-display current active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                          fill="white"
                        />
                        <path
                          d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                          fill="white"
                        />
                        <path
                          d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                          fill="white"
                        />
                      </svg>
                    </Tab>
                  </TabList>
                  <p className="nofi-job">
                    <span>{data?.total_job_count}</span> jobs recommended for
                    you
                  </p>
                </div>
                <Sortbuy
                  data={data?.jobs}
                  setFilter={setSearchJob}
                  filter={searchJob}
                />
              </div>
            </div>
            <div className="content-tab style-scroll">
              <TabPanel className="inner">
                <div className="row wow fadeInUp">
                  {false ? (
                    <div>
                      <Preloader />
                    </div>
                  ) : (
                    <div className=" grid grid-cols-3  gap-4 w-full ml-5 cursor-pointer">
                      {data?.jobs?.map(
                        (
                          {
                            company_name,
                            created_at,
                            favourite,
                            job_title,
                            min_experience,
                            job_level,
                            job_type,
                            selection_process,
                            job_description,
                            salary_unit,
                            state,
                            city,
                          },
                          index
                        ) => {
                          const bgColor = colors[index % colors.length];
                          return (
                            <div
                              key={index}
                              className="  h-[360px] w-full bg-white rounded-[20px] p-[10px] flex flex-col items-start justify-start shadow-md border-1 border-solid border-[#e1e1df]"
                            >
                              <div
                                className={`  h-[75%] w-full rounded-2xl ${bgColor} p-[10px]`}
                              >
                                <div className=" flex flex-col gap-3">
                                  <div className=" flex justify-between items-center ">
                                    <div>
                                      <p className=" text-[12px] font-semibold mb-0 text-black bg-white px-3 py-1 rounded-[30px]">
                                        {getRelativeTime(created_at)}
                                      </p>
                                    </div>
                                    <div className=" bg-white p-[6px] rounded-full">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill={
                                          favourite === "1" ? "black" : "none"
                                        }
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`  lucide lucide-bookmark  ${
                                          favourite === "1"
                                            ? "text-black"
                                            : "text-black"
                                        }  cursor-pointer`}
                                      >
                                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                      </svg>
                                    </div>
                                  </div>

                                  <div className=" flex flex-col w-full">
                                    <h2 className="text-black font-bold mb-0 text-[15px] uppercase leading-[1.4em] line-clamp-1">
                                      {job_title}
                                    </h2>
                                    <h2 className="text-semibold font-bold mb-0 text-[12px] uppercase leading-[1.4em] line-clamp-2">
                                      {company_name}
                                    </h2>
                                  </div>

                                  <div className=" flex  flex-wrap gap-2">
                                    {min_experience && (
                                      <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                                        {min_experience} Years Min
                                      </div>
                                    )}

                                    {job_level && (
                                      <div className=" capitalize text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                                        {job_level}
                                      </div>
                                    )}

                                    {job_type && (
                                      <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                                        {job_type}
                                      </div>
                                    )}

                                    {selection_process && (
                                      <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                                        {selection_process}
                                      </div>
                                    )}
                                  </div>

                                  <div>
                                    <p className=" mb-0 line-clamp-2 font-medium text-[12px]">
                                      {removeSpecificTextAndTags(
                                        job_description
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className=" flex flex-col gap-2 w-full mt-1">
                                <div className=" w-full flex justify-between items-center pt-2">
                                  <div>
                                    <p className=" text-[12px] font-semibold mb-0 text-black">{`${salary_unit} Max.`}</p>
                                    <p className=" text-[12px] font-semibold mb-0 text-gray-500">
                                      {state}, {city}
                                    </p>
                                  </div>

                                  <div className=" bg-black flex justify-center items-center text-[12px] text-white rounded-[30px] px-3 h-[25px] ">
                                    Details
                                  </div>
                                </div>

                                <div className=" border-[1px] border-solid border-gray-300 w-full"></div>

                                <div className=" flex  justify-between items-center ">
                                  <div className="flex gap-1 justify-start items-center ">
                                    <img
                                      className=" w-[22px]"
                                      src={INFOVERIFIED}
                                      alt="verified"
                                    />
                                    <p className="text-[13px] font-semibold mb-0">
                                      Verified Institute
                                    </p>
                                  </div>
                                  <div className=" flex justify-center items-center gap-1">
                                    <p className="text-[13px] font-semibold mb-0">
                                      4.5
                                    </p>
                                    <div className="flex gap-[0.5px]">
                                      <img
                                        className="w-[12px]"
                                        src={STAR}
                                        alt="star"
                                      />
                                      <img
                                        className="w-[12px]"
                                        src={STAR}
                                        alt="star"
                                      />
                                      <img
                                        className="w-[12px]"
                                        src={STAR}
                                        alt="star"
                                      />
                                      <img
                                        className="w-[12px]"
                                        src={STAR}
                                        alt="star"
                                      />
                                      <img
                                        className="w-[12px]"
                                        src={HALFSTAR}
                                        alt="star"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}

                  <FlatList
                    data={data?.jobs}
                    renderItem={(item, index) => {
                      return (
                        <>
                          {/* <JobHorizontal jobIdSet={jobIdSet} job={item} /> */}

                          <JobCard
                            jobIdSet={jobIdSet}
                            job={item}
                            packType={data?.pack_type}
                          />
                          {index === 2 && !userData?.UID && (
                            <div style={{ paddingInline: "-20px" }}>
                              <JobSeekerBenefits
                                title="What Job Seekers will get?"
                                benefits={benefits}
                                buttonLabel="Registration for Free"
                                imageUrl={mainImage}
                              />
                            </div>
                          )}
                        </>
                      );
                    }}
                    ListEmptyComponent={() => {
                      return (
                        <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                          <NoResults />
                        </div>
                      );
                    }}
                  />
                </div>
              </TabPanel>
              <TabPanel className="inner">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                  <FlatList
                    data={data?.jobs}
                    renderItem={(idx: any, index) => {
                      return (
                        <>
                          <JobCardVertical
                            jobIdSet={jobIdSet}
                            job={idx}
                            packType={data?.pack_type}
                          />
                          {index === 2 && !userData?.UID && (
                            <div
                              style={{ paddingInline: "-20px" }}
                              className="vertical"
                            >
                              <JobSeekerVertical
                                title="What Job Seekers will get?"
                                benefits={benefits}
                                buttonLabel="Registration for Free"
                                imageUrl={mainImage}
                                // className={"cl2"}
                              />
                            </div>
                          )}
                        </>
                      );
                    }}
                    ListEmptyComponent={() => {
                      return (
                        <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                          <NoResults />
                        </div>
                      );
                    }}
                  />
                </div>
              </TabPanel>{" "}
            </div>
          </Tabs>
        </div>
        {data?.jobs?.length > 0 && (
          <div className="mb-4">
            <Pagination
              total={data?.totalPage}
              current={searchJob?.pageNo}
              onChange={(page) => {
                setSearchJob({
                  ...searchJob,
                  pageNo: page,
                });
              }}
              pageSize={searchJob?.limit}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default memo(JobSection);
