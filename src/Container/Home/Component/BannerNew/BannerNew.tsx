import DOLLAR from "@Assets/dollarcrop.png";
import PLAYSTORE from "@Assets/Icons/playstore.png";
import APPLE from "@Assets/Icons/apple-32.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import "./banner.scss";
import BANNERIMAGE from "@Assets/Home/BannerNew/bgmainlow.png";
import CARD from "@Assets/Home/BannerNew/card.png";
import STACK from "@Assets/Home/Stack.png";
import CustomSelect from "@Components/Dropdown";
import { useState } from "react";
import useFilterCity from "@Hooks/Queries/useFilterCity";
import PHONEIMAGE from "@Assets/Icons/32768014_responsive_device_64 1.png";
import { useNavigate, createSearchParams } from "react-router-dom";
import { AppRoute } from "../../../../Navigator/AppRoute";
import { Toast } from "@Utils/Toast";

const BannerNew = () => {
  const navigate = useNavigate();
  const [searchJob, setSearchJob] = useState({
    city: "",
    job_title: "",
  });
  const { data: cityList } = useFilterCity({});


  const openLink = () => {
    window.open("https://linkmix.co/24321549", "_blank");
  };

  return (
    <div className=" pt-5  banner-new bg-[url('@Assets/Home/BannerNew/bgmain.png')] bg-contain bg-no-repeat min-h-[100vh]  bg-[#090909] overflow-hidden hidden md:block">
      <div className="h-[50vh]  px-[15vw] flex items-start justify-center flex-col gap-5 relative">
        {/* <div className="   md:top-[8vw] md:left-[12vw]   lg:top-[2vw] lg:left-[13vw] absolute rounded-full w-[110px] h-[110px] border-2 border-solid border-[#606367]"></div> */}

        <h1 className="text-white text-[25px] sm:text-[4vw] font-bold leading-[1.2em] z-50">
          Find your dream job
          <br /> in education
        </h1>
        <img
          onClick={() => navigate(`${AppRoute.Find_Jobs}`)}
          src={CARD}
          className=" absolute right-0 top-2 w-[30%] cursor-pointer"
          alt="card"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchJob?.job_title) {
              navigate({
                pathname: AppRoute.Find_Jobs,
                search: createSearchParams(searchJob).toString(),
              });
            } else {
              Toast("error", " Fields are required");
            }
          }}
          className="w-[70%] flex z-50 text-black rounded-[30px]  border-white border-2 border-solid "
        >
          <div className=" flex w-[100%] rounded-l-[30px]  justify-center items-center   bg-[#191919] px-2">
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
              className="lucide lucide-search text-white "
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className=" text-white border-none placeholder-white "
              type="text"
              placeholder="Job, company or skills"
              onChange={(e) => {
                setSearchJob({
                  ...searchJob,
                  job_title: e.target.value,
                });
              }}
            />
          </div>
          <div className=" h-full  flex justify-center items-center">
            <div className=" h-[50%] border-solid border-white border-1 flex justify-center items-center"></div>
          </div>
          <CustomSelect
            options={cityList?.data || []}
            setSearchJob={(city) => {
              setSearchJob((oldSearchJob) => ({
                ...oldSearchJob,
                city,
              }));
            }}
            searchJob={searchJob}
          />
          {/* <input
            className="border-1 border-[#fff] text-black bg-[#191919] placeholder-black"
            type="text"
            placeholder="Select experience"
          /> */}
          <button
            type="submit"
            className="w-[500px] text-black font-semibold border-[#fff] bg-white rounded-r-[30px]"
          >
            Find a job
          </button>
        </form>
        <div className=" flex justify-center items-center gap-4 mt-[-20px]">
          <div className="flex items-center justify-center gap-2">
            <img src={STACK} alt="stack" />
            <h5 className=" text-[#4d4d4d] font-semibold">
              Top 1% candidates, 3x faster with Tallento.ai
            </h5>
          </div>

          <div className="flex items-center justify-center gap-2">
            <img src={STACK} alt="stack" />
            <h5 className=" text-[#4d4d4d] font-semibold">
              Streamlined hiring, advanced filtering
            </h5>
          </div>
        </div>
      </div>

      {/* <div className=" absolute top-[15vw] right-[10vw] min-h-[400px] min-w-[400px] opacity-90 z-20 ">
        <div className="md:w-[200px] md:h-[200px]  w-[250px] h-[250px] bg-[#a83359] absolute top-0 right-0 "></div>

        <div className=" md:w-[400px] md:h-[400px]  w-[500px] h-[500px] bg-[#a83359] absolute top-0 right-0 rounded-full flex flex-col items-center justify-center pl-[140px] gap-4">
          <p className="mt-[300px]  md:max-lg:pt-[200px] xl:pt-[70px]  opacity-100 text-white font-semibold xl:mt-5">
            Do you want to find
            <br /> an employee? we'll help!
          </p>

          <button className="buttonBannerHome">
            <span className="buttonBannerHome_lg">
              <span className="buttonBannerHome_sl"></span>
              <span className="buttonBannerHome_text">i am an employer</span>
            </span>
          </button>
        </div>
      </div> */}

      {/* <img
        src={DOLLAR}
        className=" hidden lg:block overflow-hidden absolute right-[0vw] top-[-20vw] opacity-25 w-[750px] rotate-[0deg]"
        alt=" dollar"
      /> */}
      <div className="px-[15vw] flex flex-col">
        <p className="  block sm:hidden text-white mt-[200px] font-normal">
          We create technologies so that employers can quickly find a suitable
          emmployee applicants can find a good job.
        </p>

        <p className=" sm:block hidden text-white mt-[100px] font-normal">
          We create technologies so that employers
          <br /> can quickly find a suitable emmployee <br /> applicants can
          find a good job.
        </p>

        <div className=" flex gap-[30px]">
          <div className=" flex gap-1 flex-col mt-[30px] text-[#b2b2b2] ">
            <p>7500+</p>
            <p>Jobs Available</p>
          </div>

          <div className=" flex gap-1 flex-col mt-[30px] text-[#b2b2b2] ">
            <p>5500+</p>
            <p>Companies Hiring</p>
          </div>

          <div className=" flex gap-1 flex-col mt-[30px] text-[#b2b2b2] ">
            <p>1M+</p>
            <p>Candidates</p>
          </div>
        </div>

        <div className=" flex  w-full mt-5">
          <div className=" w-[60%] flex flex-col justify-end pb-4">
            <h2 className=" text-[23px] md:text-[40px] text-white font-semibold">
              Save time &<br /> find your job with
              <br /> our mobile app
            </h2>

            <div
              onClick={() => openLink()}
              className=" flex-col md:flex-row flex gap-3 w-full justify-start items-start cursor-pointer pt-4"
            >
              <div className="  border-1 border-white border-solid border-1 px-4 py-2 flex items-center justify-center gap-3 ">
                <img alt="playstore" className=" w-[25px]" src={PLAYSTORE} />
                <div className="flex flex-col gap-1">
                  <h3 className=" text-white font-bold text-[15px]">
                    Play Store
                  </h3>
                  <div className=" flex gap-1">
                    <h3 className=" text-white font-bold text-[10px]">4.7</h3>
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={HALFSTAR} alt="star" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => openLink()}
                className="  border-1 border-white px-4 py-2 border-solid  flex items-center justify-center gap-3"
              >
                <img alt="playstore" className=" w-[25px]" src={APPLE} />
                <div className="flex flex-col gap-1">
                  <h3 className=" text-white font-bold text-[15px]">
                    App Store
                  </h3>
                  <div className=" flex gap-1">
                    <h3 className=" text-white font-bold text-[10px]">4.5</h3>
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={STAR} alt="star" />
                    <img className="w-[10px]" src={HALFSTAR} alt="star" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70%] mt-1">
            <img
              className="w-full animate-moveLeftRight"
              src={PHONEIMAGE}
              alt="PHONEIMAGE"
            />
          </div>
        </div>
      </div>

      <div className=" hidden lg:block w-[800px] h-[800px] border-1 border-white border-solid absolute xl:top-[20vw] xl:left-[-50vw] 2xl:top-[20vw] 2xl:left-[-40vw] rounded-full "></div>
    </div>
  );
};

export default BannerNew;
