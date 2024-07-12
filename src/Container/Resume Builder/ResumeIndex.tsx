import {  memo } from "react";
import { Outlet } from "react-router-dom";
import "./ResumeBuilder.scss"

function ResumeIndex() {
  
  return (
    <div className="h-[100%] w-full ">
      <Outlet />
    </div>
  );
}

export default memo(ResumeIndex);
