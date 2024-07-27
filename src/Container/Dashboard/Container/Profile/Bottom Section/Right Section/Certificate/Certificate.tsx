import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pen from "@Assets/Icons/pen.png";
import {
  editCertificateDataJobValues,
  openModalCertificateDeleteDataModal,
  openModalCertificateEditDataModal,
  openModalCertificateEditModal,
  openModalSkillsAddModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import Download from "@Assets/Icons/file.png";
import Delete from "@Assets/Icons/delete.png";
import CertificateIcon from "@Assets/Icons/Profile/certifcate.png";

function Certificate() {
  const dispatch = useDispatch();

  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const opnSkillsPopup = () => {
    dispatch(openModalCertificateEditModal());
  };

  const educationData = userDataArray?.education_data;


  function getFileExtension(url) {
    const parts = url.split(".");
    return parts[parts.length - 1];
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  async function downloadFile(url, filename) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(downloadUrl); // Clean up the object URL
    } catch (error) {
      console.error("There was an error downloading the file:", error);
    }
  }

  const handlePopupFunc = async (id) => {
    await dispatch(
      editCertificateDataJobValues({
        certId: parseInt(id),
      })
    );

    dispatch(openModalCertificateEditDataModal());
  };

  const delPopup = (certId) => {
    dispatch(openModalCertificateDeleteDataModal());

    dispatch(
      editCertificateDataJobValues({
        certId,
      })
    );
  };

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full certificates">
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex gap-2 items-start">
          <div className=" flex items-center gap-2 h-[40px]">
            <img
              className=" w-[65px]"
              src={CertificateIcon}
              alt="Education-Icon"
            />
            <h6  className="text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
              Certificate
            </h6>
          </div>
        </div>
        <div
          onClick={() => opnSkillsPopup()}
          className="text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-2 md:px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Certificate
        </div>
      </div>
      <hr />

      <div className=" flex  gap-2 justify-start items-center  flex-wrap">
        <div className=" flex flex-col w-full  items-start mt-[20px] gap-3">
          {userDataArray?.certificate_data?.map(
            ({ title, certificate_file, created_at, description, id }) => {
              return (
                <div className=" flex w-full justify-between gap-2 pr-2 md:pr-0">
                  <div className=" w-[80%] flex-wrap">
                    <div className=" flex gap-2 items-center">
                      <p className=" mb-0 font-semibold capitalize ">
                        {title}
                        <span className=" normal-case">
                          {/* .{getFileExtension(certificate_file)} */}
                        </span>
                      </p>
                      <img
                        onClick={() => handlePopupFunc(id)}
                        className="w-[18px] cursor-pointer hover:w-[20px] "
                        src={Pen}
                        alt="pen"
                      />
                    </div>
                    <p className=" mb-0 text-[13px]">
                      Uploaded on {formatDate(created_at)}
                    </p>
                    <p className="mb-0 text-[13px]">{description}</p>
                  </div>

                  <div className=" w-[20%] h-full flex items-center justify-end gap-3">
                    {certificate_file && (
                      <img
                        onClick={() => downloadFile(certificate_file, title)}
                        className="w-[30px] cursor-pointer "
                        src={Download}
                        alt="Download"
                      />
                    )}
                    <img
                      onClick={() => delPopup(id)}
                      className="w-[30px]  cursor-pointer "
                      src={Delete}
                      alt="Delete"
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Certificate);
