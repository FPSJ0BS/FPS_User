import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import {
  editEducationDataJobValues,
  editEmploymentDataJobValues,
  openModalCareerPreferenceModal,
  openModalEmploymentAddModal,
  openModalEmploymentDeleteModal,
  openModalEmploymentEditModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useDispatch, useSelector } from "react-redux";
import Delete from "@Assets/Icons/delete.png";
import CareerPreferenceIcon from "@Assets/Icons/Profile/CITY_PREFERENCES.png";

function CareerPreference() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );



  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModalCareerPreferenceModal());
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
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full career-preference">
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex items-center gap-2 h-[40px]">
          <img
            className=" w-[65px]"
            src={CareerPreferenceIcon}
            alt="Education-Icon"
          />
          <h6 className="text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
            Career Preference
          </h6>
        </div>
        <div
          onClick={() => modalOpen()}
          className="text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-2 md:px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Career Preference
        </div>
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px] w-full">
        <div className=" flex flex-col justify-start items-start mb-2 gap-2 w-full">
          <div className=" flex flex-col justify-start items-start w-full">
            <p className=" text-gray-400 font-bold mb-0 capitalize w-full">
              Preferred Location
            </p>
            <div className=" flex gap-2">
              {userDataArray?.city_preferences?.map(
                ({ city_name, id }, index) => {
                  const isLastItem =
                    index === userDataArray.city_preferences.length - 1;
                  return (
                    <p
                      key={id}
                      className="capitalize cursor-pointer text-black font-semibold mb-0"
                    >
                      {city_name}
                      {!isLastItem && ","}
                    </p>
                  );
                }
              )}
            </div>
          </div>

          <div className=" flex flex-col justify-start items-start ">
            <p className=" text-gray-400 font-bold mb-0 capitalize ">
              Preferred Role
            </p>
            <div className=" flex gap-2">
              {userDataArray?.career_preferences?.map(
                ({ carrer_value, carrer_type }, index) => {
                  if (carrer_type === "job_role") {
                    return (
                      <p
                        key={index}
                        className="capitalize cursor-pointer text-black font-semibold mb-0"
                      >
                        {carrer_value}
                      </p>
                    );
                  }
                  return null;
                }
              )}
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Preferred Annual Salary
              </p>
              <div className=" flex gap-2">
                {userDataArray?.salary_preferences?.map(({ salary }, index) => {
                  return (
                    <p
                      key={index}
                      className="capitalize cursor-pointer text-black font-semibold mb-0"
                    >
                      {salary}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start ">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Employment Type
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "nature_of_employment") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Job Type
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "job_type") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start ">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Preferred Shift
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "preferred_shift") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CareerPreference);
