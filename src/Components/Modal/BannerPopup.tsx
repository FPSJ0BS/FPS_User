import { useGlobalContext } from "@Context/GlobalContextProvider";
import Dusshera from "@Assets/dusshera.png";
import { RxCross2 } from "react-icons/rx";

const BannerPopup = ({setpopupTime}) => {
  const { userData } = useGlobalContext();

  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss flex justify-center items-center cursor-default">
      <div className=" w-[95%]  sm:w-[60%] relative">
        <RxCross2 onClick={() => setpopupTime()} className="absolute text-white right-3 top-3 cursor-pointer" size={30} />
        <img src={Dusshera} alt="dusshrra" />
      </div>
    </div>
  );
};

export default BannerPopup;
