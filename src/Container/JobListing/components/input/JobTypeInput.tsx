import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeJobTypeData,
  toggleJobTypeSelection,
} from "@/Redux/FilterJobs/FilterJobs";
import { RootState } from "@/store/store";

export const JobTypeInput = ({ State }) => {
  const dispatch = useDispatch();
  const { visibleJobType, filterJobInputs } = useSelector(
    (state: RootState) => state.filterJobsSlice
  );

  useEffect(() => {
    if (State) {
      dispatch(initializeJobTypeData(State));
    }
  }, [State, dispatch]);

  return (
    <div className="relative w-full">
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
          className="lucide lucide-backpack"
        >
          <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M8 10h8" />
          <path d="M8 18h8" />
          <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="block font-medium text-black"
        >
          Job Type
        </label>
      </div>

      {visibleJobType.map((type, index) => (
        <div key={index} className="flex items-center mb-1 cursor-pointer">
          <input
            type="checkbox"
            id={`jobtype-checkbox-${type.value}`}
            value={type.label}
            checked={filterJobInputs.jobType.includes(type.label)}
            onChange={() => dispatch(toggleJobTypeSelection(type.label))}
            className="mr-2"
          />
          <label
            className=" cursor-pointer"
            htmlFor={`jobtype-checkbox-${type.value}`}
          >
            {type.label}
          </label>
        </div>
      ))}
    </div>
  );
};
