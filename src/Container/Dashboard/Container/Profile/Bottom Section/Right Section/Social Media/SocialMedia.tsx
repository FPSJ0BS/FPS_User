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

function Employment() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  console.log("userDataArray", userDataArray);

  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModalSocialMediaModal());
  };

 
 

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full social-media">
      <div className=" flex justify-between items-center gap-2  ">
        <h6 className=" w-ful flex gap-2 cursor-default font-bold">
          Social Media Links
        </h6>
        <div
          onClick={() => modalOpen()}
          className=" cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Social Media Links
        </div>
      </div>
      <hr />

      <div className=" flex flex-col  justify-start items-start mt-[20px] w-full">
        <div className=" flex  justify-start items-start gap-4 w-full">
          {userDataArray?.social_link?.linkedin && (
            <img
              className=" w-[6%] cursor-pointer"
              src={LinkedIn}
              alt="Linkedin"
            />
          )}
          {userDataArray?.social_link?.Facebook && (
            <img
              className=" w-[6%] cursor-pointer"
              src={Facebook}
              alt="Facebook"
            />
          )}
          {userDataArray?.social_link?.Github && (
            <img className=" w-[6%] cursor-pointer" src={Github} alt="Github" />
          )}
          {userDataArray?.social_link?.Instagram && (
            <img
              className=" w-[6%] cursor-pointer"
              src={Instagram}
              alt="Instagram"
            />
          )}
          {userDataArray?.social_link?.Naukri && (
            <img
              className=" w-[6%] rounded-full cursor-pointer"
              src={Naukri}
              alt="Naukri"
            />
          )}
          {userDataArray?.social_link?.Pinterest && (
            <img
              className=" w-[6%] cursor-pointer"
              src={Pinterest}
              alt="Pinterest"
            />
          )}
          {userDataArray?.social_link?.Indeed && (
            <img className=" w-[6%] cursor-pointer" src={Indeed} alt="Indeed" />
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Employment);
