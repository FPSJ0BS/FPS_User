import { useState, memo, useEffect } from "react";
import Pen from "@Assets/Icons/pen.png";
import Download from "@Assets/Icons/file.png";
import Delete from "@Assets/Icons/delete.png";
import { postUploadResume } from "@/api/api";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { toggleRefetchProfile } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import PrintResume from "./B";

function Resume() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const [buttonLoad, setButtonLoad] = useState(false);
  const dispatch = useDispatch()


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
      setButtonLoad(true)
      const formData = new FormData();
      formData.append("UID", userId); // Append UID
      formData.append("cvDoc", selectedFile); // Append selected file

      const res = await postUploadResume(formData);

      // Handle success response
      if(res?.data?.status){

        setButtonLoad(false)
        dispatch(toggleRefetchProfile())
        
        Toast("success", res?.data?.message);

      } else{
        Toast("error", res?.data?.message);
        setButtonLoad(false)

      }

      // Clear the selected file after upload
      setSelectedFile(null);

    } catch (error) {
      console.error("Error uploading resume:", error);
      // Handle error scenario
    }
  };

  useEffect(()=>{

    updateResume()

  }, [selectedFile])

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

 


  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full resume">
      <div className=" flex justify-start items-center gap-2  ">
        <h6 className=" w-full flex gap-2 cursor-default font-bold">Resume </h6>
        {/* <img className="w-[20px] cursor-pointer " src={Pen} alt="pen" /> */}
      </div>
      <hr />

      <div className=" flex justify-between items-center mt-[20px]">
        <div className=" ">
          <p className=" mb-0 font-semibold">{userDataArray?.name}</p>
         
        </div>

        <div onClick={() => downloadResume(userDataArray?.cv_doc, userDataArray?.name)} className=" flex items-center gap-3">
          <img className="w-[30px] cursor-pointer " src={Download} alt="pen" />
        </div>

      </div>
      
      <div className=" w-full h-[130px] mt-[20px] border-1 border-dashed rounded-2xl border-gray-400 flex flex-col justify-center items-center">
        <label htmlFor="uploadResume" className="cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-2 border-[2px] border-solid  rounded-3xl flex justify-center items-center">
          {buttonLoad ? "Updating Resume..." : "Upload Resume"}
          <input
            id="uploadResume"
            type="file"
            accept=".doc, .docx, .rtf, .pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        
        <p className=" mb-0 mt-1 font-medium">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
      </div>
    </div>
  );
}

export default memo(Resume);
