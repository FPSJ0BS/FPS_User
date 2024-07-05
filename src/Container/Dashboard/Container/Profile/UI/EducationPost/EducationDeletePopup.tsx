import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import { closeModalEducationDeleteModal, toggleRefetchProfile } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { getDeleteEducationDetails } from "@/api/api";
import { Toast } from "@Utils/Toast";

function EducationDeletePopup() {
  const dispatch = useDispatch();
  const [buttonLoad, setButtonLoad] = useState(false);
  const { editEducationData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const onSubmitData = async () => {
    setButtonLoad(true);
    try {
      const res = await getDeleteEducationDetails(
        editEducationData.individualId
      );

      if (res?.data?.status) {
        dispatch(toggleRefetchProfile())
        await dispatch(closeModalEducationDeleteModal());
        setButtonLoad(false);
        Toast("success", res?.data?.message);
      } else {
        setButtonLoad(false);
        Toast("error", res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const popupCloseFunc = async () => {
    await dispatch(closeModalEducationDeleteModal());
  };

  return (
    <div className="TrackPopup h-full w-[100%] right-0 z-50 flex justify-center items-center fixed bg-gray-200 bg-opacity-55">
      <div className="bg-white gap-4 h-[30%] w-[45%]  shadow-lg border-1 border-solid border-gray-300 rounded-xl flex flex-col justify-center items-center py-4 relative">
        <img
          onClick={popupCloseFunc}
          className="cursor-pointer absolute sm:left-10 top-[30px]"
          src={CloseIcon}
          alt="close"
        />
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Are you sure you want to delete this?
        </h4>

        <div className=" flex gap-5">
          <div
            onClick={() => onSubmitData()}
            className="w-full  flex items-center justify-center cursor-pointer"
          >
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-green-800 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-white"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                {buttonLoad ? "Deleting..." : "Yes"}
              </span>
            </div>
          </div>

          <div
            onClick={() => popupCloseFunc()}
            className="w-full  flex items-center justify-center cursor-pointer"
          >
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-red-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x text-green-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                No
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationDeletePopup;
