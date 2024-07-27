import { AppConst } from "@/Enum/AppConst";
import SEO from "@Components/Seo/Seo";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useUploadCv from "@Hooks/Mutation/useUploadCv";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { Toast } from "@Utils/Toast";
import { memo, useEffect, useRef, useState } from "react";

const Resume = () => {
  const { userData, progress, setProgress } = useGlobalContext();
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [file,setfile] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null!);
  const userId = userData?.UID;
  const { data } = useProfileDetails({
    UID: userId,
  });
  const { mutateAsync: UploadCv } = useUploadCv({});
  useEffect(() => {
    if (showCopiedAlert) {
      setTimeout(() => {
        setShowCopiedAlert(false);
      }, 2000);
    }
  }, [showCopiedAlert]);

  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Resume Upload Page"}
        type={"Web Page"}
      />
      <h2 className="main-title">My Resume</h2>
      <div className="bg-white card-box border-20">
        <h4 className="dash-title-three">Resume Attachment</h4>
        {data?.user?.cv_doc && (
          <div className="d-flex flex-row gap-3 align-items-center">
            <div className="dash-input-wrapper mb-20 col-8">
              <label htmlFor="">CV Attachment*</label>
              <div
                className="attached-file d-flex align-items-center justify-content-between mb-15 relative w-full"
                id="dropFile"
              >
                <span>{`${file?.name ? file?.name : data?.user?.cv_doc?.split("/").pop()}`}</span>


                <input
                  ref={inputRef}
                  id="uploadCV"
                  placeholder=""
                  type="file"
                  name="uploadCV"
                  className="cursor-pointer sr-only"
                  accept="application/pdf"
                  onChange={(e: any) => {
                    setProgress(0);
                    if (e.target.files[0].type === "application/pdf") {
                      setfile(e.target.files[0]);
                      const formData = new FormData();
                      formData.append("UID", userData?.UID);
                      formData.append("cvDoc", e.target.files[0]);
                      UploadCv(formData).then((res) => {
                        if (res?.status === "success") {
                          // refetchProfile();
                          Toast("success", res?.message);
                          setShowCopiedAlert(true);
                        } else {
                          Toast("error", res?.message);
                        }
                      });
                    } else {
                      Toast(
                        "error",
                        "File type not supported. Please upload a valid PDF file."
                      );
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="w-50 mb-4">
          {progress >= 100 ? (
            showCopiedAlert && (
              <span style={{ color: "#a73358" }}>Resume Uploaded</span>
            )
          ) : progress ? (
            <progress id="file" value={progress} max="100" className="w-100">
              {progress}%
            </progress>
          ) : null}
        </div>

        <div className="d-flex flex-row align-items-center ">
          <div
            className="dash-btn-one d-inline-block position-relative me-3 d-flex flex-row align-items-center gap-2 cursor-pointer videoButton"
            onClick={() => inputRef.current?.click()}
          >
            <span className="icon-plus"></span>
            {data?.user?.cv_doc ? " Update CV" : " Upload CV"}
          </div>

          <small>Upload file .pdf</small>
        </div>
      </div>
    </>
  );
};

export default memo(Resume);
