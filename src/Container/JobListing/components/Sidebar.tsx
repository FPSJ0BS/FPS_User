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
        value: salary?.ID,
        label: salary?.experience,
      };
    }),
  ];

  const _salary = Salary?.data &&
    Salary?.data?.length && [
      { value: "", label: "Select Salary" },
      ...(Salary?.data || [])?.map((salary) => {
        const _salary = salary?.salary?.toString().replaceAll("Lakhs", "LPA");
        return { value: salary?.ID, label: _salary };
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

  return (
    <form onSubmit={(e) => findJob(e)} className=" h-[100vh] w-full flex  ">
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className=" bg-black w-[20%] h-[100%] p-[10px] overflow-y-auto postjobHandleScrollbar pt-[50px]">
        <div className=" gap-4 flex flex-col w-full h-full  justify-between items-center px-[5px] 2xl:px-5">
          <JobTitle query={query} setQuery={setQuery} />
          <StateInput query={query} setQuery={setQuery} State={State} />
          {/* <CityInput
            query={query}
            setQuery={setQuery}
            cityStateList={cityStateList}
          /> */}

          <div className="w-full  flex flex-col justify-end items-start h-full">
            <div className=" flex items-center gap-3 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                border: "1px solid #D1D5DB", // Tailwind's gray-300
                color: "#fff", // Text color white
                fontSize: "13px",
                height: "50px",
                borderRadius: "0.375rem", // 6px for rounded-md
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Shadow-sm
                padding: "0.5rem", // 8px for p-2
                marginTop: "0.25rem", // 4px for mt-1
                outline: "none", // Focus outline-none
                borderStyle: "solid", // Border-solid
              }}
            />
          </div>





          <div className=" w-full md:w-[50%] md:px-3 flex flex-col justify-end h-full">
            <label className=" text-white text-[12px] 2xl:text-[14px]">
              Experience
            </label>
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase text-white"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
              <Dropdown
                options={_experiences || []}
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[12px] 2xl:text-[14px]"
                placeholder="Select Experience"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    min_experience: value.value,
                  });
                }}
                value={query?.min_experience}
              />
            </div>
          </div>

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

          <div className="w-full md:w-1/2  md:px-3 flex flex-col justify-end h-full">
            <label className=" text-white text-[12px] 2xl:text-[14px]">
              Salary
            </label>
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[12px] 2xl:text-[14px]"
                placeholder="Select Salary"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    salary_minimum: value.value,
                  });
                }}
                value={query?.salary_minimum}
              />
            </div>
          </div>

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

          <div className="w-full md:w-[60%] bg-black flex flex-col justify-end h-full ">
            <label className=" text-white text-[12px] 2xl:text-[14px]">
              Job Types
            </label>
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <Dropdown
                placeholder="Select Job Type"
                options={jobType || []}
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[13px]  2xl:text-[14px]"
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

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

          <div className=" col-span-2 w-1/2 flex justify-center items-center pb-[100px]">
            <button
              className=" w-[80%] h-[50px] text-white bg-green-500 rounded-lg"
              type="submit"
              aria-label="Search for jobs"
            >
              Filter Jobs
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="  w-[80%] h-[100%] flex justify-center items-center flex-col overflow-y-auto px-[30px] pt-[20px] pb-[20px]">
        <List
          data={data}
          setQuery={setQuery}
          query={query}
          refetch={refetch}
          setSearchJob={setSearchJob}
          searchJob={searchJob}
        />
      </div>
    </form>
  );
};

export default Sidebar;
