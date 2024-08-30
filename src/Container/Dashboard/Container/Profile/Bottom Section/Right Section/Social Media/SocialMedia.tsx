import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import {
  editEducationDataJobValues,
  editEmploymentDataJobValues,
  openModalEmploymentDeleteModal,
  openModalEmploymentEditModal,
  openModalSocialMediaModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useDispatch, useSelector } from "react-redux";
import Facebook from "@Assets/Icons/facebook.png";
import Github from "@Assets/Icons/github.png";
import Indeed from "@Assets/Icons/Indeed.png";
import Instagram from "@Assets/Icons/instagram.png";
import Naukri from "@Assets/Icons/naukri.png";
import Pinterest from "@Assets/Icons/pinterest.png";
import LinkedIn from "@Assets/Icons/linkedin.png";

function SocialMedia() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const iconMapping = {
    linkedin: LinkedIn,
    Facebook: Facebook,
    Github: Github,
    Instagram: Instagram,
    Naukri: Naukri,
    Pinterest: Pinterest,
    Indeed: Indeed,
  };

  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModalSocialMediaModal());
  };

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full social-media">
      <div className=" flex justify-between items-center gap-2  ">
        <h6 className="text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
          Social Media Links
        </h6>
        <div
          onClick={() => modalOpen()}
          className="text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Social Media Links
        </div>
      </div>
      <hr />

      <div className=" flex flex-col  justify-start items-start mt-[20px] w-full">
        <div className=" flex  justify-start items-start gap-4 w-full">
          {userDataArray?.social_link?.map((link, index) => {
            const IconSrc = iconMapping[link.platform];
            return (
              IconSrc && (
                <img
                  key={index}
                  className="w-[6%] cursor-pointer rounded-[50%]"
                  src={IconSrc}
                  alt={link.platform}
                  onClick={() => window.open(link.value, "_blank")}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(SocialMedia);
