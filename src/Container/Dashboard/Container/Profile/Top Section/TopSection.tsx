import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";

function TopSection() {
  return (
    <div className="w-full flex bg-white h-[250px] rounded-[20px] p-[15px] gap-3 ">
      <div className=" w-[20%]  h-full flex justify-center items-center">
        <div className=" bg-black w-[12vw] h-[12vw] rounded-full"></div>
      </div>

      <div className=" w-[40%] h-full py-4 ">
        <div className=" flex items-center gap-4">
          <h4 className=" font-semibold">Shivam Sharma</h4>
          <img className="w-[20px] hover:w-[22px] cursor-pointer " src={Pen} alt="pen" />
        </div>
        <p className=" mb-0 font-semibold text-[#484d80]">PHP Developer</p>
        <div className=" flex justify-between items-center">
          <p className=" mb-0 font-semibold text-[#484d80]">at FPS JOBS</p>
          <p className=" mb-0 font-semibold "><span className=" font-normal">Profile last updated -</span> 06Jun , 2024</p>
        </div>
        <hr />

        <div className=" w-full flex">

          <div className=" w-[49.5%]">

            

          </div>
          <div className="w-[1%] border-l-[1.5px] border-gray-300 border-solid h-[100px]"></div>

          <div className="w-[49.5%]"></div>

      </div>
      </div>

      

      <div className=" w-[40%] bg-black h-full"></div>
    </div>
  );
}

export default memo(TopSection);
