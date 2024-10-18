import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ResultEducationEdit() {
  const dispatch = useDispatch();

  const {
    qualificationDataArray,
    resultDataArray,
    educationDataArray,
    editEducationData,
  } = useSelector((state: any) => state.myProfileEducationSlice);



  const handleEducationChange = (event) => {
    const resultType = event.target.value;

    dispatch(
      editEducationDataJobValues({
        resultType,
      })
    );
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.value;

    if (inputValue ?? false) {
      dispatch(
        editEducationDataJobValues({
          result: inputValue,
        })
      );
    } else {
      dispatch(
        editEducationDataJobValues({
          result: "",
        })
      );
    }

  };

  return (
    <div className="flex flex-col md:flex-row  w-[100%] gap-2 md:gap-0 ">
      <div className=" w-[100%] md:w-3/5 ">
        <label
          htmlFor="instituteNameEducationEdit"
          className=" postJobInputTitle font-semibold text-black mb-2"
        >
          Result *
        </label>
        <input
          autoComplete="off"
          placeholder="Result..."
          required
          onChange={(e) => handleChange(e)}
          type="text"
          id="instituteNameEducationEdit"
          name="jobTitle"
          className=" p-2 w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={editEducationData.result}
        />
      </div>
      <div className=" w-[100%] md:w-[40%] ">
        <label className="block mb-2 text-sm font-semibold text-black">
          Select Result Type *
        </label>
        <select
          required
          title="f"
          className="w-full p-2  focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 "
          value={editEducationData.resultType}
          onChange={handleEducationChange}
        >
          <option disabled value="">
            Type
          </option>
          {resultDataArray.map(({ type, id }) => {
            return (
              <option key={id} value={id}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default ResultEducationEdit;
