import React from "react";
import PHONEIMAGE from "@Assets/Icons/32768014_responsive_device_64 1.png";

const GetAppNew = () => {
  return (
    <div className=" flex justify-center items-center h-[350px] w-full px-[100px] mt-[100px] mb-[-38px]">
      <div className=" justify-center gap-3 flex flex-col bg-[#000] shadow-lg rounded-lg w-[60%] h-[80%]  border-solid border-2 border-white p-[50px]">
        <h2 className=" text-white text-[40px] font-semibold ">
          Download The Tallento App
        </h2>
        <p className=" mb-0 text-[#b3b3b3] text-[15px]">
          Boost your hiring accuracy by 65% with structured digital interviews.
          Experience the
          <br /> power of organized and consistent assessments, ensuring you
          select the best <br /> candidates for your team every time
        </p>
        <button className=" w-[30%] bg-white py-2 rounded font-semibold">Download the App Now!</button>
      </div>
      <img
        src={PHONEIMAGE}
        className=" ml-[-150px] mt-[-100px] w-[700px]"
        alt="phoneimage"
      />
      d
    </div>
  );
};

export default GetAppNew;
