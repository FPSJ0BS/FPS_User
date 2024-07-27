import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import {
  editEducationDataJobValues,
  editEmploymentDataJobValues,
  openModalEmploymentAddModal,
  openModalEmploymentDeleteModal,
  openModalEmploymentEditModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useDispatch, useSelector } from "react-redux";
import Delete from "@Assets/Icons/delete.png";
import EmploymentData from "@Assets/Icons/Profile/education.png";

function Employment() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );



  const employmentData = userDataArray?.experience_data;

  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModalEmploymentAddModal());
  };

  const handleDeleteFunc = async (id) => {
    await dispatch(
      editEducationDataJobValues({
        individualId: parseInt(id),
      })
    );
    dispatch(openModalEmploymentDeleteModal());
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  function getDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} years ${months} months`;
  }

  const openEditModal = (id) => {
    dispatch(openModalEmploymentEditModal());

    dispatch(
      editEmploymentDataJobValues({
        employmentId: parseInt(id),
      })
    );
  };

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full employment">
      <div className=" flex justify-between items-center gap-2 h-[40px] ">
        <div className=" flex items-center gap-2">
          <img className=" w-[55px] md:w-[65px]" src={EmploymentData} alt="Education-Icon" />
          <h6 className=" text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
            Employment
          </h6>
        </div>
        <div
          onClick={() => modalOpen()}
          className="text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-2 md:px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Employment
        </div>
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px]">
        {userDataArray?.experience_data?.map(
          ({
            id,
            designation,
            organization,
            responsibilities,
            start_date,
            end_date,
            currently,
          }) => {
            return (
              <div
                key={id}
                className=" flex flex-col justify-start items-start gap-1 mb-2"
              >
                <div className=" flex items-center gap-2">
                  <button className=" capitalize cursor-pointer text-[#22223b] font-bold">
                    {designation}
                  </button>
                  <img
                    onClick={() => openEditModal(id)}
                    className="w-[16px] cursor-pointer ml-4"
                    src={Pen}
                    alt="pen"
                  />
                  <img
                    onClick={() => handleDeleteFunc(id)}
                    className="w-[20px] cursor-pointer "
                    src={Delete}
                    alt="delete"
                  />
                </div>

                <div className="flex flex-col items-start  mb-[-5px]">
                  <p className=" font-medium mb-0 capitalize">
                    {organization}
                  </p>
                  <p className=" font-normal mb-0 capitalize leading-[1.4em]">
                    {responsibilities}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-[-10px]">
                  <p className=" mb-0 capitalize text-gray-400 font-medium">
                    {formatDate(start_date)}{" "}
                    <span className=" normal-case">to Present -</span>{" "}
                    {getDuration(start_date, end_date)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <p className=" mb-0 capitalize text-gray-400 font-medium">
                    {parseInt(currently) === 1 ? "Currently Working" : ""}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default memo(Employment);
