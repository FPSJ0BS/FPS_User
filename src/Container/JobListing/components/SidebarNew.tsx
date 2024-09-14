import useAllCityListNode from "@Hooks/Queries/useAllCityListNode";
import useAllSubjectsListNode from "@Hooks/Queries/useAllSubjectsListNode";
import useExperiencesNode from "@Hooks/Queries/useExperiencesNode";
import useGetCityListNode from "@Hooks/Queries/useGetCityListNode";
import useSalaryNode from "@Hooks/Queries/useSalaryNode";
import { AppRoute } from "@Navigator/AppRoute";
import { useEffect, useState } from "react";
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
  

const SidebarNew = ({searchJob,setSearchJob, query, setQuery}) => {


  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { subjects, category } = useParams();

  // const { data: cityList } = useFilterCity({});
  // const { data: Salary } = useSalary({});
  const { data: Salary } = useSalaryNode({});
  // const { data: Experiences } = useExperiences({});
  const { data: Experiences } = useExperiencesNode({});
  // const { data: State } = useStatesList({});

  const { data: AllCityList } = useAllCityListNode({});
  const { data: AllSubjectList } = useAllSubjectsListNode({});


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
      function: searchParams.get("function") || "",
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
    const filterState = AllCityList?.data?.find((state) => {
      return state.city === query.state;
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
        return { id: city?.id, city: city?.name, jobs: city?.jobs };
      }),
    ];

  const [showSidebar, setShowSidebar] = useState(false);

  const [citySelect, setCitySelect] = useState("");

  useEffect(()=>{

  

    setQuery((query) => ({
      ...query,
      city : citySelect,
    }));

    
  },[citySelect])



  return (
    <form

      onSubmit={(e) => findJob(e)}
      className="   w-full flex flex-col items-center pb-[300px] "
    >
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      
        <div className=" w-full justify-end flex">
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

        <div className=" gap-4 flex flex-col w-full h-full  items-center px-[5px] 2xl:px-2">
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

          <SubjectsInput query={query} setQuery={setQuery} State={AllSubjectList} />

          <StateInput query={query} setQuery={setQuery} State={AllCityList} setCitySelect = {setCitySelect} />

          <ExperienceInput
            query={query}
            setQuery={setQuery}
            experiences={_experiences}
          />

          <SalaryInput query={query} setQuery={setQuery} salary={_salary} />

          <JobTypeInput query={query} setQuery={setQuery} State={jobType}/>

        </div>
     

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

     
    </form>
  )
}

export default SidebarNew