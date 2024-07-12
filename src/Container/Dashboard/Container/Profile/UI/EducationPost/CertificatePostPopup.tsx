import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalCertificateEditModal,
  closeModalEmploymentAddModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { postCertificateDetails, postSubmitEmploymentDetails } from "@/api/api";
import ResumeUpload from "./inputs/CertificatePostPopupInput/ResumeUpload";
import { CertificateTitle } from "./inputs/CertificatePostPopupInput/CertificateTitle";
import { CertificateDescription } from "./inputs/CertificatePostPopupInput/CertificateDescription";

function CertificatePostPopup() {
  const { userData } = useGlobalContext();
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);
  const [file, setFile] = useState(null);


  const { qualificationDataArray, resultDataArray, educationDataArray, editCertificateData } =
    useSelector((state: any) => state.myProfileEducationSlice);

    useEffect(()=>{

      console.log(editCertificateData);

    }, [editCertificateData])

    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonLoad(true);
    
      // Create a new FormData object
      const formData = new FormData();
      formData.append('faculityID', userData.UID);
      formData.append('certificate_file', file);
      formData.append('title', editCertificateData.certificateTitle);
      formData.append('description', editCertificateData.certificateDescription);
    
      try {
        // Pass the FormData object to the postCertificateDetails function
        const res = await postCertificateDetails(formData);
    
        if (res?.data?.status) {
          console.log(res);
          await popupCloseFunc();
          Toast("success", res?.data?.message);
          dispatch(toggleRefetchProfile());
        } else {
          console.log(res);

          await popupCloseFunc();
          Toast("error", res?.data?.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        Toast("error", "An error occurred while submitting the form.");
      } finally {
        setButtonLoad(false);
      }
    };
    

  const popupCloseFunc = async () => {
    await dispatch(closeModalCertificateEditModal());
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
          Add Certificate Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full overflow-y-auto px-5 py-4 handleScrollbarMain">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="gap-2 border-1 border-solid border-gray-300 p-3 rounded-lg grid grid-cols-2">
              <CertificateTitle />
              <ResumeUpload file = {file} setFile = {setFile} />
              <CertificateDescription />

              <div className=" col-span-2 w-full">
              <button
                type="submit"
                className="   w-[30%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
              >
                {buttonLoad ? "Submitting..." : "Submit Certificate"}
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CertificatePostPopup;
