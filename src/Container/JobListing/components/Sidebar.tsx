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

  const { data: cityStateList } = useGetCityList(
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
          query?.job_title ? query?.job_title : subjects
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
        page: 0,
      });
    } else {
      setSearchJob({
        ...searchJob,
        ..._query,
        page: 0,
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

  const _state = State?.data &&
    State?.data?.length && [
      { value: "", label: "Select State" },
      ...(State?.data || []).map((state) => {
        return { value: state?.ID, label: state?.name };
      }),
    ];

  useEffect(() => {
    const filterState = State?.data?.find((state) => {
      return state.name === query.state;
    });

    console.log("filterState", filterState);

    const id = filterState?.id;

    setQueryTwo({
      ...queryTwo,
      stateID: id,
    });
  }, [query.state]);

  const _cities = cityStateList?.cities &&
    cityStateList?.cities.length && [
      ...(cityStateList?.cities || []).map((city) => {
        return { id: city?.id, city: city?.name };
      }),
    ];

  const [selectedValue, setSelectedValue] = useState("column view"); 


  const options = [
    { value: "list view", label: "List" },
    { value: "column view", label: "Column" },

  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    // Function to execute when the screen width hits 768px
    const handleScreenWidthChange = (e) => {
      if (e.matches) {
        setSelectedValue('column view'); // Change selectedValue to 'column view'
        console.log('Screen width is 768px or less, setting selectedValue to "column view".');
      } 
    };

    // Set up a media query listener
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', handleScreenWidthChange);

    // Check the current screen width on component mount
    handleScreenWidthChange(mediaQuery);

    // Clean up the listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleScreenWidthChange);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => findJob(e)}
      className=" h-full w-full flex flex-col "
    >
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className=" bg-black w-full min-h-[100px] md:h-[110px] p-[10px] ">
        <div className=" grid grid-cols-2  place-content-center place-items-start w-full h-full md:flex gap-4 md:gap-2  justify-between items-center px-[5px] 2xl:px-5">
          <div className=" w-full md:w-[50%] bg-black h-full flex flex-col items-start justify-end ">
            <label className=" text-white text-[12px] 2xl:text-[14px]">
              Job Title
            </label>
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
                className="border-t-0 border-r-0 border-l-0 placeholder-white text-white pl-3 h-[40px] text-[12px] 2xl:text-[14px]"
                name={"title"}
                type="text"
                placeholder="Enter title... "
                value={query?.title}
                onChange={(e) => {
                  setQuery({
                    ...query,
                    job_title: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

          <div className=" w-full md:w-[50%] md:px-3 flex flex-col justify-end h-full">
            <label className=" text-white text-[12px] 2xl:text-[14px]">
              State
            </label>

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
                placeholder="State..."
                options={_state || []}
                className="react-dropdown select2 bg-black border-t-0 border-r-0 border-l-0 text-white text-[12px] 2xl:text-[14px]"
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

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

          <div className="w-full md:w-[60%] md:px-3 flex flex-col justify-end items-start h-full">
            <label className="title text-white text-[12px] 2xl:text-[14px]">
              City
            </label>
            <div className="flex items-center justify-start w-full ">
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

          <div className=" hidden md:block h-[70%] border-1 border-solid border-gray-500"></div>

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
                placeholder="Experience..."
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
                placeholder="Salary..."
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
                placeholder="Job Type..."
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

          <div className=" col-span-2 w-1/2 flex justify-center items-center">
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

      <div className=" h-full flex  ">
        <div className=" min-h-[200px] w-[17%] bg-black px-4 pt-[30px] hidden">
          <div className=" flex flex-col gap-5">
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

        <div className="  w-[100%] h-[100%] flex justify-center items-center flex-col overflow-y-auto px-[30px] pt-[20px] pb-[20px]">
          <div className=" w-full  justify-end mb-4 mr-[80px] hidden xl:flex">
            <div>
              <label className=" hidden" htmlFor="dropdown">Select an option:</label>
              <select
                id="dropdown"
                value={selectedValue}
                onChange={handleChange}
                className=" border-2 border-solid border-gray-400 rounded-lg px-2  text-[16px] font-semibold"
              >
                <option value="" disabled>
                  Select View
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <List
            data={data}
            setQuery={setQuery}
            query={query}
            refetch={refetch}
            setSearchJob={setSearchJob}
            searchJob={searchJob}
            selectedValue = {selectedValue}
          />
        </div>
      </div>
    </form>
  );
};

export default Sidebar;
