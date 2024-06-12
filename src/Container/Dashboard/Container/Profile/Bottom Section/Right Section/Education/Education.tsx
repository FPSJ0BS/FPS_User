import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";

function Education() {
  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full">
      <div className=" flex justify-between items-center gap-2  ">
        <h6 className=" w-ful flex gap-2 cursor-default font-bold">
          Education{" "}
        </h6>
        <div className=" cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center">Add Education</div>

        
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px]">
        <div className=" flex items-center gap-2">
          <button className=" cursor-pointer text-[#22223b] font-bold">
            Doctorate/PhD
          </button>
          <img className="w-[16px] cursor-pointer " src={Pen} alt="pen" />

          <p></p>
        </div>

        <div className=" flex items-center gap-2">
          <button className=" cursor-pointer text-[#22223b] font-bold">
            Add masters/post-graduation
          </button>
          <img className="w-[16px] cursor-pointer " src={Pen} alt="pen" />
        </div>

        <div className=" flex items-center gap-2">
          <button className=" cursor-pointer text-[#22223b] font-bold">
            Add Graduation/Diploma
          </button>
          <img className="w-[16px] cursor-pointer " src={Pen} alt="pen" />
        </div>

        <div className=" flex items-center gap-2">
          <button className=" cursor-pointer text-[#22223b] font-bold">
            Add class XII
          </button>
          <img className="w-[16px] cursor-pointer " src={Pen} alt="pen" />
        </div>

        <div className=" flex items-center gap-2">
          <button className=" cursor-pointer text-[#22223b] font-bold">
            Add class X
          </button>
          <img className="w-[16px] cursor-pointer " src={Pen} alt="pen" />
        </div>
      </div>
    </div>
  );
}

export default memo(Education);
