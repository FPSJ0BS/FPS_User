import INFOVERIFIED from "@Assets/Icons/badge.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import JobsByLocation from "./InBetweenComponents/JobsByLocation";
import JobsBySubject from "./InBetweenComponents/JobsBySubject";

const ListDesignOne = ({
  jobsData,
  data,
  setJobFavourite,
  setRemoveFavourite,
  getRelativeTime,
  handleOpenInNewTab,
  Category,
  colors,
  colorsStar,
  colorsLineBreak,
  setCitySelect,
  query,
  setQuery,
}) => {
  const { userData } = useGlobalContext();

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

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 cursor-pointer place-items-center sm:place-items-stretch bg-white rounded-[20px] p-3 ">
      {jobsData?.map((item, index) => {
        const bgColor = colors[index % colors.length];
        const bgColorStar = colorsStar[index % colors.length];
        const bgColorLineBreak = colorsLineBreak[index % colors.length];
        return (
          <>
            <div
              onClick={() => handleOpenInNewTab(item, Category)}
              key={index}
              className={` hover:shadow-lg transition-shadow duration-500 ${bgColor} lg:w-full gap-[10px] min-h-[200px] rounded-[20px] py-[16px] px-[25px] flex flex-col items-center justify-center `}
            >
              <div className="  flex w-full items-center justify-between">
                <div className=" flex gap-3">
                  <p className=" text-[12px] font-semibold mb-0 text-black bg-white px-3 py-1 rounded-[30px]">
                    {getRelativeTime(item?.created_at)}
                  </p>
                  <div
                    className={` flex justify-center items-center gap-1 bg-white py-1 px-2 rounded-[30px]`}
                  >
                    <p className="text-[12px] font-semibold mb-0">4.5</p>
                    <div className="flex gap-[0.5px]">
                      <img className="w-[12px]" src={STAR} alt="star" />
                      <img className="w-[12px]" src={STAR} alt="star" />
                      <img className="w-[12px]" src={STAR} alt="star" />
                      <img className="w-[12px]" src={STAR} alt="star" />
                      <img className="w-[12px]" src={HALFSTAR} alt="star" />
                    </div>
                  </div>
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

              <div className=" flex flex-col w-full gap-1">
                <div className=" flex gap-3 items-center justify-between w-full ">
                  <div className=" flex gap-3 items-center">
                    <h2 className="text-black font-bold mb-0 text-[16px] 2xl:text-[18px]  leading-[1.2em] break-word">
                      {item?.job_title}
                    </h2>

                    <div
                      className={`flex gap-1 justify-start items-center ${bgColorStar} w-[150px] h-[30px] rounded-[30px] items-center justify-center`}
                    >
                      <img
                        className=" w-[18px]"
                        src={INFOVERIFIED}
                        alt="verified"
                      />
                      <p className="text-[14px] font-semibold mb-0">
                        Verified Institute
                      </p>
                    </div>
                  </div>

                  <p className=" text:[14px] 2xl:text-[15px] font-extrabold underline mb-0 text-[#c74f55] leading-[1.2em]">{`${item?.salary_unit} Max.`}</p>
                </div>
                <div className=" flex items-center w-full">
                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1" />
                    </svg>
                    {data === "Prepaid" && userData?.UID !== undefined ? (
                      <h3 className="font-medium mb-0 text-[14px] 2xl:text-[15px] uppercase leading-[1.4em] line-clamp-1">
                        {item?.company_name?.length > 45
                          ? `${item.company_name.substring(0, 45)}...`
                          : item?.company_name}
                      </h3>
                    ) : item?.show_all === 1 ? (
                      <h3 className="font-medium  mb-0 text-[14px] 2xl:text-[15px] uppercase leading-[1.4em] line-clamp-1 ">
                        {item?.company_name}
                      </h3>
                    ) : (
                      <h3 className="font-medium  mb-0 text-[14px] 2xl:text-[15px] uppercase leading-[1.4em] line-clamp-1 ">
                        {item?.category_title}
                      </h3>
                    )}
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1" />
                    </svg>
                    <h3 className="  font-medium mb-0 text-[14px] 2xl:text-[15px]  leading-[1.4em] line-clamp-1">
                      {item?.state}, {item?.city}
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className={` border-[1px] border-solid ${bgColorLineBreak} w-full`}
              ></div>

              <div className=" w-full">
                <p className=" mb-0 line-clamp-2 font-medium text-[14px]">
                  {removeSpecificTextAndTags(item?.job_description)}
                </p>
              </div>

              <div className=" flex items-center w-full justify-between">
                <div className=" flex  flex-wrap gap-2">
                  {item?.min_experience.toString() && (
                    <div className=" text-[14px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.min_experience.toString()} Years Min
                    </div>
                  )}

                  {item?.job_level && (
                    <div className=" capitalize text-[14px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_level}
                    </div>
                  )}

                  {item?.job_type && (
                    <div className=" text-[14px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_type}
                    </div>
                  )}

                  {item?.selection_process && (
                    <div className=" text-[14px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.selection_process}
                    </div>
                  )}
                </div>
                <div className=" bg-black flex justify-center items-center text-[14px] text-white rounded-[30px] px-3 h-[25px] ">
                  Apply
                </div>
              </div>
            </div>
            {(index + 1) % 6 === 0 && (
              <JobsByLocation setCitySelect={setCitySelect} />
            )}
            {(index + 1) % 4 === 0 && (
              <JobsBySubject query={query} setQuery={setQuery} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default ListDesignOne;
