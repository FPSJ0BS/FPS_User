import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeSubjectData,
  toggleSubjectSelection,
  togglePopupSubjects,
} from "@/Redux/FilterJobs/FilterJobs";
import { RootState } from "@/store/store";

export const SubjectsInput = ({ State }) => {

  const dispatch = useDispatch();
  const { visibleSubjects, remainingSubjects, filterJobInputs } = useSelector(
    (state: RootState) => state.filterJobsSlice
  );


  useEffect(() => {
    if (State?.data) {
      dispatch(initializeSubjectData(State.data));
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-library-big"
        >
          <rect width="8" height="18" x="3" y="3" rx="1" />
          <path d="M7 3v18" />
          <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="block font-medium text-black"
        >
          Subjects
        </label>
      </div>

      {/* Visible Subjects with Checkboxes */}
      {visibleSubjects.map((subject, index) => (
        <div key={index} className="flex items-center mb-1 cursor-pointer">
          <input
            type="checkbox"
            id={`city-checkbox-${subject.ID}`}
            value={subject.function}
            checked={filterJobInputs.subject.includes(subject.function)}
            onChange={() => dispatch(toggleSubjectSelection(subject.function))}
            className="mr-2 cursor-pointer"
          />
          <label className="cursor-pointer" htmlFor={`city-checkbox-${subject.ID}`}>
            {subject.function}
          </label>
        </div>
      ))}

      {/* Show More Button */}
      {remainingSubjects.length > 0 && (
        <button
          type="button"
          onClick={() => dispatch(togglePopupSubjects())}
          className="text-blue-600 border-none underline font-semibold cursor-pointer mt-2"
        >
          Show More Subjects
        </button>
      )}

      {/* Popup for remaining Subjects */}
    </div>
  );
};
