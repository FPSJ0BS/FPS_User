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
import { AppRoute } from "@Navigator/AppRoute";

const jobType = [
  { value: "", label: "Select job type" },
  { value: "Contract Base", label: "Contract Base" },
  { value: "Hourly Basis", label: "Hourly Basis" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Online Full Time", label: "Online Full Time" },
];

function Sidebar({ setSearchJob, searchJob }: any) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { subjects, category } = useParams();
  const [query, setQuery] = useState<any>({});
  const { data: cityList } = useFilterCity({});
  const { data: Salary } = useSalary({});
  const { data: Experiences } = useExperiences({});

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
  return (
    <div className="widget-filter st2  style-scroll po-sticky">
      <form onSubmit={(e) => findJob(e)}>
        <div className="group-form">
          <label className="title">Job Title</label>
          <div className="group-input search-ip">
            <button>
              <i className="icon-search"></i>
            </button>
            <input
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
        <div className="group-form">
          <label className="title">Location</label>
          <div className="group-input has-icon">
            <i className="icon-map-pin"></i>
            <CustomSelect
              options={cityList?.cities || []}
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
                color: "#000",
              }}
            />
          </div>
        </div>

        <div className="group-form">
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
        </div>
        <div className="group-form">
          <label className="title">Salary</label>
          <div className="group-input">
            <Dropdown
              options={_salary || []}
              className="react-dropdown select2"
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

        <div className="group-form">
          <label className="title">Experience</label>
          <div className="group-input">
            <Dropdown
              options={_experiences || []}
              className="react-dropdown select2"
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

        <button type="submit" aria-label="Search for jobs">
          Find Jobs
        </button>
      </form>
    </div>
  );
}

export default memo(Sidebar);
