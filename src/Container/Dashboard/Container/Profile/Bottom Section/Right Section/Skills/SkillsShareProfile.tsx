import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pen from "@Assets/Icons/pen.png";
import { openModalSkillsAddModal } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import SkillsIcon from "@Assets/Icons/Profile/skill.png";

function SkillsShareProfile() {
  const dispatch = useDispatch();

  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const opnSkillsPopup = () => {
    dispatch(openModalSkillsAddModal());
  };

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full skills border-gray-400 border-solid border-2">
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex gap-2  items-center">
          <div className=" flex items-center gap-2 h-[40px]">
            <img className=" w-[65px]" src={SkillsIcon} alt="Education-Icon" />
            <h6 className=" w-ful flex gap-2 cursor-default font-bold">
              Skills
            </h6>
          </div>
          
        </div>
        
      </div>
      <hr />

      <div className=" flex  gap-2 justify-start items-center mt-[20px] flex-wrap">
        {userDataArray?.skill_data?.map(({ skill, id }) => {
          return (
            <p
              key={id}
              className=" cursor-default capitalize mb-0 border-[2px] border-solid px-3 py-1 rounded-3xl border-[#ebebf2]"
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default memo(SkillsShareProfile);
