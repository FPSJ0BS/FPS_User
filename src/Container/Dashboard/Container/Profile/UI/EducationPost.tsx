import useJobAppliedStatusTrackData from "@Hooks/Queries/useJobAppliedListTrackData";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import Checked from "@Assets/Icons/double-check (1).png";
import Process from "@Assets/Icons/rec.png";
import Close from "@Assets/Icons/remove.png";
import Success from "@Assets/gif/success.gif";
import Cancel from "@Assets/gif/cancel.gif";
import { useEffect, useState } from "react";
import { getTrackingData } from "@/api/api";
import { RootState } from "@/store/store";

function EducationPost() {
  const dispatch = useDispatch();
  const { appliedJobValues } = useSelector((state: RootState) => state.appliedJobSlice);

  // const [loading, setLoading] = useState(false);

  // Use React Query's useQuery hook to fetch data
  const {
    data: jobAppliedStatus,
    isSuccess,

  } = useJobAppliedStatusTrackData(appliedJobValues?.applyID);
  console.log(jobAppliedStatus);
  const [jobTrackData, setJobTrackData] = useState([]);
  // console.log("job applied data", jobAppliedStatus?.applieddata);

  useEffect(() => {
    // console.log('id ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' ,appliedJobValues?.applyID);
    const fetch = async () => {
      try {
        const res = await getTrackingData(appliedJobValues?.applyID);
        if (res?.data?.status) {
          console.log(res?.data?.applieddata);
          setJobTrackData(res?.data?.applieddata);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [appliedJobValues?.applyID]);

  function formatDateTime(dateTimeString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateTimeString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const formattedDateTime = `${month} ${day}, ${year} - ${("0" + hours).slice(
      -2
    )}:${minutes} ${ampm}`;
    return formattedDateTime;
  }

  const popupCLoseFunc = async () => {
    await dispatch(
      updateAppliedJobValues({
        applyID: "",
      })
    );
    await dispatch(closeModal());
  };

  return (
    <div className="TrackPopup  h-full w-[65vw]  right-0 z-50 flex justify-end fixed ">
      {/* <X
        onClick={() => dispatch(closeModal())}
        className=" cursor-pointer absolute left-0 top-[30px] text-[100px] text-white bg-black rounded-full "
      /> */}
      <img
        onClick={() => popupCLoseFunc()}
        className="cursor-pointer absolute sm:left-0 top-[30px] "
        src={Close}
        alt="close"
      />

      <div className=" bg-white h-full w-[90%] rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="  font-bold underline border-solid border-b-[1px] ">
          Education
        </h4>

        <div className=" w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>

       
          <div className="  w-full overflow-y-auto px-5 py-4">
            
          </div>
        
      </div>
    </div>
  );
}

export default EducationPost;
