import { useState, memo, useEffect } from "react";
import Pen from "@Assets/Icons/pen.png";
import Download from "@Assets/Icons/file.png";
import Delete from "@Assets/Icons/delete.png";
import { getGenerateShareLink, postUploadResume } from "@/api/api";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { toggleRefetchProfile } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import ProgressBarHori from "./Bar";
import PROGRESSBANNER from "@Assets/Icons/Profile/Profile Interface-bro.svg";
import { toast } from "react-toast";

function ProgressBar() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const [buttonLoad, setButtonLoad] = useState(false);
  const dispatch = useDispatch();

  const { userDataArray } = useSelector(
    (state) => state.myProfileEducationSlice
  );

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const updateResume = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    try {
      setButtonLoad(true);
      const formData = new FormData();
      formData.append("UID", userId); // Append UID
      formData.append("cvDoc", selectedFile); // Append selected file

      const res = await postUploadResume(formData);

      // Handle success response
      if (res?.data?.status) {
        setButtonLoad(false);
        dispatch(toggleRefetchProfile());

        Toast("success", res?.data?.message);
      } else {
        Toast("error", res?.data?.message);
        setButtonLoad(false);
      }

      // Clear the selected file after upload
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading resume:", error);
      // Handle error scenario
    }
  };

  useEffect(() => {
    updateResume();
  }, [selectedFile]);

  const downloadResume = (resumeUrl, name) => {
    // Replace with actual URL or file path to download the resume file

    fetch(resumeUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${name}.pdf`); // Specify the file name to download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading resume:", error));
  };

  const generateShareLink = async () => {
    try {
      const res = await getGenerateShareLink(userId);
      
      if(res?.status){

        Toast("success", "URL copied to clipboard");

      } else {

      }
 
      const shareLink = res.data?.data?.url; 

  

      await navigator.clipboard.writeText(shareLink);
  
      console.log('Share link copied to clipboard:', shareLink);
    } catch (error) {
      console.error('Error generating share link:', error);
    }
  };
  

  return (
    <div className="bg-[#e8f0fc] rounded-[20px] min-h-[150px] w-full md:flex flex-col md:flex-row hidden relative ">
      <div className=" hidden  w-[20%]  h-[150px] md:flex justify-center items-center ">
        <img src={PROGRESSBANNER} className="w-[95%]" alt="banner-profile" />
      </div>

      <div className=" w-[60%]  h-[150px]  flex flex-col  items-start justify-center gap-2 pl-5">
        <h5 className=" mb-0 font-bold">Your Profile</h5>
        <p className=" mb-0 leading-[1.4em] font-medium">
          Complete atleast 85% of your profile to generate customized
          resume for free!
        </p>

        <ProgressBarHori />
      </div>

      <div className=" w-[20%] hover:text-black h-[150px] flex justify-center items-center"></div>
      <button onClick={() => generateShareLink()} className=" w-[150px] bg-red-500 absolute right-2 top-2 h-[30px] px-2 text-white font-semibold rounded-lg ">
        {" "}
        Share my profile !
      </button>
    </div>
  );
}

export default memo(ProgressBar);
