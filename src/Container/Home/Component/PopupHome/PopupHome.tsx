import { useState, useEffect } from 'react';
import './popuphome.scss'

const PopupHome = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup every time the component mounts
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 w-full h-full popuphome">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] h-[65%] bg-[url('@Assets/24hours-popup.png')] bg-contain bg-no-repeat relative">
            <button
              onClick={handleClose}
              className="bg-black border-white border-2 border-solid text-white px-4 py-2 rounded hover:bg-blue-600 absolute right-[50%] bottom-[5%] font-semibold"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupHome;
