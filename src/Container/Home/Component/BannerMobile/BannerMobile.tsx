import groupImage from "@Assets/Group 238187.png";
import Aakash from "@Assets/Aakash.png";
import Allen from "@Assets/Allen.png";
import Gurukripa from "@Assets/gurukripa.png";
import PW from "@Assets/physics wallah.png";
import PLAYSTORE from "@Assets/Icons/playstore.png";
import APPLE from "@Assets/Icons/apple-32.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";

const BannerMobile = () => {
  return (
    <div className=" block md:hidden h-[100vh] w-[100vw] bg-black p-[25px]">

      <h1 className=" text-white text-[35px] pt-[20px] font-semibold leading-[1.4em]">
        Finding jobs <br /> made super easy
      </h1>

      <p className=" text-white pt-3 text-[15px]">
        Get the top 1% filtered candidates3x faster <br /> with
        FPSJOBS+Tallento.ai. 
      </p>

      <div className=" flex w-full justify-center items-center mt-[50px]">
        <img src={groupImage} alt="group" className=" w-[150px]" />
      </div>

      <div className=" mt-[70px] flex gap-3">

        <img alt="aakash" src={Aakash} className=" w-[60px]"/>
        <img alt="aakash" src={Allen} className=" w-[60px]"/>
        <img alt="aakash" src={Gurukripa} className=" w-[60px]"/>
        <img alt="aakash" src={PW} className=" w-[70px] "/>

      </div>

      <div className=" w-full mt-[30px] flex gap-3 pr-2 ">

        <button className=" w-[50%]  py-2 border-[#9a3c58] rounded-[30px] bg-white text-[#9a3c58] font-semibold ">Login</button>
        <button className=" w-[50%]  py-2 border-[#9a3c58] rounded-[30px] bg-[#9a3c58] text-white font-semibold ">Register</button>

      </div>

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
  );
};

export default BannerMobile;
