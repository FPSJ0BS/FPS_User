import { useEffect, useLayoutEffect } from "react";
import LeftSection from "./Left Section/LeftSection";
import RightSection from "./Right Section/RightSection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function ResumeMain() {

  const { templateNumber } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );

  const navigate = useNavigate()

  useEffect(()=>{

    if(templateNumber === null){

      navigate('/resume-builder/choose-template')

    }
    

  },[])
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-[95%] h-[95%] flex">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default ResumeMain;
