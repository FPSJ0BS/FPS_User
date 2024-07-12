import { memo } from "react";
import "./resumeOne.scss";
import Testpdf from "./testpdf";

function ResumeDesignsOne() {
  

  return (
    <div className="flex justify-center h-[100%] w-[90%]  ">

      <Testpdf />
    
    </div>
  );
}

export default memo(ResumeDesignsOne);
