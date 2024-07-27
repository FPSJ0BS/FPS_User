import INFOVERIFIED from "@Assets/approved.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { Toast } from "@Utils/Toast";
import useRemoveFavourite from "@Hooks/Mutation/useRemoveFavourite";
import useFavourite from "@Hooks/Mutation/useFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import Pagination from "@Components/Pagination";
import { createQueryBySlug } from "@Utils/navigationquery";
import { useNavigate } from "react-router-dom";
import useCategoryList from "@Hooks/Queries/useCategoryList";

const List = ({ data, setQuery, query, refetch, setSearchJob, searchJob }) => {
  const { mutateAsync: removeFavourite } = useRemoveFavourite({});
  const { mutateAsync: Favourite } = useFavourite({});
  const { userData } = useGlobalContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: Category } = useCategoryList({});
  console.log('salary_minimum', data);

 

  const colors = [
    "bg-[#fae1cd]",
    "bg-[#daf5ed]",
    "bg-[#e0daf7]",
    "bg-[#e2f2fd]",
    "bg-[#f7e2f3]",
    "bg-[#eceef3]",
  ];

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

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const differenceInTime = now.getTime() - date.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else if (differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInMonths === 1) {
      return "1 month ago";
    } else if (differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    } else if (differenceInYears === 1) {
      return "1 year ago";
    } else {
      return `${differenceInYears} years ago`;
    }
  };

  const setJobFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    Favourite({
      UID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job add sucessfully favourite");

        refetch();
      } else {
        Toast("error", res?.message);
      }
    });
  };

  const setRemoveFavourite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id
  ) => {
    e.stopPropagation();
    removeFavourite({
      UID: userData?.UID,
      jobID: id,
    }).then((res) => {
      if (res?.status === "success") {
        queryClient.invalidateQueries({ queryKey: ["allFavourite"] });
        Toast("success", "Job removed from favourites" || res?.message);
        refetch();
      } else {
        Toast("error", res?.message);
      }
    });
  };

  const handleOpenInNewTab = (item, category) => {
    const url = createQueryBySlug(item, category);
    window.open(url, "_blank"); // '_blank' opens the URL in a new tab
  };

  return (
    <div className=" flex flex-col  h-full ">
      {
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4  ml-0 cursor-pointer place-items-center sm:place-items-stretch  ">
          {data?.jobs?.map((item, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <div
                onClick={() => handleOpenInNewTab(item, Category)}
                key={index}
                className=" w-[90vw] sm:w-[44vw] md:w-[28vw] lg:w-[22vw] gap-2 min-h-[300px]  bg-white rounded-[20px] p-[10px] flex flex-col items-start justify-start shadow-md border-1 border-solid border-[#e1e1df]"
              >
                <div className={`  h-[75%] rounded-2xl ${bgColor} p-[10px]`}>
                  <div className=" flex flex-col gap-3">
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
                              item?.favourite === "1"
                                ? "text-black"
                                : "text-black"
                            }  cursor-pointer`}
                          >
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className=" flex flex-col w-full">
                      <h2 className="text-black font-bold mb-0 text-[15px] uppercase leading-[1.4em] line-clamp-1">
                        {item?.job_title}
                      </h2>


                      {data?.pack_type === "Prepaid" && userData?.UID !== undefined ? (
                        <h2 className="text-semibold font-bold mb-0 text-[12px] uppercase leading-[1.4em] line-clamp-2">
                          {item?.company_name}
                        </h2>
                      ) : item?.show_all === "1" ? (
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

                  <div className=" bg-black flex justify-center items-center text-[12px] text-white rounded-[30px] px-3 h-[25px] ">
                    Details
                  </div>
                </div>

                <div className=" border-[1px] border-solid border-gray-300 w-full"></div>

                <div className="  flex w-full  justify-between items-center ">
                  <div className="flex gap-1 justify-start items-center ">
                    <img
                      className=" w-[22px]"
                      src={INFOVERIFIED}
                      alt="verified"
                    />
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
      }
      <div className="my-[50px] ">
        <Pagination
          total={data?.totalPage}
          current={searchJob?.totalPage}
          onChange={(page) => {
            setSearchJob({
              ...searchJob,
              pageNo: page,
            });
          }}
          pageSize={searchJob?.limit}
        />
      </div>
    </div>
  );
};

export default List;
