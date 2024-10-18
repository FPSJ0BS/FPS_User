import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export const CurrentlyEducationEdit = () => {
  const { editEducationData } = useSelector((state : any) => state.myProfileEducationSlice);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    dispatch(
        editEducationDataJobValues({
        currently: isChecked ? 1 : 0,
      })
    );
  };

  return (
    <div className="sm:w-[100%] w-[250px] flex flex-col items-start gap-2 col-span-2">
      <label
        htmlFor="currentlyEducationEdit"
        className="postJobInputTitle font-semibold text-black"
      >
        Currently Pursuing *
      </label>
      <input
        type="checkbox"
        id="currentlyEducationEdit"
        name="currentlyEducation"
        className="p-2  "
        checked={editEducationData.currently === 1}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
