import DOLLAR from "@Assets/dollarcrop.png";
import PLAYSTORE from "@Assets/Icons/playstore.png";
import APPLE from "@Assets/Icons/apple-32.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import "./banner.scss";

const BannerNew = () => {
  return (
    <div className="h-[150vh] bg-[#090909] overflow-hidden hidden md:block">
      <div className="h-[50vh] bg-[#090c0f] px-[15vw] flex items-start justify-center flex-col gap-5 relative">
        <div className="   md:top-[8vw] md:left-[12vw]   lg:top-[2vw] lg:left-[13vw] absolute rounded-full w-[110px] h-[110px] border-2 border-solid border-[#606367]"></div>

        <h1 className="text-white text-[25px] sm:text-[4vw] font-medium leading-[1.2em] z-50">
        Find your dream job<br /> in education 
        </h1>
        <div className="w-full flex z-50 text-black   ">
          <div className=" flex w-[100%]  justify-center items-center border-1 border-[#fff] bg-[#e9e5e5] px-2">
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
              className="lucide lucide-search text-black"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className=" text-black  placeholder-black"
              type="text"
              placeholder="Job, company or skills"
            />
          </div>
          <input
            className="border-1 border-[#fff] text-black bg-[#e9e5e5] placeholder-black"
            type="text"
            placeholder="Select location"
          />
          <input
            className="border-1 border-[#fff] text-black bg-[#e9e5e5] placeholder-black"
            type="text"
            placeholder="Select experience"
          />
          <button className="w-[500px] text-white border-[#fff]">
            Find a job
          </button>
        </div>
      </div>

      <div className=" absolute top-[15vw] right-[10vw] min-h-[400px] min-w-[400px] opacity-90 z-20 ">
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
      </div>

      <img
        src={DOLLAR}
        className=" hidden lg:block overflow-hidden absolute right-[0vw] top-[-20vw] opacity-25 w-[750px] rotate-[0deg]"
        alt=" dollar"
      />
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
            <p>COmpanies Hiring</p>
          </div>

          <div className=" flex gap-1 flex-col mt-[30px] text-[#b2b2b2] ">
            <p>1M+</p>
            <p>Candidates</p>
          </div>
        </div>

        <div className=" mt-[40px] md:mt-[150px] text-white flex-col flex ">
          <h2 className=" text-[23px] md:text-[45px] text-white font-semibold">
            Save time &<br /> find your job with
            <br /> our mobile app
          </h2>

          <div className=" flex-col md:flex-row flex gap-3 w-full justify-start items-start cursor-pointer pt-4">
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
            <div className="  border-1 border-white px-4 py-2 border-solid  flex items-center justify-center gap-3">
              <img alt="playstore" className=" w-[25px]" src={APPLE} />
              <div className="flex flex-col gap-1">
                <h3 className=" text-white font-bold text-[15px]">App Store</h3>
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
      </div>

      <div className=" hidden lg:block w-[800px] h-[800px] border-1 border-white border-solid absolute xl:top-[20vw] xl:left-[-50vw] 2xl:top-[20vw] 2xl:left-[-40vw] rounded-full "></div>
    </div>
  );
};

export default BannerNew;
