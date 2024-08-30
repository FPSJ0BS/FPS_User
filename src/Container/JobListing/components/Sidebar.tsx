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
  const { data: Salary } = useSalaryNode({});
  const { data: Experiences } = useExperiencesNode({});
  const { data: State } = useStatesListNode({});

  const [queryTwo, setQueryTwo] = useState({
    stateID: "",
  });

  const { data: cityStateList } = useGetCityListNode(
    { enabled: !!queryTwo.stateID },
    queryTwo
  );

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
        value: salary?.exp_num,
        name: salary?.experience,
      };
    }),
  ];

  const _salary =
    Salary?.data &&
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

  const _cities =
    cityStateList?.data &&
    cityStateList?.data?.length && [
      ...(cityStateList?.data || []).map((city) => {
        return { id: city?.id, city: city?.name };
      }),
    ];

  const [showSidebar, setShowSidebar] = useState(false);

  const [selectedValue, setSelectedValue] = useState("column view");

  const options = [
    { value: "list view", label: "List" },
    { value: "column view", label: "Column" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const handleScreenWidthChange = (e) => {
      if (e.matches) {
        setSelectedValue("column view");
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleScreenWidthChange);

    handleScreenWidthChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenWidthChange);
    };
  }, []);

  return (
    <form onSubmit={(e) => findJob(e)} className="h-[100vh] w-full flex">
      <div
        className={`absolute sm:relative ${
          !showSidebar ? "block" : "hidden"
        } sm:block w-[80%] md:w-[40%] bg-black lg:w-[20%] h-[100%] p-[10px] overflow-y-auto postjobHandleScrollbar ${
          !showSidebar ? "pb-[30px]" : "pt-[30px]"
        }`}
      >
        <div className="w-full justify-end flex">
          {!showSidebar && (
            <svg
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
              className="lucide lucide-x cursor-pointer text-white sm:hidden block"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          )}
        </div>

        <div className="gap-4 flex flex-col w-full h-full items-center px-[5px] 2xl:px-5">
          <div className="col-span-2 w-full flex justify-center items-center">
            <button
              className="h-[30px] w-full text-white bg-green-500 rounded-lg"
              type="submit"
              aria-label="Search for jobs"
            >
              Filter Jobs
            </button>
          </div>

          <JobTitle query={query} setQuery={setQuery} />
          <StateInput query={query} setQuery={setQuery} State={State} />
          <div className="w-full flex flex-col justify-end items-start">
            <div className="flex items-center gap-3 mb-1">
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
                <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74L12 21l9.5-5.49a1 1 0 0 0 0-1.74l-5.5-3.14" />
                <path d="M12 22V11.25" />
              </svg>
              <p className="text-white">City</p>
            </div>
            <CityInput
              query={query}
              setQuery={setQuery}
              _cities={_cities}
              queryTwo={queryTwo}
            />
          </div>
          <ExperienceInput
            query={query}
            setQuery={setQuery}
            _experiences={_experiences}
          />
          <SalaryInput
            query={query}
            setQuery={setQuery}
            _salary={_salary}
          />
        </div>
      </div>

      <div
        className={`absolute sm:relative ${
          showSidebar ? "block" : "hidden"
        } sm:block w-full sm:w-[60%] lg:w-[80%] bg-black sm:ml-[0px] h-[100%] overflow-y-auto postjobHandleScrollbar ${
          showSidebar ? "pt-[30px]" : "pb-[30px]"
        }`}
      >
        <div className="flex justify-between items-center px-[10px]">
          <div className="text-white">
            <p>Job Listing</p>
          </div>
          <div className="sm:flex items-center justify-center text-white hidden">
            <label htmlFor="view-select" className="mr-2">
              View:
            </label>
            <Dropdown
              options={options}
              onChange={handleChange}
              value={selectedValue}
              placeholder="Select a view"
              className="bg-gray-700"
              controlClassName="control"
              menuClassName="menu"
              arrowClassName="arrow"
            />
          </div>

          {showSidebar && (
            <svg
              onClick={() => setShowSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list cursor-pointer text-white sm:hidden block"
            >
              <path d="M8 6h13" />
              <path d="M8 12h13" />
              <path d="M8 18h13" />
              <path d="M3 6h.01" />
              <path d="M3 12h.01" />
              <path d="M3 18h.01" />
            </svg>
          )}
        </div>

        <List
          data={data}
          searchJob={searchJob}
          refetch={refetch}
          selectedValue={selectedValue}
        />
      </div>
    </form>
  );
};

export default memo(Sidebar);
