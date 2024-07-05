import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addNumberToTemplateNumber, paymentStatusCheck } from "@/Redux/Resume Builder/resumeBuilderSlice";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { getResumeData } from "@/api/api";
import ResumeLoader from "../ui/resumeLoader";

function ChooseTemplate() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const handleImageSelect = async (number, purchaseStatus) => {
    await dispatch(addNumberToTemplateNumber(parseInt(number)));
    await dispatch(paymentStatusCheck(purchaseStatus))
    setSelectedImage(number);
  };

  useEffect(() => {
    dispatch(addNumberToTemplateNumber(null));
  }, []);

  const extractNumberFromPath = (path) => {
    const regex = /Resume (\d+)/;
    const match = path.match(regex);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    } else {
      return "No number found in the string.";
    }
  };

  const handlePreviewClick = (imgData) => {
    setSelectedImageUrl(imgData);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const [resumeTempList, setResumeTempList] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    console.log(
      "resumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempListresumeTempList",
      resumeTempList
    );
  }, [resumeTempList]);

  function convertDataToArray(data) {
    // Extract the base URL separately
    const baseURL = data.base_url;

    // Filter out the base URL key and convert the rest of the data to an array
    const resultArray = Object.keys(data)
      .filter((key) => key !== "base_url")
      .map((key) => ({
        id: data[key].id,
        thumbnail: data[key].thumbnail,
        price: data[key].price,
        purchased_data: data[key].purchased_data || null,
      }));

    // If needed, you can include the base URL in the result array or handle it separately
    // resultArray.baseURL = baseURL;

    return resultArray;
  }

  useLayoutEffect(() => {
    const fetch = async () => {
      try {
        const res = await getResumeData(userId);

        if (res?.data?.status) {
          const data = await res?.data?.data;
          const convertedData = await convertDataToArray(data);
          const url = await res?.data?.data?.base_url;

          await setBaseUrl(url);
          await setResumeTempList(convertedData);

          console.log("templateeeeeeeeeeeeeeeeeeeeeeeeeee", res?.data?.data);

          setLoader(false);
        } else {
          console.log("fail", res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-start items-center pt-[50px] ">
      <h2 className="text-[3vw] font-semibold">Template we recommend</h2>
      <div className="w-[80vw] h-full mt-[50px] flex flex-wrap justify-center items-center gap-20">
        {loader ? (
          <ResumeLoader />
        ) : (
          resumeTempList?.map(({ thumbnail, id, purchased_data }, index) => (
            <div key={id} className="relative group w-[25%]">
              <img
                className={`w-full cursor-pointer shadow-lg rounded-lg ${
                  selectedImage === parseInt(id)
                    ? "border-4 border-solid border-blue-500"
                    : ""
                }`}
                src={`${baseUrl}${thumbnail}`}
                alt={`resume-${index}`}
                onClick={() => handleImageSelect(parseInt(id), purchased_data === null ? true : false)}
              />
              {parseInt(id) !== 1 && (
                <div
                  className={`absolute  top-3 right-[-2.5vw] rotate-45 px-4 rounded-xl font-semibold text-white ${
                    purchased_data === null ? "bg-[#f77f00]" : "bg-green-600"
                  }`}
                >
                  {`${purchased_data === null ? "Premium" : "Purchased"}`}
                </div>
              )}
              {selectedImage === parseInt(id) && (
                <button
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-lg opacity-75 hover:opacity-100"
                  onClick={() => handlePreviewClick(`${baseUrl}${thumbnail}`)}
                >
                  Preview
                </button>
              )}
            </div>
          ))
        )}
      </div>

      <div className="bg-[#faedcd] shadow-lg w-full h-[15vh] fixed bottom-0 z-50 rounded-t-[100px] flex items-center justify-end px-[150px]">
        <button
          onClick={() => navigate("/resume-builder/resume-main")}
          type="button"
          className="bg-white text-center w-[300px] rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
        >
          <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[290px] z-10 duration-500">
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
              className="lucide lucide-arrow-right-from-line"
            >
              <path d="M3 5v14" />
              <path d="M21 12H7" />
              <path d="m15 18 6-6-6-6" />
            </svg>
          </div>
          <p className="translate-x-8">Choose the template</p>
        </button>
      </div>

      {/* Modal for Image Popup */}
      {isOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <button
            onClick={handleClose}
            className="absolute top-[15vh] right-[22vw] p-2 text-white bg-red-500 rounded-lg"
          >
            Close
          </button>
          <div className="bg-white px-[100px] pt-[50px] w-[500px]  rounded-lg overflow-y-auto h-[500px]">
            <img
              src={selectedImageUrl}
              alt="Expanded Resume"
              className="w-[130%]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChooseTemplate;
