import CITYBGIMAGE from "../../assets/dummyImage.png";
import image from "@Assets/Icons/Group 1000007302.png";
import CustomSelectThree from "@Components/Dropdown/CustomSelectThree";
import useFilterCity from "@Hooks/Queries/useFilterCity";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AppRoute } from "../../Navigator/AppRoute";

const JobsByCityNew = () => {
  const navigate = useNavigate();
  const [searchJob, setSearchJob] = useState({
    city: "",
  });
  const { data: cityList } = useFilterCity({});

  return (
    <div className=" hidden lg:flex items-end h-[500px] w-full bg-black mt-[-50px] pl-[50px]">
      <div className=" pl-[] w-[50%] h-full text-[30px] p-[50px] flex items-start justify-center flex-col gap-5 ">
        <div className=" flex flex-col gap-2">
          <h2 className=" text-white text-[40px] font-bold">
            Find Opportunities in Your City
          </h2>
          <p className="text-[14px] text-[#cccccc]">
            Check out our curated list of top faculty positions in popular
            cities. These featured roles offer exciting opportunities in
            renowned institutions and vibrant communities.
          </p>
        </div>
        {/* <img className="w-full " src={image} alt="test" /> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            navigate({
              pathname: AppRoute.Find_Jobs,
              search: createSearchParams(searchJob).toString(),
            });
          }}
          className=" text-[14px] bg-[#141414] border-solid border-1 border-[#333333] w-full rounded-[20px] flex justify-center items-center"
        >
          <CustomSelectThree
            options={cityList?.data || []}
            setSearchJob={(city) => {
              setSearchJob((oldSearchJob) => ({
                ...oldSearchJob,
                city,
              }));
            }}
            searchJob={searchJob}
          />
          <button
            className=" mr-[50px] px-[20px] h-[30px] text-black bg-white font-semibold border-white rounded-[20px]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="w-[50%]">
        <img src={CITYBGIMAGE} className=" w-full mt-[-50px]" alt="bgimage" />
      </div>
    </div>
  );
};

export default JobsByCityNew;
