import { memo, useState } from "react";
import Pen from "@Assets/Icons/pen.png";
import { useDispatch, useSelector } from "react-redux";
import { openModalUserDetailsModal } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import dummyimage from "@Assets/Icons/Profile/user.png";
import defaultBanner from "@Assets/1706638372435.jpeg";
import { Toast } from "@Utils/Toast";
import { toggleRefetchProfile } from "@/Redux/Resume Builder/resumeBuilderSlice";
import { postOtherDetails } from "@/api/api";
import { useGlobalContext } from "@Context/GlobalContextProvider";

function TopSection() {
  const dispatch = useDispatch();
  const { userData } = useGlobalContext();
  const userId = userData?.UID;

  const { userDataArray } = useSelector(
    (state) => state.myProfileEducationSlice
  );

  const banner = userDataArray?.other_details?.banner
    ? userDataArray.other_details.banner
    : defaultBanner;

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

  const [backgroundImage, setBackgroundImage] = useState(
    "@Assets/1706638372435.jpeg"
  );

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const formdata = new FormData();
    formdata.append("banner", file);
    formdata.append("facultyID", userId);

    try {
      const res = await postOtherDetails(formdata);
      if (res?.data?.status) {
        window.location.reload();
        Toast("success", "Banner uploaded");
      } else {
        Toast("error", "Banner failed to upload");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-5 md:py-0 w-full  bg-white min-h-[250px] rounded-[20px] p-[15px] gap-3 col">
      <div
        className="h-[200px] rounded-[20px] bg-cover bg-no-repeat relative "
        style={{ backgroundImage: `url(${banner})` }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Drag-and-drop or click to upload */}
        <label className="relative cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full absolute top-3 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            </svg>
          </div>
        </label>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className=" w-[100%] md:w-[30%]  h-full flex justify-center items-center">
          <img
            className=" w-[100px] h-[100px] md:w-[200px] md:h-[200px] border-1 border-solid border-gray-300 rounded-full"
            src={userDataArray?.image ? userDataArray?.image : dummyimage}
            alt="profileiamge"
          />
        </div>

        <div className=" w-[100%] md:w-[70%] h-full py-4 ">
          <div className=" flex items-center gap-4">
            <h4 className=" font-semibold capitalize">{userDataArray?.name}</h4>
            <img
              onClick={() => openEditPopup()}
              className="w-[20px] hover:w-[22px] cursor-pointer "
              src={Pen}
              alt="pen"
            />
          </div>

          {/* <div className=" flex gap-2">
          <p className=" mb-0 font-semibold text-[#484d80]">Current Position</p>
          <p className=" mb-0 font-semibold text-[#484d80]">PHP Developer</p>
        </div> */}

          <div className=" flex flex-col md:flex-row justify-between items-start md:justify-between">
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
              {userDataArray?.updated_at
                ? formatDate(userDataArray?.updated_at)
                : "not updated yet"}
            </p>
          </div>

          <hr />

          <div className=" w-full flex  mt-[20px]">
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
                  {userDataArray?.city ? userDataArray?.city : "Not Provided"}{" "}
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
                  {userDataArray?.salary
                    ? userDataArray?.salary
                    : "Not Provided"}
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
                  {userDataArray?.mobile
                    ? userDataArray?.mobile
                    : "Not Provided"}
                </p>
              </div>

              <div className=" flex gap-2 items-center w-full">
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
                  className="lucide lucide-mail w-[30%] md:w-auto"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                <p className=" mb-0 font-semibold break-all leading-[1.2em] ">
                  {userDataArray?.email ? userDataArray?.email : "Not Provided"}
                </p>
              </div>

              <div className=" flex gap-2 items-center w-full">
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
                  className="lucide lucide-calendar-check-2 w-[30%] md:w-auto"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <path d="M3 10h18" />
                  <path d="m16 20 2 2 4-4" />
                </svg>

                <p className=" mb-0 font-semibold leading-[1.2em]">
                  {userDataArray?.duration_notice_period
                    ? userDataArray?.duration_notice_period
                    : "Notice Period Not Provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TopSection);
