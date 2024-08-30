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

function Education() {
  const { userDataArray } = useSelector(
    (state) => state.myProfileEducationSlice
  );
  const educationData = userDataArray?.education_data;

  const dispatch = useDispatch();

  function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
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

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full education">
      <div className=" flex justify-between items-center  h-[40px]">
        <div className=" flex items-center gap-2">
          <img className=" w-[55px] md:w-[65px]" src={EducationIcon} alt="Education-Icon" />
          <h6 className=" text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
            Education
          </h6>
        </div>
        <div
          onClick={() => dispatch(openModalEducationModal())}
          className=" text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Education
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
              <div className=" flex items-center gap-2">
                <button className=" capitalize cursor-pointer text-[#22223b] font-bold">
                  {edu?.course_txt}
                </button>
                <img
                  onClick={() => handlePopupFunc(edu?.id)}
                  className="w-[16px] cursor-pointer ml-4"
                  src={Pen}
                  alt="pen"
                />
                <img
                  onClick={() => handleDeleteFunc(edu?.id)}
                  className="w-[20px] cursor-pointer "
                  src={Delete}
                  alt="pen"
                />
              </div>

              <p className=" font-medium mb-[-10px] capitalize ">
                {edu?.institute_name}
              </p>
              <p className=" text-gray-400 mb-[-12px] font-medium">
                {getYearFromDate(edu?.start_date)} - {getYearFromDate(edu?.end_date)} |{" "}
                {edu?.education_type}
              </p>
              <p className=" mb-0 text-gray-400 font-medium">
                {parseInt(edu?.currently) === 1 ? "Pursuing" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Education);
