import  { memo } from "react";

function TopSection() {
  return (
    <div className="w-full flex bg-white h-[250px] rounded-[20px] p-[15px] gap-3 ">
      <div className=" w-[20%]  h-full flex justify-center items-center">
        <div className=" bg-purple-400 w-[12vw] h-[12vw] rounded-full"></div>
      </div>

      <div className=" w-[50%] bg-green-500 h-full"></div>
      <div className=" w-[30%] bg-blue-500 h-full"></div>
    </div>
  );
}

export default memo(TopSection);
