import Button from "@Components/Button/Button";
import FlatList from "@Components/FlatList/FlatLIst";
import Imag from "@Components/Image/Image";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { AppRoute } from "@Navigator/AppRoute";
import { HTMLAttributes, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../BannerNew/banner.scss";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import catbg from "@Assets/Home/bgcat.svg";
import CATONE from "@Assets/Home/categories/Frame 18-1.png";
import CATTWO from "@Assets/Home/categories/Frame 18-2.png";
import CATTHREE from "@Assets/Home/categories/Frame 18-3.png";
import CATFOUR from "@Assets/Home/categories/Frame 18-4.png";
import CATFIVE from "@Assets/Home/categories/Frame 18-5.png";
import CATSIX from "@Assets/Home/categories/Frame 18-6.png";
import CATSEVEN from "@Assets/Home/categories/Frame 18.png";

type IProps = {
  className: HTMLAttributes<HTMLDivElement>["className"];
};

const CategoryNew = (props: IProps) => {
  const icons = {
    1: CATONE,
    2: CATTWO,
    3: CATTHREE,
    4: CATFOUR,
    5: CATFIVE,
    6: CATSIX,
    7: CATSEVEN,
    // Map the rest of your icons with their corresponding category IDs or names
  };

  const { setCategoryData } = useGlobalContext();

  const { className } = props;
  const [dataBlock] = useState({
    title: "Browse by category",
    text: " Recruitment made easy for candidates searching for IIT JEE, NEET Coaching jobs, Edtech jobs, School teacher jobs & Other Education Sector Jobs",
  });
  const { data: Category } = useCategoryList({});
  console.log("Category Category Category", Category);
  const navigate = useNavigate();
  return (
    <div className=" mt-[-2vh]  border-t-2 border-solid border-white flex pt-[40px] gap-5 flex-col w-[99.5%] h-[600px] items-start justify-center pl-[10px] md:pl-[50px] lg:pl-[100px] mb-[50px] bg-[url('@Assets/Home/bgcat.svg')] bg-cover bg-no-repeat">
      <div className=" flex flex-col gap-3">
        <h2 className=" text-white text-[40px] font-bold">Browse By Category</h2>
        <p className=" mb-0 text-[14px] text-[#cccccc]">
          Recruitment made easy for candidates searching for IIT JEE, NEET
          Coaching jobs, Edtech jobs, School teacher
          <br /> jobs & Other Education Sector Jobs
        </p>
      </div>
      <div className=" flex flex-wrap gap-10  pb-[100px] cursor-pointer">
        {Category?.data?.map((idx, index) => {
          return (
            <div
              key={idx.id}
              className={` gap-3 `}
              onClick={() => {
                setCategoryData(idx);

                navigate(
                  `/${idx?.category
                    .trim()
                    .replaceAll(" ", "-")
                    .toLowerCase()}/${idx?.ID}`,
                  {
                    state: idx?.ID,
                  }
                );
              }}
            >
              {/* <div className="categorycard "></div> */}

              <div className=" flex w-[320px] px-[20px] h-[60px] bg-[#0e0e0e] border-solid border-2 border-[#2a2a2a] rounded-2xl">
                <div className=" w-[20%] flex justify-center items-center h-full">
                  <img
                    className="w-[60%]"
                    src={icons[index + 1]}
                    alt={`${idx.category} icon`}
                  />
                </div>
                <div className=" w-[70%] flex justify-start items-center">
                  <h4 className=" text-white">{idx.category}</h4>
                </div>
                <div className=" w-[10%] flex justify-start items-center">
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
                    className="lucide lucide-chevron-right text-white"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}

        
        
      </div>
    </div>
  );
};

export default CategoryNew;
