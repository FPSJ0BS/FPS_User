import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";

export const StartDateEducationEdit = () => {
  const { editEducationData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );
  const dispatch = useDispatch();

  const handleDateChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue) {
      dispatch(
        editEducationDataJobValues({
          startDate: inputValue,
        })
      );
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="startDate"
        className="block mb-2 text-sm font-semibold text-black"
      >
        Start Date
      </label>
      <input
      required
        type="date"
        id="startDate"
        name="startDate"
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEducationData.startDate || ""}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default StartDateEducationEdit;
