import  { memo } from "react";
import LeftSection from "./Left Section/LeftSection";
import RightSection from "./Right Section/RightSection";

function BottomSection() {
  return <>
  
  <div className=" flex justify-end gap-3 w-full ">


    <LeftSection />

    <RightSection />

  </div>;
  </>
}

export default memo(BottomSection);
