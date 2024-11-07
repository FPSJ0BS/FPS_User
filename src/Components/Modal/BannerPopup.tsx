import { RxCross1 } from "react-icons/rx";
import { getBannerImages } from "@/api/api";
import { useEffect, useState } from "react";

const BannerPopup = ({ imageType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [isIconVisible, setIsIconVisible] = useState(false); // Controls cross icon visibility

  const setPopupTime = () => {
    const now = new Date().getTime();
    localStorage.setItem("lastPopupShown", now);
    setIsVisible(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await getBannerImages(imageType);
        const img = res?.data?.data[0]?.image;
        setImage(img);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const lastPopupShown = localStorage.getItem("lastPopupShown");
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastPopupShown || new Date().getTime() - lastPopupShown > oneDay) {
      setIsVisible(true);
      fetchImage();
      // Delay the visibility of the cross icon by 3 seconds
      setTimeout(() => setIsIconVisible(true), 3000);
    }
  }, [imageType]);

  return (
    isVisible &&
    image && (
      <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss flex justify-center items-center cursor-default">
        <div className=" w-[95%]  sm:w-[60%] relative">
          {isIconVisible && (
            <RxCross1
              className="absolute right-3 top-3 text-white cursor-pointer"
              strokeWidth={2}
              size={25}
              onClick={setPopupTime} 
            />
          )}
          <img alt="cta-banner" src={image} className="w-full" />
        </div>
      </div>
    )
  );
};

export default BannerPopup;
