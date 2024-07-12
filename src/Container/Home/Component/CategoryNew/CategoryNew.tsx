import Button from "@Components/Button/Button";
import FlatList from "@Components/FlatList/FlatLIst";
import Imag from "@Components/Image/Image";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { AppRoute } from "@Navigator/AppRoute";
import { HTMLAttributes, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../BannerNew/banner.scss'
import { useGlobalContext } from "@Context/GlobalContextProvider";

type IProps = {
  className: HTMLAttributes<HTMLDivElement>["className"];
};

const CategoryNew = (props: IProps) => {
  const {  setCategoryData } = useGlobalContext();

  const { className } = props;
  const [dataBlock] = useState({
    title: "Browse by category",
    text: " Recruitment made easy for candidates searching for IIT JEE, NEET Coaching jobs, Edtech jobs, School teacher jobs & Other Education Sector Jobs",
  });
  const { data: Category } = useCategoryList({});
  console.log('Category Category Category', Category);
  const navigate = useNavigate();
  return (
    <div className=" flex w-full items-center justify-center pl-[10px] md:pl-[50px] lg:pl-[100px] mb-[50px] bg-black">
      <div className=" flex flex-wrap gap-10 pt-[200px] pb-[100px]">
       
        <FlatList
        data={Category?.data}
        renderItem={(idx: any) => {
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



              <div className="cardBanerNew">
                <div className="main-contentBanerNew mt-[-30px]">
                  
                  <p className="headingBanerNew"> {idx?.category}</p>
                </div>
                  <div className="categoriesBaneNew">
                  <a className="btn-category-job mt-[-px]">
                        Explore Subjects{" "}
                        <span className="icon-keyboard_arrow_right"></span>
                      </a>
                   
                  </div>
                
              </div>
            </div>
          );
        }}
      />
      </div>
    </div>
  );
};

export default CategoryNew;
