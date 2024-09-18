import { useEffect, useState } from "react";
import useAllCityListNode from "@Hooks/Queries/useAllCityListNode";
import useAllSubjectsListNode from "@Hooks/Queries/useAllSubjectsListNode";
import useExperiencesNode from "@Hooks/Queries/useExperiencesNode";
import useGetCityListNode from "@Hooks/Queries/useGetCityListNode";
import useSalaryNode from "@Hooks/Queries/useSalaryNode";
import { AppRoute } from "@Navigator/AppRoute";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { JobTitle } from "./input/JobTitle";
import { SubjectsInput } from "./input/SubjectsInput";
import { StateInput } from "./input/StateInput";
import { ExperienceInput } from "./input/ExperienceInput";
import { SalaryInput } from "./input/SalaryInput";
import { JobTypeInput } from "./input/JobTypeInput";

const jobType = [
  { value: "", label: "Select job type" },
  { value: "Work From Office", label: "Work From Office" },
  { value: "Hourly Basis", label: "Hourly Basis" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Work From Home", label: "Work From Home" },
];

const SidebarNew = ({ searchJob, setSearchJob, query, setQuery, setJobList, citySelect, setCitySelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { subjects, category } = useParams();
  
  const { data: Salary } = useSalaryNode({});
  const { data: Experiences } = useExperiencesNode({});
  const { data: AllCityList } = useAllCityListNode({});
  const { data: AllSubjectList } = useAllSubjectsListNode({});

  const [queryTwo, setQueryTwo] = useState({
    stateID: "",
  });

  const { data: cityStateList } = useGetCityListNode(
    { enabled: !!queryTwo.stateID },
    queryTwo
  );

  let [searchParams, setSearchParams] = useSearchParams();

  // This function triggers the search and updates the URL parameters
  const findJob = () => {
    // Clear the job list when the search is actually triggered, not immediately
    // setJobList([]); -- Remove this line
  
    setSearchParams((params) => {
      let queryParams = Object.keys(query);
  
      // Clear previous params
      params.delete("EmployerPostJobState");
  
      // Loop through each query param and update it if it has a value
      queryParams.forEach((param) => {
        const value = query[param];
        
        if (value) {
          params.set(param, value);
        } else {
          params.delete(param);
        }
      });
      
      return params;
    });
  
    // Update route based on params if necessary
    if (subjects) {
      let queryParam = Object.keys(query);
      queryParam.forEach((param) => {
        const value = query[param];
        if (value) {
          queryParams.set(param, value);
        }
      });
  
      navigate({
        pathname: `${AppRoute.Find_Jobs}/${category}/${query?.title ? query?.title : subjects}`,
        search: queryParams.toString(),
      });
    }
  
    // Now clear the list and trigger the search
    setJobList([]);
  };
  
  

  useEffect(() => {
    const _query = {
      city: searchParams.get("city"),
      job_title: searchParams.get("job_title"),
      job_type: searchParams.get("job_type") || "",
      salary_minimum: searchParams.get("salary_minimum") || "",
      min_experience: searchParams.get("min_experience") || "",
      state: searchParams.get("state") || "",
      job_function: searchParams.get("job_function") || "",
    };

    setQuery((oldQuery) => ({
      ...oldQuery,
      ..._query,
    }));

    if (subjects) {
      setSearchJob({
        ...searchJob,
        ..._query,
        job_title: query?.job_title ? query?.job_title : subjects?.replaceAll("-", " "),
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

  // Trigger findJob whenever the query state changes
  useEffect(() => {
    // Check if any of the fields in the query object have a value
    const hasValue = Object.values(query).some(value => value && value.trim() !== "");
  
    if (hasValue) {
      findJob(); // Only execute findJob if there's a value in the query
    } 
  }, [query]);
  

  const _experiences = [
    { value: "", label: "Select Experiences" },
    ...(Experiences?.data || [])?.map((exp) => ({
      value: exp?.exp_num,
      name: exp?.experience,
    })),
  ];

  const _salary = Salary?.data &&
    Salary?.data?.length && [
      { value: "", label: "Select Salary" },
      ...(Salary?.data || [])?.map((salary) => ({
        value: salary?.ID,
        name: salary?.salary?.toString().replaceAll("Lakhs", "LPA"),
      })),
    ];

  useEffect(() => {
    const filterState = AllCityList?.data?.find((state) => state.city === query.state);
    const id = filterState?.id;
    setQueryTwo({
      ...queryTwo,
      stateID: id,
    });
  }, [query.state]);

  const _cities = cityStateList?.data?.length && [
    ...(cityStateList?.data || []).map((city) => ({
      id: city?.id,
      city: city?.name,
      jobs: city?.jobs,
    })),
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setQuery((query) => ({
      ...query,
      city: citySelect,
    }));
  }, [citySelect]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      findJob(); // Only trigger findJob when the form is submitted
    }} className="w-full flex flex-col items-center pb-[300px]">
      {/* Sidebar Header */}
      <div className="w-full justify-end flex">
        {!showSidebar && (
          <svg
            onClick={() => setShowSidebar(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x cursor-pointer text-black sm:hidden block mb-2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </div>

      {/* Sidebar Body */}
      <div className="gap-4 flex flex-col w-full h-full items-center px-[5px] 2xl:px-2">
        <div className="col-span-2 w-full flex justify-center items-center">
          <button className="h-[30px] w-full text-white bg-green-500 rounded-lg" type="submit" aria-label="Search for jobs">
            Filter Jobs
          </button>
        </div>

        <JobTitle query={query} setQuery={setQuery} />
        <SubjectsInput query={query} setQuery={setQuery} State={AllSubjectList} />
        <StateInput query={query} setQuery={setQuery} State={AllCityList} setCitySelect={setCitySelect} />
        <ExperienceInput query={query} setQuery={setQuery} experiences={_experiences} />
        <SalaryInput query={query} setQuery={setQuery} salary={_salary} />
        <JobTypeInput query={query} setQuery={setQuery} State={jobType} />
      </div>
    </form>
  );
};

export default SidebarNew;
