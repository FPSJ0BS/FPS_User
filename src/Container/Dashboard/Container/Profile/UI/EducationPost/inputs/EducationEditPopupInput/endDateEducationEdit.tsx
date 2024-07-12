import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";

export const EndDateEducationEdit = () => {
  const { editEducationData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );
  const dispatch = useDispatch();

  const handleDateChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue) {
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
        End Date
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
    </div>
  );
};

export default EndDateEducationEdit;
