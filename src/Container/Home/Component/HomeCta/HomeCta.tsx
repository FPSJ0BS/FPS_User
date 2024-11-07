import { getBannerImages } from "@/api/api";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const HomeCta = ({ imageType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [isIconVisible, setIsIconVisible] = useState(false); // Controls cross icon visibility

  const setPopupTime = () => {
    const now = new Date().getTime();
    localStorage.setItem("lastPopupShownCta", now);
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

    const lastPopupShown = localStorage.getItem("lastPopupShownCta");
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
      <div className="w-full relative">
        {isIconVisible && (
          <RxCross1
            className="absolute right-3 top-3 text-white cursor-pointer"
            strokeWidth={2}
            size={25}
            onClick={setPopupTime} // Close popup on cross icon click
          />
        )}
        <img
          alt="cta-banner"
          src={image}
          className="w-full"
        />
      </div>
    )
  );
};

export default HomeCta;
