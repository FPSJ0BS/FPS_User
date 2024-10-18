import { editEmploymentDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export const CurrentlyEmploymentEdit = () => {
  const { editEmploymentData } = useSelector((state) => state.myProfileEducationSlice);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    dispatch(
      editEmploymentDataJobValues({
        currently: isChecked ? 1 : 0,
      })
    );
  };

  return (
    <div className="sm:w-[100%] w-[250px] flex flex-col items-start gap-2 col-span-2">
      <label
        htmlFor="currentlyEmploymentEdit"
        className="postJobInputTitle font-semibold text-black"
      >
        Currently Working *
      </label>
      <input
        type="checkbox"
        id="currentlyEmploymentEdit"
        name="currentlyEmployment"
        className="p-2  "
        checked={editEmploymentData.currently === 1}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
