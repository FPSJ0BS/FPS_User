import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import { useSelector, useDispatch } from "react-redux";
import {
  editEducationDataJobValues,
  openModalEducationDeleteModal,
  openModalEducationEditModal,
  openModalEducationModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import Delete from "@Assets/Icons/delete.png";
import EducationIcon from "@Assets/Icons/Profile/education.png";

function EducationShareProfile() {
  const { userDataArray } = useSelector(
    (state) => state.myProfileEducationSlice
  );
  const educationData = userDataArray?.education_data;

  const dispatch = useDispatch();

  function getYearOnly(dateString) {
    if (
      typeof dateString === "string" &&
      dateString.match(/^\d{4}-\d{2}-\d{2}$/)
    ) {
      return dateString.split("-")[0];
    } else {
      throw new Error(
        "Input string is not in the expected format 'YYYY-MM-DD'"
      );
    }
  }

  const handlePopupFunc = async (id) => {
    await dispatch(
      editEducationDataJobValues({
        individualId: parseInt(id),
      })
    );

    dispatch(openModalEducationEditModal());
  };

  const handleDeleteFunc = async (id) => {
    await dispatch(
      editEducationDataJobValues({
        individualId: parseInt(id),
      })
    );

    dispatch(openModalEducationDeleteModal());
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full employment border-gray-400 border-solid border-2">
      <div className=" flex justify-between items-center  h-[40px]">
        <div className=" flex items-center gap-2">
          <img className=" w-[55px] md:w-[65px]" src={EducationIcon} alt="Education-Icon" />
          <h6 className=" text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
            Education
          </h6>
        </div>
       
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px]">
        {educationData?.map((edu) => {
          return (
            <div
              key={edu?.id}
              className=" flex flex-col justify-start items-start gap-1 mb-2"
            >
              <div className=" flex items-center gap-2 border-none">
                <button className=" capitalize cursor-pointer text-[#22223b] font-bold border-none">
                  {edu?.course_txt}
                </button>
               
              </div>

              <p className=" font-medium mb-[-10px] capitalize ">
                {edu?.institute_name}
              </p>
              
              <div className="flex items-center gap-2 mb-[-10px]">
                  <p className=" mb-0 capitalize text-gray-400 font-medium">
                    {parseInt(edu?.currently) === 1 ? (
                      <>
                        {formatDate(edu?.start_date)}{" "}
                        <span className="normal-case">to Present</span> |{" "}
                        {edu?.education_type}
                        {/* {getDuration(start_date, end_date)} */}
                      </>
                    ) : (
                      <>
                        {formatDate(edu?.start_date)} - {formatDate(edu?.end_date)} |{" "}
                        {edu?.education_type}
                      </>
                    )}
                  </p>
                </div>
              <p className=" mb-0 text-gray-400 font-medium underline">
                {parseInt(edu?.currently) === 1 ? "Pursuing" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(EducationShareProfile);
