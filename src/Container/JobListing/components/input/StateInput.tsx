import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeCityData,
  togglePopup,
  toggleCitySelection,
  setSearchQuery,
} from "@/Redux/FilterJobs/FilterJobs";
import { RootState } from "@/store/store";

export const StateInput = ({ State }) => {
  const dispatch = useDispatch();
  const {
    visibleCities,
    remainingCities,

    filterJobInputs,

  } = useSelector((state: RootState) => state.filterJobsSlice);


  useEffect(() => {
    if (State?.data) {
      dispatch(initializeCityData(State.data));
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
          className="lucide lucide-blend"
        >
          <circle cx="9" cy="9" r="7" />
          <circle cx="15" cy="15" r="7" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="block font-medium text-black"
        >
          City
        </label>
      </div>

  
      {visibleCities.map((city, index) => (
        <div key={index} className="flex items-center mb-1 cursor-pointer">
          <input
            type="checkbox"
            id={`city-checkbox-${city.id}`}
            value={city.city}
            checked={filterJobInputs.city.includes(city.city)}
            onChange={() => dispatch(toggleCitySelection(city.city))}
            className="mr-2"
          />
          <label className=" cursor-pointer" htmlFor={`city-checkbox-${city.id}`}>{city.city}</label>
        </div>
      ))}


      {remainingCities.length > 0 && (
        <button
          type="button"
          onClick={() => dispatch(togglePopup())}
          className="text-blue-600 border-none underline font-semibold cursor-pointer mt-2"
        >
          Show More Cities
        </button>
      )}


    </div>
  );
};
