import { memo } from "react";
import {  useSelector } from "react-redux";

import CertificateIcon from "@Assets/Icons/Profile/certifcate.png";

function CertificateShareprofile() {
 
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

 
  const educationData = userDataArray?.education_data;


 

 


  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full certificates border-gray-400 border-solid border-2">
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex gap-2 items-start">
          <div className=" flex items-center gap-2 h-[40px]">
            <img
              className=" w-[65px]"
              src={CertificateIcon}
              alt="Education-Icon"
            />
            <h6 className=" w-ful flex gap-2 cursor-default font-bold">
              Certificate
            </h6>
          </div>
        </div>
        
      </div>
      <hr />

      <div className=" flex  gap-2 justify-start items-center  flex-wrap">
        <div className=" flex flex-col w-full  items-start mt-[20px] gap-3">
          {userDataArray?.certificate_data?.map(
            ({ title, description}, index) => {
              return (
                <div key={index} className=" flex w-full justify-between ">
                  <div className=" w-[80%]">

                    <div className=" flex gap-2 items-center">

                      <p className=" mb-0 font-semibold capitalize text-[16px]">
                        {title}
                        <span className=" normal-case">
                          {/* .{getFileExtension(certificate_file)} */}
                        </span>
                      </p>
                     
                    </div>
                    
                    <p className="mb-0 text-[13px]">{description}</p>

                  </div>

                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CertificateShareprofile);
