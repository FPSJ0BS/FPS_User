import List from "@Container/JobListing/components/List";
import useFilterCity from "@Hooks/Queries/useFilterCity";
import { memo, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useExperiences from "@Hooks/Queries/useExperiences";
import useSalary from "@Hooks/Queries/useSalary";
import CustomSelect from "@Components/Dropdown";
import CustomSelectTwo from "@Components/Dropdown/indexTwo";

import { AppRoute } from "@Navigator/AppRoute";
import useStatesList from "@Hooks/Queries/useStatesList";
import useGetCityList from "@Hooks/Queries/useGetCityList";
import useExperiencesNode from "@Hooks/Queries/useExperiencesNode";
import useSalaryNode from "@Hooks/Queries/useSalaryNode";
import useStatesListNode from "@Hooks/Queries/useStatesListNode";
import { JobTitle } from "./input/JobTitle";
import { StateInput } from "./input/StateInput";
import { CityInput } from "./input/CityInput";
import useGetCityListNode from "@Hooks/Queries/useGetCityListNode";
import { ExperienceInput } from "./input/ExperienceInput";
import { SalaryInput } from "./input/SalaryInput";

const jobType = [
  { value: "", label: "Select job type" },
  { value: "Work From Office", label: "Work From Office" },
  { value: "Hourly Basis", label: "Hourly Basis" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Work From Home", label: "Work From Home" },
];

const Sidebar = (props: any) => {
  const { data, searchJob, setSearchJob, refetch } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { subjects, category } = useParams();
  const [query, setQuery] = useState<any>({});
  // const { data: cityList } = useFilterCity({});
  // const { data: Salary } = useSalary({});
  const { data: Salary } = useSalaryNode({});
  // const { data: Experiences } = useExperiences({});
  const { data: Experiences } = useExperiencesNode({});
  // const { data: State } = useStatesList({});
  const { data: State } = useStatesListNode({});

  const [queryTwo, setQueryTwo] = useState({
    stateID: "",
  });

  // const { data: cityStateList } = useGetCityList(
  //   { enabled: !!queryTwo.stateID },
  //   queryTwo
  // );

  const { data: cityStateList } = useGetCityListNode(
    { enabled: !!queryTwo.stateID },
    queryTwo
  );

  let [searchParams, setSearchParams] = useSearchParams();
  //   console.log("queryquery", query, searchParams);

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
      job_title: searchParams.get("job_title"),
      job_type: searchParams.get("job_type") || "",
      salary_minimum: searchParams.get("salary_minimum") || "",
      min_experience: searchParams.get("min_experience") || "",
      state: searchParams.get("state") || "",
    };

    setQuery((oldQuery) => ({
      ...oldQuery,
      ..._query,
    }));

    if (subjects) {
      setSearchJob({
        ...searchJob,
        ..._query,
        job_title: query?.job_title
          ? query?.job_title
          : subjects?.replaceAll("-", " "),
        city: query?.city,
        job_type: query?.job_type,
        salary_minimum: query?.salary_minimum,
        min_experience: query?.min_experience,
        pageNo: 0,
      });
    } else {
      setSearchJob({
        ...searchJob,
        ..._query,
        pageNo: 0,
      });
    }
  }, [setSearchParams]);

  const _experiences = [
    { value: "", label: "Select Experiences" },
    ...(Experiences?.data || [])?.map((salary) => {
      return {
        value: salary?.exp_num,
        name: salary?.experience,
      };
    }),
  ];

  const _salary = Salary?.data &&
    Salary?.data?.length && [
      { value: "", label: "Select Salary" },
      ...(Salary?.data || [])?.map((salary) => {
        const _salary = salary?.salary?.toString().replaceAll("Lakhs", "LPA");
        return { value: salary?.ID, name: _salary };
      }),
    ];

  useEffect(() => {
    const filterState = State?.data?.find((state) => {
      return state.name === query.state;
    });

    const id = filterState?.id;

    setQueryTwo({
      ...queryTwo,
      stateID: id,
    });
  }, [query.state]);

  const _cities = cityStateList?.data &&
    cityStateList?.data?.length && [
      ...(cityStateList?.data || []).map((city) => {
        return { id: city?.id, city: city?.name };
      }),
    ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <form onSubmit={(e) => findJob(e)} className="  h-[100vh] w-full flex  ">
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className={` absolute sm:relative  ${!showSidebar ? "block" : "hidden"} sm:block w-[80%] md:w-[40%] bg-black  lg:w-[20%] h-[100%] p-[10px] overflow-y-auto postjobHandleScrollbar ${!showSidebar ? "pb-[30px]" : "pt-[30px]"} `}>
        <div className=" w-full justify-end flex">
          { !showSidebar && (<svg
          onClick={() => setShowSidebar(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x cursor-pointer text-white sm:hidden block "
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>)

         }
        </div>

        <div className=" gap-4 flex flex-col w-full h-full  items-center px-[5px] 2xl:px-5">
          <div className=" col-span-2 w-full flex justify-center items-center ">
            <button
              className=" h-[30px] w-full  text-white bg-green-500 rounded-lg"
              type="submit"
              aria-label="Search for jobs"
            >
              Filter Jobs
            </button>
          </div>

          <JobTitle query={query} setQuery={setQuery} />
          <StateInput query={query} setQuery={setQuery} State={State} />
          {/* <CityInput
            query={query}
            setQuery={setQuery}
            cityStateList={cityStateList}
          /> */}

          <div className="w-full  flex flex-col justify-end items-start ">
            <div className=" flex items-center gap-3 mb-1">
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
                className="lucide lucide-land-plot text-white"
              >
                <path d="m12 8 6-3-6-3v10" />
                <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                <path d="m6.49 12.85 11.02 6.3" />
                <path d="M17.51 12.85 6.5 19.15" />
              </svg>
              <label className="title text-white text-[12px] 2xl:text-[14px]">
                City
              </label>
            </div>

            <CustomSelect
              options={_cities || []}
              setSearchJob={(city) => {
                setQuery((query) => ({
                  ...query,
                  city,
                }));
              }}
              searchJob={query}
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                color: "#fff",
                fontSize: "13px",
                height: "30px",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                padding: "0.5rem",
                marginTop: "0.25rem",
                outline: "none",
                borderStyle: "solid",
              }}
            />
          </div>

          <ExperienceInput
            query={query}
            setQuery={setQuery}
            experiences={_experiences}
          />
          <SalaryInput query={query} setQuery={setQuery} salary={_salary} />

          <div className="w-full  bg-black flex flex-col justify-end  ">
            <div className=" flex gap-2 mb-2">
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
                className="lucide lucide-backpack text-white"
              >
                <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
                <path d="M8 10h8" />
                <path d="M8 18h8" />
              </svg>
              <label className=" text-white text-[12px] 2xl:text-[14px]">
                Job Types
              </label>
            </div>
            <Dropdown
              placeholder="Select Job Type"
              options={jobType || []}
              className="h-[30px] flex items-center react-dropdown select2 bg-black border-[1px] focus:border-[2px] border-gray-300  text-white text-[12px] 2xl:text-[14px] rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              onChange={(value) => {
                setQuery({
                  ...query,
                  job_type: value.value,
                });
              }}
              value={query?.job_type}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="  w-[100%] sm:w-[80%] h-[100%] flex justify-center items-center flex-col overflow-y-auto px-[30px] pt-[20px] pb-[20px]">
        <List
          data={data}
          setQuery={setQuery}
          query={query}
          refetch={refetch}
          setSearchJob={setSearchJob}
          searchJob={searchJob}
          setShowSidebar = {setShowSidebar}
        />
      </div>
    </form>
  );
};

export default Sidebar;
