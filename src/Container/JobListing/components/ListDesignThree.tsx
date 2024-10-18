import INFOVERIFIED from "@Assets/approved.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useDispatch } from "react-redux";
import { openModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";

const ListDesignThree = ({
  jobsData,
  data,
  setJobFavourite,
  setRemoveFavourite,
  getRelativeTime,
  handleOpenInNewTab,
  Category,
  colors,
  setShowSidebar,
}) => {
  const { userData } = useGlobalContext();
const dispatch = useDispatch();
  const removeSpecificTextAndTags = (htmlContent) => {
    let cleanedContent = htmlContent.replace(
      /<h3>Job Description:\s*(.*)<\/h3>/i,
      "<h3>$1</h3>"
    );
    cleanedContent = cleanedContent.replace(
      /<p><strong>Job Responsibilities:<\/strong><\/p>\s*<ul>.*<\/ul>/is,
      ""
    );
    const noHtmlTags = cleanedContent.replace(/<\/?[^>]+(>|$)/g, "");
    return noHtmlTags.trim();
  };

  const openingModal = async (applyID) => {
    await dispatch(
      updateAppliedJobValues({
        applyID,
      })
    );
    await dispatch(openModal());
  };
  return (
    <div  className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 cursor-pointer place-items-center sm:place-items-stretch bg-[#f5f5f5]  ">
      <div className="  lg:hidden flex w-full  justify-start pl-3  ">
        <svg
          onClick={() => setShowSidebar(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu text-black cursor-pointer "
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
      {jobsData?.map((item, index) => {
        const bgColor = colors[index % colors.length];
        return (
          <div
            onClick={() => handleOpenInNewTab(item, Category)}
            key={index}
            className="  w-full gap-2 min-h-[300px]  bg-white rounded-[20px] p-[10px] flex flex-col items-start justify-start shadow-md border-1 border-solid border-[#e1e1df]"
          >
            <div className={`  h-[75%] rounded-2xl ${bgColor} p-[10px] w-full`}>
              <div className=" flex flex-col gap-3 w-full">
                <div className=" flex justify-between items-center ">
                  <div>
                    <p className=" text-[12px] font-semibold mb-0 text-black bg-white px-3 py-1 rounded-[30px]">
                      {getRelativeTime(item?.created_at)}
                    </p>
                  </div>
                  {userData?.UID !== undefined && (
                    <div
                      onClick={(e) =>
                        item?.favourite === "1"
                          ? setRemoveFavourite(e, item?.jobID)
                          : setJobFavourite(e, item?.jobID)
                      }
                      className=" bg-white p-[6px] rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={item?.favourite === "1" ? "black" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`  lucide lucide-bookmark  ${
                          item?.favourite === "1" ? "text-black" : "text-black"
                        }  cursor-pointer`}
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className=" flex flex-col w-full">
                  <h2 className="text-black font-bold mb-0 text-[15px] uppercase leading-[1.4em] break-word">
                    {item?.job_title}
                  </h2>

                  {data === "Prepaid" &&
                  userData?.UID !== undefined ? (
                    <h2 className="text-semibold font-bold mb-0 text-[12px] uppercase leading-[1.4em] line-clamp-2">
                      {item?.company_name}
                    </h2>
                  ) : item?.show_all === 1 ? (
                    <h2 className="text-semibold font-bold mb-0 text-[12px] uppercase leading-[1.4em] line-clamp-2">
                      {item?.company_name}
                    </h2>
                  ) : (
                    <h2 className="text-semibold font-bold mb-0 text-[12px] uppercase leading-[1.4em] line-clamp-2">
                      {item?.category_title}
                    </h2>
                  )}
                </div>

                <div className=" flex  flex-wrap gap-2">
                  {item?.min_experience.toString() && (
                    <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.min_experience.toString()} Years Min
                    </div>
                  )}

                  {item?.job_level && (
                    <div className=" capitalize text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_level}
                    </div>
                  )}

                  {item?.job_type && (
                    <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_type}
                    </div>
                  )}

                  {item?.selection_process && (
                    <div className=" text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.selection_process}
                    </div>
                  )}
                </div>

                <div>
                  <p className=" mb-0 line-clamp-2 font-medium text-[12px]">
                    {removeSpecificTextAndTags(item?.job_description)}
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-full flex justify-between items-center pt-2">
              <div>
                <p className=" text-[12px] font-semibold mb-0 text-black">{`${item?.salary_unit} Max.`}</p>
                <p className=" text-[12px] font-semibold mb-0 text-gray-500">
                  {item?.state}, {item?.city}
                </p>
              </div>

              <div className="flex flex-col gap-2 items-center">
                  {item?.applied_job && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); 
                        openingModal(item?.applyID);
                      }}
                      className="w-[120px] font-semibold bg-[#335c67] flex justify-center items-center text-[14px] text-white rounded-[30px]  h-[25px]"
                    >
                      Track Status
                    </div>
                  )}
                  <div className={`${item?.applied_job ? "w-[120px] " : "px-3"} font-semibold bg-black flex justify-center items-center text-[14px] text-white rounded-[30px]  h-[25px] cursor-default`}>
                    {item?.applied_job ? item?.applied_job : "Apply"}
                  </div>
                </div>
            </div>

            <div className=" border-[1px] border-solid border-gray-300 w-full"></div>

            <div className="  flex w-full  justify-between items-center ">
              <div className="flex gap-1 justify-start items-center ">
                <img className=" w-[22px]" src={INFOVERIFIED} alt="verified" />
                <p className="text-[13px] font-semibold mb-0">
                  Verified Institute
                </p>
              </div>
              <div className=" flex justify-center items-center gap-1">
                <p className="text-[13px] font-semibold mb-0">4.5</p>
                <div className="flex gap-[0.5px]">
                  <img className="w-[12px]" src={STAR} alt="star" />
                  <img className="w-[12px]" src={STAR} alt="star" />
                  <img className="w-[12px]" src={STAR} alt="star" />
                  <img className="w-[12px]" src={STAR} alt="star" />
                  <img className="w-[12px]" src={HALFSTAR} alt="star" />
                </div>
              </div>
            </div>

            
          </div>
          
        );
      })}
    </div>
  );
};

export default ListDesignThree;
