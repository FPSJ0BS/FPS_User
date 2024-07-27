import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function CourseEducationEdit() {
  const dispatch = useDispatch()

  const { qualificationDataArray, resultDataArray, educationDataArray, editEducationData } =
  useSelector((state: any) => state.myProfileEducationSlice);





  const handleCourseChange = (event) => {
    const course = event.target.value;

    dispatch(
      editEducationDataJobValues({
        course
      })
    );
  };

  const handleEducationChange = (event) => {

    const courseType = event.target.value;

    dispatch(
      editEducationDataJobValues({
        courseType
      })
    );

  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0">
      <div className=" md:w-3/5 ">
        <label className="block mb-2 text-sm font-semibold text-black">
          Select a course
        </label>
        <select
          required
          title="f"
          className="w-full p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={editEducationData.course}
          onChange={handleCourseChange}
        >
          <option disabled value="">
            Select a course
          </option>
          {qualificationDataArray?.map(({qualification, ID}) => {
            return (

              <option key={ID} value={ID}>{qualification}</option>
            )
          })}
          
        </select>
      </div>
      <div className=" md:w-2/5 ">
        <label className="block mb-2 text-sm font-semibold text-black">
          Select Course Type
        </label>
        <select
          required
          title="f"
          className="w-full p-2  focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 "
          value={editEducationData.courseType}
          onChange={handleEducationChange}
        >
          <option disabled value="">
            Type
          </option>
          {educationDataArray?.map(({type, id})=>{
            return (

              <option key={id} value={id}>{type}</option>
            )
          })}
          
        </select>
      </div>
    </div>
  );
}

export default CourseEducationEdit;
