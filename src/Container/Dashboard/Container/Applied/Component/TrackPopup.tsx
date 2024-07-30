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
import Loader from "@Container/Dashboard/Loader/laoder";
import './Trackpopup.scss'


function TrackPopup() {
  const dispatch = useDispatch();
  const { appliedJobValues } = useSelector((state: RootState) => state.appliedJobSlice);

  // const [loading, setLoading] = useState(false);

  // Use React Query's useQuery hook to fetch data
 

  const [jobTrackData, setJobTrackData] = useState([]);
  const [dataLoad, setDataLoad] = useState(true)

  useEffect(() => {

    const fetch = async () => {
      try {
        const res = await getTrackingData(appliedJobValues?.applyID);
        if (res?.data?.status) {
          setDataLoad(false)
        
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
    hours = hours ? hours : 12; 
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
    <div className="TrackPopup  h-full w-[400px]  right-0  flex justify-end fixed ">
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
        <h4 className=" text-[25px] font-bold underline border-solid border-b-[1px] ">
          Track Application
        </h4>

        <div className=" w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-10"></div>

       
          <div className=" h-full  w-full overflow-y-auto px-5 py-4">
            {dataLoad ? (<div className=" w-full h-full flex justify-center items-center"><Loader /></div>) :
              (jobTrackData.map((item:any, index) => {
                let iconSrc = Process; 

                if (item?.completed  === 1) {
                  if (item?.label === "Hired") {
                    iconSrc = Success;
                  } else if (item?.label === "Rejected") {
                    iconSrc = Cancel; 
                  } else {
                    iconSrc = Checked;
                  }
                }

                return (
                  <div className="flex flex-col" key={index}>
                    
                    <div>
                      <div className="h-[5vh] flex flex-col justify-start items-start gap-2">
                        <div className="flex justify-start items-start gap-3">
                          <img
                            className={`${
                              item?.label === "Hired" ||
                              item?.label === "Rejected"
                                ? "w-[40px]"
                                : "w-[30px]"
                            } `}
                            src={iconSrc}
                            alt={item?.completed === 1 ? "checked" : "process"}
                          />
                          <h6 className={`${ " font-semibold text-[16px] "}`}>
                            {item?.label} <br />{" "}
                            <p className="text-[13px]">
                              {item?.created_at
                                ? formatDateTime(item?.created_at)
                                : ""}
                            </p>{" "}
                          </h6>
                        </div>
                      </div>

                      {index !== jobTrackData.length - 1 && (
                        <div
                          className={`my-2 h-[50px] border-r-2 ${
                            item?.completed === 1
                              ? "border-solid"
                              : "border-dashed"
                          }  w-[6%]`}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              }))}
          </div>
        
      </div>
    </div>
  );
}

export default TrackPopup;
