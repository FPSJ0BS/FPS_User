import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";

export const EndDateEducationEdit = () => {
  const { editEducationData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );
  const dispatch = useDispatch();
  const [error, setError] = useState(""); 

  const handleDateChange = (e: any) => {
    const inputValue = e.target.value;
    const startDate = editEducationData.startDate;

    // Check if start date exists and compare with the end date
    if (startDate && inputValue <= startDate) {
      setError("End date must be after the start date."); // Set error if the end date is before or equal to start date
      dispatch(
        editEducationDataJobValues({
          endDate: "", // Clear the end date in the state
        })
      );
    } else {
      setError(""); // Clear the error if valid
      dispatch(
        editEducationDataJobValues({
          endDate: inputValue,
        })
      );
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="endDate"
        className="block mb-2 text-sm font-semibold text-black"
      >
        End Date *
      </label>
      <input
        required
        type="date"
        id="endDate"
        name="endDate"
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEducationData.endDate || ""}
        onChange={handleDateChange}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default EndDateEducationEdit;
