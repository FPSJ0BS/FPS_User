import { useState, useEffect } from "react";
import "./popuphome.scss";

const PopupHome = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("popupLastShown");
    const now = new Date().getTime();

    // If lastShown doesn't exist or 24 hours have passed since the last popup
    if (!lastShown || now - lastShown > 24 * 60 * 60 * 1000) {

      setShowPopup(true);

      localStorage.setItem("popupLastShown", now);
      
    }

  }, []);

  const handleClose = () => {

    setShowPopup(false);

  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 w-full h-full popuphome">
          <div className="p-8 rounded-lg shadow-lg w-[55%] h-[50%] bg-[url('@Assets/24hours-popup.png')] bg-contain bg-no-repeat relative">
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x absolute right-5 text-white cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupHome;
