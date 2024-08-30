import INFOVERIFIED from "@Assets/approved.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { useGlobalContext } from "@Context/GlobalContextProvider";

const ListDesignTwo = ({
  jobLists,
  handleOpenInNewTab,
  getRelativeTime,
  userData,
  setRemoveFavourite,
  setJobFavourite,
  data,
  Category,
  removeSpecificTextAndTags,
  openingModal,
}) => {
  const colors = [
    "bg-[#fae1cd]",
    "bg-[#daf5ed]",
    "bg-[#e0daf7]",
    "bg-[#e2f2fd]",
    "bg-[#f7e2f3]",
    "bg-[#eceef3]",
  ];

  return (
    <div className="grid grid-cols-1 gap-4 ml-0 place-items-center sm:place-items-stretch">
      {jobLists?.map((item, index) => {
        const bgColor = colors[index % colors.length];

        return (
          <div
            key={index}
            className="w-[90vw] gap-2 min-h-[300px] bg-white rounded-[20px] p-[10px] flex flex-col items-start justify-start shadow-md border-1 border-solid border-[#e1e1df]"
          >
            <div
              onClick={() => handleOpenInNewTab(item, Category)}
              className={`cursor-pointer h-[75%] rounded-2xl ${bgColor} p-[10px]`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row-reverse">
                  <div className="w-full flex justify-end items-center gap-2">
                    <div className="flex w-full justify-end">
                      <p className="text-[12px] font-semibold mb-0 text-black bg-white px-3 py-1 rounded-[30px]">
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
                        className="bg-white p-[6px] rounded-full"
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
                          className="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex w-full items-center gap-2">
                    <h2 className="text-black font-bold mb-0 text-[18px] uppercase leading-[1.4em] line-clamp-1">
                      {item?.job_title}
                    </h2>
                    {data?.data?.pack_type === "Prepaid" &&
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
                </div>

                <div className="flex flex-wrap gap-2">
                  {item?.min_experience.toString() && (
                    <div className="text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.min_experience.toString()} Years Min
                    </div>
                  )}
                  {item?.job_level && (
                    <div className="capitalize text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_level}
                    </div>
                  )}
                  {item?.job_type && (
                    <div className="text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.job_type}
                    </div>
                  )}
                  {item?.selection_process && (
                    <div className="text-[12px] font-semibold mb-0 text-black border-solid border-[#999393] border-1 px-2 py-[4px] rounded-[30px]">
                      {item?.selection_process}
                    </div>
                  )}
                </div>

                <div>
                  <p className="mb-0 line-clamp-4 font-medium text-[12px]">
                    {removeSpecificTextAndTags(item?.job_description)}
                  </p>
                </div>
              </div>
            </div>

            <div className="cursor-default w-full flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <p className="text-[13px] font-semibold mb-0 text-black">
                  {`${item?.salary_unit} Max.`}
                </p>
                <p className="text-[13px] font-semibold mb-0 text-gray-500">
                  {item?.state}, {item?.city}
                </p>
              </div>
              <div className="flex gap-2">
                <div
                  onClick={() => handleOpenInNewTab(item, Category)}
                  className={`${
                    item?.applied_job === "Rejected"
                      ? "bg-red-700 cursor-default"
                      : item?.applied_job
                      ? "bg-green-700 cursor-default"
                      : "bg-black cursor-pointer"
                  } font-semibold flex justify-center items-center text-[12px] text-white rounded-[30px] px-3 py-1 text-center leading-[1.2em]`}
                >
                  {item?.applied_job ? item.applied_job : "Apply"}
                </div>
                {item?.applied_job && (
                  <div
                    onClick={() => openingModal(item?.applyID)}
                    className="cursor-pointer bg-[#6d597a] font-semibold flex justify-center items-center text-[12px] text-white rounded-[30px] px-3 h-[25px]"
                  >
                    Track
                  </div>
                )}
              </div>
            </div>

            <div className="border-[1px] border-solid border-gray-300 w-full"></div>

            <div className="cursor-default flex w-full justify-between items-center">
              <div className="flex gap-1 justify-start items-center">
                <img className="w-[22px]" src={INFOVERIFIED} alt="verified" />
                <p className="text-[13px] font-semibold mb-0">
                  Verified Institute
                </p>
              </div>
              <div className="flex justify-center items-center gap-1">
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

export default ListDesignTwo;
