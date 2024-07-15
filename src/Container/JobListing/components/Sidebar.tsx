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
  const { data: cityList } = useFilterCity({});
  const { data: Salary } = useSalary({});
  const { data: Experiences } = useExperiences({});
  const { data: State } = useStatesList({});

  const [queryTwo, setQueryTwo] = useState({
    stateID: "",
  });

  const { data: cityStateList } = useGetCityList(
    { enabled: !!queryTwo.stateID },
    queryTwo
  );

  console.log("queryqueryquery", query);

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
      title: searchParams.get("title"),
      jobType: searchParams.get("jobType") || "",
      min_salary: searchParams.get("min_salary") || "",
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
        title: query?.title ? query?.title : subjects?.replaceAll("-", " "),
        city: query?.city,
        jobType: query?.jobType,
        min_salary: query?.min_salary,
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
    ...(Experiences?.experiences || [])?.map((salary) => {
      return {
        value: salary?.ID,
        label: salary?.experience,
      };
    }),
  ];

  const _salary = Salary?.salaries &&
    Salary?.salaries.length && [
      { value: "", label: "Select Salary" },
      ...(Salary?.salaries || [])?.map((salary) => {
        const _salary = salary?.salary?.toString().replaceAll("Lakhs", "LPA");
        return { value: salary?.ID, label: _salary };
      }),
    ];

  const _state = State?.states &&
    State?.states.length && [
      { value: "", label: "Select State" },
      ...(State?.states || []).map((state) => {
        return { value: state?.ID, label: state?.name };
      }),
    ];

  useEffect(() => {
    const filterState = State?.states?.find((state) => {
      return state.name === query.state;
    });

    const id = filterState?.id;

    setQueryTwo({
      ...queryTwo,
      stateID: id,
    });

    console.log("query.statequery.state", filterState);
  }, [query.state]);

  const _cities = cityStateList?.cities &&
    cityStateList?.cities.length && [
      ...(cityStateList?.cities || []).map((city) => {
        return { id: city?.id, city: city?.name };
      }),
    ];

  return (
    <form
      onSubmit={(e) => findJob(e)}
      className=" h-full w-full flex flex-col "
    >
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className=" bg-black w-full h-[110px] p-[10px] ">
        <div className=" w-full h-full flex gap-2  justify-between items-center pr-5">
          <div className=" w-1/2 flex justify-center items-center">
            <button
              className=" w-[50%] h-[50px] text-white bg-green-500 rounded-lg"
              type="submit"
              aria-label="Search for jobs"
            >
              Filter Jobs
            </button>
          </div>

          <div className=" h-[70%] border-1 border-solid border-gray-500"></div>

          <div className="w-1/2 px-3 flex flex-col justify-end h-full">
            <label className=" text-white">State</label>

            <div className="flex items-center  ">
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
                className="lucide lucide-castle text-white"
              >
                <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
                <path d="M18 11V4H6v7" />
                <path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" />
                <path d="M22 11V9" />
                <path d="M2 11V9" />
                <path d="M6 4V2" />
                <path d="M18 4V2" />
                <path d="M10 4V2" />
                <path d="M14 4V2" />
              </svg>

              <Dropdown
                placeholder="Select State"
                options={_state || []}
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white pl-0 text-[13px] h-[40px]"
                onChange={(value) => {
                  setQuery({
                    ...query,
                    state: value.value,
                  });
                }}
                value={query?.state}
              />
            </div>
          </div>

          <div className=" h-[70%] border-1 border-solid border-gray-500"></div>

          <div className="w-1/2 px-3 flex flex-col justify-end h-full">
            <label className="title text-white">City</label>
            <div className="flex items-center ">
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
                  border: "1px solid #e5e5e5",
                  color: "#fff",
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  paddingLeft: "15px",
                  fontSize: "13px",
                  height: "40px",
                }}
              />
            </div>
          </div>

          <div className=" h-[70%] border-1 border-solid border-gray-500"></div>

          <div className=" w-1/2  px-3 flex flex-col justify-end h-full">
            <label className=" text-white">Experience</label>
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
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[13px]"
                placeholder="Select Experiences"
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

          <div className=" h-[70%] border-1 border-solid border-gray-500"></div>

          <div className=" w-1/2  px-3 flex flex-col justify-end h-full">
            <label className=" text-white">Salary</label>
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
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[13px]"
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

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className=" h-full flex ">
        <div className=" min-h-[200px] w-[17%] bg-black px-4 pt-[30px]">
          <div className=" flex flex-col gap-5">
            <div className=" w-full bg-black h-ful ">
              <label className=" text-white">Job Title</label>
              <div className=" flex items-center w-full">
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
                  className="lucide lucide-captions text-white"
                >
                  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                </svg>
                <input
                  className="border-t-0 border-r-0 border-l-0 placeholder-white text-white pl-3"
                  name={"title"}
                  type="text"
                  placeholder="Job title, key words or company "
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

            <div className=" w-full bg-black ">
              <label className=" text-white">Job Types</label>
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
                  className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[13px]"
                  onChange={(value) => {
                    setQuery({
                      ...query,
                      jobType: value.value,
                    });
                  }}
                  value={query?.jobType}
                />
              </div>
            </div>

            {/* <div className="group-form">
              <label className="title">Job Types</label>
              <div className="group-input">
                <Dropdown
                  placeholder="Select Job Type"
                  options={jobType || []}
                  className="react-dropdown select2"
                  onChange={(value) => {
                    setQuery({
                      ...query,
                      jobType: value.value,
                    });
                  }}
                  value={query?.jobType}
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="  w-[93%] h-[100%] flex flex-col overflow-y-auto px-[30px] pt-[20px] pb-[20px]">
          <List
            data={data}
            setQuery={setQuery}
            query={query}
            refetch={refetch}
            setSearchJob={setSearchJob}
            searchJob={searchJob}
          />
        </div>
      </div>
    </form>
  );
};

export default Sidebar;
