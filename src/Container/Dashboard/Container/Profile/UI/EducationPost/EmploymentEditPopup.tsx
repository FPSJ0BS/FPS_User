import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalEducationEditModal,
  closeModalEducationModal,
  closeModalEmploymentEditModal,
  editEducationDataJobValues,
  editEmploymentDataJobValues,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import {
  getEducationDetailsSingle,
  getEmploymentDetailsSingle,
  postSubmitEducationDetails,
  postSubmitEducationEditDetails,
  postSubmitEmploymentEditDetails,
} from "@/api/api";
import { Toast } from "@Utils/Toast";

import { useGlobalContext } from "@Context/GlobalContextProvider";

import Loader from "@Container/Dashboard/Loader/laoder";
import { OrganizationEmploymentEdit } from "./inputs/EmploymentEditPopupInput/organizationEmploymentEdit";
import { DesignationEmploymentEdit } from "./inputs/EmploymentEditPopupInput/designationEmploymentEdit";
import { ResponsibilitiesEmploymentEdit } from "./inputs/EmploymentEditPopupInput/responsibilitiesEmploymentEdit";
import { StartdateEmploymentEdit } from "./inputs/EmploymentEditPopupInput/startdateEmploymentEdit";
import { EnddateEmploymentEdit } from "./inputs/EmploymentEditPopupInput/enddateEmploymentEdit";
import { CurrentlyEmploymentEdit } from "./inputs/EmploymentEditPopupInput/currentlyEmploymentEdit";

function EmploymentEditPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);
  const [loaderState, setLoaderState] = useState(false);

  const { editEmploymentData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  useEffect(() => {
    setLoaderState(true);
    const fetch = async () => {
      try {
        const res = await getEmploymentDetailsSingle(
          editEmploymentData.employmentId,
          userId
        );

        if (res?.data?.status) {
          const data = await res?.data?.data[0];

          await dispatch(
            editEmploymentDataJobValues({
              organization: data?.organization,
              designation: data?.designation,
              responsibilities: data?.responsibilities,
              startDate: data?.start_date,
              endDate: data?.end_date,
              currently: parseInt(data?.currently),
            })
          );

          setLoaderState(false);
        } else {
          console.log("res", res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    console.log("editEmploymentData", editEmploymentData);
  }, [editEmploymentData]);

  const onSubmitData = async (e) => {
    e.preventDefault();
    setButtonLoad(true);

    try {
      const res = await postSubmitEmploymentEditDetails([
        {
          experience: editEmploymentData.employmentId,
          faculityID: userId,
          organization: editEmploymentData.organization,
          designation: editEmploymentData.designation,
          responsibilities: editEmploymentData.responsibilities,
          start_date: editEmploymentData.startDate,
          end_date: editEmploymentData.endDate,
          currently: editEmploymentData.currently,
        },
      ]);
      if (res?.data?.status) {
       
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalEmploymentEditModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);
      } else {
       

        Toast("error", res?.data?.message);
        setButtonLoad(false);
        await dispatch(closeModalEmploymentEditModal());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoad(false);
    }
  };

  const popupCloseFunc = async () => {
    await dispatch(closeModalEmploymentEditModal());
  };

  return (
    <div className="TrackPopup h-full w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[90%] rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Edit Employment Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full h-full overflow-y-auto  handleScrollbarMain  ">
          {loaderState ? (
            <div className=" h-full w-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <form
              onSubmit={(e) => onSubmitData(e)}
              className=" grid grid-cols-2 gap-4 border-1 border-solid border-[#eff0f2] rounded-lg p-3 m-4"
            >
              <OrganizationEmploymentEdit />
              <DesignationEmploymentEdit />
              <ResponsibilitiesEmploymentEdit />
              <StartdateEmploymentEdit />
              <EnddateEmploymentEdit />
              <CurrentlyEmploymentEdit />

              <button
                type="submit"
                className=" col-span-2 w-[30%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
              >
                {buttonLoad ? "Submitting..." : "Submit Details"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmploymentEditPopup;
