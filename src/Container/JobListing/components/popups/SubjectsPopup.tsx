import {
  setSearchQuery,
  setSearchQuerySubject,
  toggleCitySelection,
  togglePopup,
  togglePopupSubjects,
  toggleSubjectSelection,
} from "@/Redux/FilterJobs/FilterJobs";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const SubjectsPopup = () => {
  const dispatch = useDispatch();

  const {

    filterJobInputs,
    searchQuerySubjects,
    filteredSubjects,
  } = useSelector((state: RootState) => state.filterJobsSlice);
  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss flex justify-center items-center cursor-default">
      <div
        className={` bg-white h-[95%] 2xl:h-[75%] w-full sm:w-[80%] 2xl:w-[60%] flex flex-col justify-start items-start  z-40 fixed p-4  rounded-[30px]  `}
      >
        <div className=" h-[90%] flex flex-col gap-4">
          <div className=" w-full flex justify-between items-center">
            <h3 className=" text-[20px] font-semibold">Subjects</h3>
            <svg
              onClick={() => dispatch(togglePopupSubjects())}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x text-red-700 cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Subjects..."
            value={searchQuerySubjects}
            onChange={(e) => dispatch(setSearchQuerySubject(e.target.value))}
            className=" p-3 border-1 border-solid  h-[30px] w-[300px] rounded-[30px] bg-white shadow-sm border-[#3a60ed] "
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-x-[20px] sm:gap-x-[30px] gap-y-[10px] overflow-y-auto">
            {filteredSubjects?.slice(0, 60)?.map((subject, index) => (
              <div key={index} className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  id={`popup-subject-checkbox-${subject.ID}`}
                  value={subject.function}
                  checked={filterJobInputs.subject.includes(subject.function)}
                  onChange={() => dispatch(toggleSubjectSelection(subject.function))}
                  className="mr-2 border-solid border-1 border-[#737b9b] cursor-pointer"
                />
                <label className=" cursor-pointer" htmlFor={`popup-subject-checkbox-${subject.ID}`}>
                  {subject.function}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full flex justify-end items-end h-[10%]">
          <button 
              onClick={() => dispatch(togglePopupSubjects())}
              className=" w-[60%] sm:w-[20%] h-[35px] bg-[#3a60ed] text-white border-none rounded-[30px] text-[16px] font-semibold">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPopup;
