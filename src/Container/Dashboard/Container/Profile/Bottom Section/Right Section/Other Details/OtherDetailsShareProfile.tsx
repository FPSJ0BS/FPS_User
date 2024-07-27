import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import { openModalOtherDetailsModal } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { useDispatch, useSelector } from "react-redux";

function OtherDetailsShareProfile() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModalOtherDetailsModal());
  };

  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full career-preference other-details border-gray-400 border-solid border-2">

      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex items-center gap-2 pb-3">
          <h6 className=" w-ful flex  cursor-default font-bold pt-2">
            Other Details
          </h6>
        </div>
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px] w-full">
        <div className=" flex flex-col justify-start items-start mb-2 gap-2 w-full">
          <div className=" flex flex-col justify-start items-start w-full">
            <p className=" text-gray-400 font-bold mb-0 capitalize w-full">
              Bio
            </p>
            <div className=" flex gap-2">
              <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                {userDataArray?.other_details?.bio
                  ? userDataArray?.other_details?.bio
                  : "Not Provided"}
                
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-start items-start w-full">
            <p className=" text-gray-400 font-bold mb-0 capitalize w-full">
              Address
            </p>
            <div className=" flex gap-2">
              <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                {userDataArray?.other_details?.address
                  ? userDataArray?.other_details?.address
                  : "Not Provided"}
              </p>
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Date of Birth
              </p>
              <div className=" flex gap-2">
                <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                  {userDataArray?.other_details?.dob
                    ? userDataArray?.other_details?.dob
                    : "Not Provided"}
                </p>
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Gender
              </p>
              <div className=" flex gap-2">
                <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                  {userDataArray?.other_details?.gender
                    ? userDataArray?.other_details?.gender
                    : "Not Provided"}
                </p>
              </div>
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Home Town
              </p>
              <div className=" flex gap-2">
                <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                  {userDataArray?.other_details?.hometown
                    ? userDataArray?.other_details?.hometown
                    : "Not Provided"}
                </p>
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start w-[22%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Pin Code
              </p>
              <div className=" flex gap-2">
                <p className=" capitalize cursor-pointer text-black font-semibold mb-0">
                  {userDataArray?.other_details?.pincode
                    ? userDataArray?.other_details?.pincode
                    : "Not Provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OtherDetailsShareProfile);
