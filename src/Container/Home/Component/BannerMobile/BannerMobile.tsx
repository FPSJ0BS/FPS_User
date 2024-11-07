import groupImage from "@Assets/Group 238187.png";
import Aakash from "@Assets/Aakash.png";
import Allen from "@Assets/Allen.png";
import Gurukripa from "@Assets/gurukripa.png";
import PW from "@Assets/physics wallah.png";
import PLAYSTORE from "@Assets/Icons/playstore.png";
import APPLE from "@Assets/Icons/apple-32.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";
import { useGlobalContext } from "@Context/GlobalContextProvider";

const BannerMobile = () => {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();
  const openLink = () => {
    window.open("https://linkmix.co/24321549", "_blank");
  };
  return (
    <div className=" block md:hidden min-h-[100vh]  bg-black p-[20px]">
      <h1 className=" text-white text-[35px] pt-[0px] font-semibold leading-[1.2em]">
      Find your dream job Now.
      </h1>

      <p className=" text-white pt-2 text-[15px]">
        Get the top 1% filtered candidates3x faster  with
        FPSJOBS+Tallento.ai.
      </p>

      <div className=" flex w-full justify-center items-center mt-[20px]">
        <img src={groupImage} alt="group" width="50%" />
      </div>

      <div className=" mt-[50px] flex gap-3">
        <img alt="aakash" src={Aakash} className=" w-[60px]" />
        <img alt="aakash" src={Allen} className=" w-[60px]" />
        <img alt="aakash" src={Gurukripa} className=" w-[60px]" />
        <img alt="aakash" src={PW} className=" w-[70px] " />
      </div>

      <div className=" w-full mt-[30px] flex gap-3 pr-2 ">
        {userData?.UID === undefined && (
          <button
            onClick={() => navigate(`${AppRoute.Login}`)}
            className=" w-[50%]  py-2 border-[#9a3c58] rounded-[30px] bg-white text-[#9a3c58] font-semibold "
          >
            Login
          </button>
        )}
        {userData?.UID === undefined && (
          <button
            onClick={() => navigate(`${AppRoute.SignUp}`)}
            className=" w-[50%]  py-2 border-[#9a3c58] rounded-[30px] bg-[#9a3c58] text-white font-semibold "
          >
            Register
          </button>
        )}
      </div>

      <div className=" flex-col md:flex-row flex gap-3 w-full justify-start items-start cursor-pointer pt-4">
        <div onClick={() => openLink()} className="  border-1 border-white border-solid border-1 px-4 py-2 flex items-center justify-center gap-3 ">
          <img alt="playstore" className=" w-[25px]" src={PLAYSTORE} />
          <div className="flex flex-col gap-1">
            <h3 className=" text-white font-bold text-[15px]">Play Store</h3>
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
        <div onClick={() => openLink()} className="  border-1 border-white px-4 py-2 border-solid  flex items-center justify-center gap-3">
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
