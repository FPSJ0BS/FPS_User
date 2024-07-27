import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  addSkill,
  closeModalEducationEditModal,
  closeModalEducationModal,
  closeModalSkillsAddModal,
  deleteSkill,
  editEducationDataJobValues,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import {
  getEducationDetailsSingle,
  getSelectedListSkill,
  postSubmitEducationDetails,
  postSubmitEducationEditDetails,
  postSubmitSkillsData,
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
import AddSkills from "./inputs/skills/addSkills";

function SkillsPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);
  const [loaderState, setLoaderState] = useState(false);

  const { skillsDataArray, skillsDataAddArray, refetchProfile } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );



  const popupCloseFunc = async () => {
    await dispatch(closeModalSkillsAddModal());
  };

  const deletSkillFunc = (id) => {
    dispatch(deleteSkill(id));
  };



  const handleSubmitSkill = async () => {
  
    const commaSkills = await getCommaSeparatedSkillIds();
 

    try {
      setButtonLoad(true);
      const res = await postSubmitSkillsData([{
        faculityID: userId,
        skill: commaSkills,
      }]);

      if (res?.data?.status) {
        await popupCloseFunc();
        await Toast("success", res?.data?.message);
        await setButtonLoad(false);
    
          dispatch(toggleRefetchProfile())

        
       
      } else {
        popupCloseFunc;
        Toast("error", res?.data?.message);
        setButtonLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCommaSeparatedSkillIds = () => {
    return skillsDataAddArray
      ?.filter((item) => item.active === 1)
      ?.map((skill) => skill.skillId)
      .join(",");
  };

  const handleAddDataToSkillArray = async (skill) => {
    const foundItem = skillsDataAddArray?.find(
      (item) => item.skillId === skill
    );
    const skillId = foundItem?.skillId;

    const newSkill = { skillId };
    dispatch(addSkill(newSkill));
  };





  const [selectedSkill, setSelectedSkill] = useState([]);


  const selectList = async () => {
    try {
      const res = await getSelectedListSkill(userId);

      if (res?.data?.status) {
        const skill = await res?.data?.data
        await setSelectedSkill(skill)
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-full md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Skills
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full h-full pl-[30px] pr-[10px] py-2 md:pl-[50px] md:pr-[50px] md:mt-[20px]">
          <div className=" h-[80%] md:h-[85%] w-full border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain">


            <div
              className={` w-full  flex gap-3 flex-wrap ${
                skillsDataAddArray.length > 0 ? "mb-[30px] " : ""
              } `}
            >
              {skillsDataAddArray
                ?.filter((item) => item.active === 1)?.map(({ skill, id, skillId }) => {
                  return (
                    <div
                      key={id}
                      className=" flex gap-2 items-center justify-center bg-[#1d3557] text-white px-3 rounded-[30px] cursor-default"
                    >
                      <p className=" capitalize mb-0 leading-[1.2em] py-2">{skill}</p>
                      <svg
                        onClick={() => deletSkillFunc(skillId)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x cursor-pointer"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                  );
                })}


                
            </div>

            <AddSkills selectList={selectList}/>

            <div className={` w-full flex gap-3  flex-wrap mt-30  handleScrollbarMain`}>
              {skillsDataAddArray
                ?.filter((item) => item.active === 0)
                ?.map(({ skill, skillId }) => {
                  return (
                    <div
                      onClick={() => handleAddDataToSkillArray(skillId)}
                      key={skillId}
                      className="   flex gap-2  items-center justify-center bg-[#e7e7f0] text-black px-3 rounded-[30px] cursor-pointer hover:animate-pulse  "
                    >
                      <p className=" capitalize mb-0 leading-[1.2em] py-2 ">{skill}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus "
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </div>
                  );
                })}
            </div>
          </div>

          <button
            onClick={() => handleSubmitSkill()}
            type="submit"
            className=" w-full my-[15px] md:w-[20%]  p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
          >
            {buttonLoad ? "Submitting..." : "Save Skills"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillsPopup;
