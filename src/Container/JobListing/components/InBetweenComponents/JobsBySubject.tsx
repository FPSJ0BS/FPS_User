import { useState, useRef } from "react";
import useAllSubjectsListNode from "@Hooks/Queries/useAllSubjectsListNode";
import {
  toggleSubjectSelection,
  uncheckAllSubjects,
} from "@/Redux/FilterJobs/FilterJobs";
import { useDispatch } from "react-redux";

const JobsBySubject = ({ query, setQuery }) => {
  const dispatch = useDispatch();

  const { data: AllSubjectList } = useAllSubjectsListNode({});

  const [search, setSearch] = useState("");
  const cityListRef = useRef<HTMLDivElement | null>(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCities = AllSubjectList?.data?.filter(({ function: subject }) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  const scrollLeft = () => {
    if (cityListRef.current) {
      cityListRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cityListRef.current) {
      cityListRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const subjectChange = (subject) => {
    setQuery({
      ...query,
      job_function: subject,
    });
    dispatch(uncheckAllSubjects());
    dispatch(toggleSubjectSelection(subject));
  };

  return (
    <div className="relative w-full bg-[#eef5fe] rounded-[20px] shadow-sm gap-4 flex flex-col items-start p-4 cursor-default">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center gap-2 w-full">
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
            className="lucide lucide-blend"
          >
            <circle cx="9" cy="9" r="7" />
            <circle cx="15" cy="15" r="7" />
          </svg>
          <h2 className="font-bold text-[16px]">Filter Jobs By Subject</h2>
        </div>

        <div className="relative w-[200px]">
          <input
            type="text"
            placeholder="Search Subject"
            value={search}
            onChange={handleSearchChange}
            className="h-[30px] w-full rounded-[30px] px-4 pr-10 bg-white" 
          />
          {search && (
            <button
              title="x"
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div
        onClick={scrollLeft}
        className="absolute left-0 top-[45%] w-[40px] h-[40px] transform -translate-y-1/2 bg-[#85809b] text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
      >
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
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>

      <div
        onClick={scrollRight}
        className="absolute right-0 top-[45%] w-[40px] h-[40px] transform -translate-y-1/2 bg-[#85809b] text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
      >
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
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      <div
        ref={cityListRef}
        className="flex gap-3 cursor-pointer overflow-x-hidden w-full no-scrollbar"
      >
        {filteredCities
          ?.slice(0, 20)
          ?.map(({ id, function: subject, jobs }) => {
            return (
              <div
                onClick={() => subjectChange(subject)}
                key={id}
                className="h-[70px] min-w-[200px] rounded-[10px] p-3 bg-white flex flex-col justify-center items-start"
              >
                <h3 className="font-semibold">{subject}</h3>
                <p className="mb-0 text-[#3561ee] font-semibold">{jobs} Jobs</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JobsBySubject;
