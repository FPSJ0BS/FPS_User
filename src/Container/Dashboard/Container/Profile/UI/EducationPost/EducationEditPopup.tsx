import { useSelector, useDispatch } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalEducationEditModal,
  closeModalEducationModal,
  editEducationDataJobValues,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import {
  getEducationDetailsSingle,
  postSubmitEducationDetails,
  postSubmitEducationEditDetails,
} from "@/api/api";
import { Toast } from "@Utils/Toast";
import { InstituteNameEducationEdit } from "./inputs/EducationEditPopupInput/instituteNameEducationEdit";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import CourseEducationEdit from "./inputs/EducationEditPopupInput/courseEducationEdit";
import StartDateEducationEdit from "./inputs/EducationEditPopupInput/startDateEducationEdit";
import EndDateEducationEdit from "./inputs/EducationEditPopupInput/endDateEducationEdit";
import ResultEducationEdit from "./inputs/EducationEditPopupInput/resultEducationEdit";
import { SpecializationEducationEdit } from "./inputs/EducationEditPopupInput/specializationEducationEdit";
import Loader from "@Container/Dashboard/Loader/laoder";
import { CurrentlyEducationEdit } from "./inputs/EducationEditPopupInput/currentlyEducationEdit";

function EducationEditPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);
  const [loaderState, setLoaderState] = useState(false);

  function formatDateForInput(isoDate) {
    const date = new Date(isoDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useLayoutEffect(() => {
    setLoaderState(true);
    const fetch = async () => {
      try {
        const res = await getEducationDetailsSingle(
          editEducationData.individualId,
          userId
        );

        if (res?.data?.status) {
          const data = await res?.data?.data[0];
          console.log("data", data);

          await dispatch(
            editEducationDataJobValues({
              instituteName: data?.institute_name,
              course: data?.course,
              courseType: data?.type,
              startDate: formatDateForInput(data?.start_date),
              endDate: formatDateForInput(data?.end_date),
              result: data?.result,
              resultType: data?.result_type,
              specialization: data?.specialization,
              currently: data?.currently,
            })
          );

          setLoaderState(false);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  const { editEducationData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const onSubmitData = async (e) => {
    e.preventDefault();
    setButtonLoad(true);

    try {
      const res = await postSubmitEducationEditDetails({
        faculityID: userId.toString(),
        education: editEducationData.individualId,
        institute_name: editEducationData.instituteName,
        course: parseInt(editEducationData.course),
        start_date: editEducationData.startDate,
        end_date: editEducationData.endDate ? editEducationData.endDate : null,
        currently: editEducationData.currently,
        result: editEducationData.result,
        type: parseInt(editEducationData.courseType),
        result_type: parseInt(editEducationData.resultType),
        specialization: editEducationData.specialization,
      });
      if (res?.data?.status) {
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalEducationEditModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);
      } else {
        Toast("error", res?.data?.message);
        setButtonLoad(false);
        await dispatch(closeModalEducationEditModal());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoad(false);
    }
  };

  const popupCloseFunc = async () => {
    await dispatch(closeModalEducationEditModal());
  };

  useEffect(() => {
    if (editEducationData.currently === 1) {
      dispatch(
        editEducationDataJobValues({
          endDate: "",
        })
      );
    } else {
      dispatch(
        editEducationDataJobValues({
          endDate: "",
        })
      );
    }
  }, [editEducationData.currently]);

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Edit Education Details
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
              className=" grid grid-cols-1 md:grid-cols-2 gap-4 border-1 border-solid border-[#eff0f2] rounded-lg p-3 m-4 place-content-center place-items-start"
            >
              
              <InstituteNameEducationEdit />
              <CourseEducationEdit />
              <StartDateEducationEdit />
              {editEducationData.currently === 0 && <EndDateEducationEdit />}
              <ResultEducationEdit />
              <SpecializationEducationEdit />
              <CurrentlyEducationEdit />

              <button
                type="submit"
                className="w-full sm:w-[30%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
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

export default EducationEditPopup;
