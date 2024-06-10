import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import Download from "@Assets/Icons/file.png";
import Delete from "@Assets/Icons/delete.png";

function Resume() {
  return (
    <div className="bg-white rounded-[20px]  p-[20px] h-[200px] w-full">
      <div className=" flex justify-start items-center gap-2  ">
        <h6 className=" w-ful flex gap-2 cursor-default">Resume </h6>
        <img className="w-[20px] cursor-pointer " src={Pen} alt="pen" />
      </div>
      <hr />

      <div className=" flex justify-between items-center mt-[20px]">
        <div className=" ">
          <p className=" mb-0 font-semibold">Shubham_SONI_resume.pdf</p>
          <p className=" mb-0 text-[13px]">Uploaded on Jun 06, 2024</p>
        </div>
        <div className=" flex items-center gap-3">
          <img className="w-[30px] cursor-pointer " src={Download} alt="pen" />
          <img className="w-[30px] cursor-pointer " src={Delete} alt="pen" />
        </div>
      </div>
    </div>
  );
}

export default memo(Resume);
