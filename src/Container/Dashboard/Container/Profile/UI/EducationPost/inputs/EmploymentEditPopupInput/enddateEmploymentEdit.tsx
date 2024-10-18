import { editEmploymentDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const EnddateEmploymentEdit = () => {
  const { editEmploymentData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const startDate = editEmploymentData.startDate;

    // Check if start date exists and compare with the end date
    if (startDate && inputValue <= startDate) {
      setError("End date must be after the start date."); // Set error if the end date is before or equal to start date
      dispatch(
        editEmploymentDataJobValues({
          endDate: "", // Clear the end date in the state
        })
      );
    } else {
      setError(""); // Clear the error if valid
      dispatch(
        editEmploymentDataJobValues({
          endDate: inputValue,
        })
      );
    }
  };

  return (
    <div className=" w-[100%]  flex flex-col gap-2 col-span-2 md:col-span-1">
      <label
        htmlFor="enddateEmploymentEdit"
        className=" postJobInputTitle font-semibold text-black "
      >
        End Date *
      </label>
      <input
        autoComplete="off"
        placeholder="Enter endDate..."
        required
        onChange={(e) => handleChange(e)}
        type="date"
        id="enddateEmploymentEdit"
        name="jobTitle"
        className=" p-2  sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEmploymentData.endDate}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};
