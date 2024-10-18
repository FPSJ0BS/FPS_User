import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";
import { useDispatch, useSelector } from "react-redux";
import { openModalUserDetailsModal } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";

function TopSectionShareProfile() {
  const dispatch = useDispatch();

  const { userDataArray } = useSelector(
    (state) => state.myProfileEducationSlice
  );

  function formatDate(inputDate) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateObj = new Date(inputDate);

    // Extract date components
    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();

    // Format day with leading zero if needed
    const formattedDay = (day < 10 ? "0" : "") + day;

    return `${formattedDay}${month} , ${year}`;
  }

  const openEditPopup = async () => {
    dispatch(openModalUserDetailsModal());
  };
  return (
    <div className="w-full flex bg-white border-black border-solid border-2 h-[250px] rounded-[20px] p-[15px] gap-3 items-start justify-start ">
     
      <div className=" w-[20%]  h-full flex justify-center items-center">
        <div className="  w-[12vw] h-[12vw] rounded-full flex justify-center items-center">
          <img
            className="w-[12vw] h-[12vw] border-1 border-solid border-gray-300 rounded-full"
            src={userDataArray?.image}
            alt="profileiamge"
          />
        </div>
      </div>

      <div className=" w-[50%] h-full py-4 ">
        <div className=" flex items-center gap-4">
          <h4 className=" text-[20px] font-semibold capitalize">{userDataArray?.name}</h4>
          
        </div>

        {/* <div className=" flex gap-2">
          <p className=" mb-0 font-semibold text-[#484d80]">Current Position</p>
          <p className=" mb-0 font-semibold text-[#484d80]">PHP Developer</p>
        </div> */}

        <div className=" flex justify-between items-center">
          <div className=" flex gap-2">
            <p className=" mb-0 font-semibold text-[#484d80]">
              Currently Working -{" "}
            </p>
            <p className=" mb-0 font-semibold text-[#484d80]">
              {userDataArray?.current_employer
                ? userDataArray?.current_employer
                : "Not Provided"}
            </p>
          </div>
          <p className=" mb-0 font-semibold ">
            <span className=" font-normal">Profile last updated -</span>{" "}
            {formatDate(userDataArray?.updated_at)}
          </p>
        </div>

        <hr />

        <div className=" w-full flex mt-[20px]">
          <div className=" w-[49.5%] flex flex-col gap-2">
            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.city ? userDataArray?.city : "Not Provided"},{" "}
                {userDataArray?.state}
              </p>
            </div>

            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase-business"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.experience
                  ? userDataArray?.experience
                  : "Not Provided"}
              </p>
            </div>

            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-indian-rupee"
              >
                <path d="M6 3h12" />
                <path d="M6 8h12" />
                <path d="m6 13 8.5 8" />
                <path d="M6 13h3" />
                <path d="M9 13c6.667 0 6.667-10 0-10" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.salary ? userDataArray?.salary : "Not Provided"}
              </p>
            </div>
          </div>

          <div className="w-[1%] border-l-[1.5px] border-gray-300 border-solid h-[100px]"></div>

          <div className=" w-[49.5%] flex flex-col gap-2 pl-5">
            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.mobile ? userDataArray?.mobile : "Not Provided"}
              </p>
            </div>

            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.email ? userDataArray?.email : "Not Provided"}
              </p>
            </div>

            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-check-2"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                <path d="M3 10h18" />
                <path d="m16 20 2 2 4-4" />
              </svg>

              <p className=" mb-0 font-semibold ">
                {userDataArray?.duration_notice_period
                  ? userDataArray?.duration_notice_period
                  : "Notice Period Not Provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TopSectionShareProfile);
