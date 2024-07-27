import { useSelector, useDispatch } from "react-redux";
import {  useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
 
  closeModalSocialMediaModal,

  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import {

  postSubmitSocialMediaLinksDetails,
} from "@/api/api";
import { Toast } from "@Utils/Toast";

import { useGlobalContext } from "@Context/GlobalContextProvider";


function SocialMediaPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);


  const popupCloseFunc = async () => {
    await dispatch(closeModalSocialMediaModal());
  };

  const initialData = {
    faculityID: userId,
    social_link: {
      Facebook: userDataArray?.social_link?.Facebook,
      linkedin: userDataArray?.social_link?.linkedin,
      Instagram: userDataArray?.social_link?.Instagram,
      Github: userDataArray?.social_link?.Github,
      Naukri: userDataArray?.social_link?.Naukri,
      Indeed: userDataArray?.social_link?.Indeed,
      Pinterest: userDataArray?.social_link?.Pinterest,
    },
  };

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      social_link: {
        ...prevData.social_link,
        [name]: value,
      },
    }));
  };

  const validateURL = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-zA-Z\\d_]*)?$",
      "i" // fragment locator
    );
    return !!urlPattern.test(url);
  };

  const preventHashInput = (e) => {
    if (e.key === "#") {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all URLs
    for (let key in formData.social_link) {
      if (
        formData.social_link[key] !== "#" &&
        !validateURL(formData.social_link[key])
      ) {
        alert(`${key} contains an invalid URL`);
        return;
      }
    }

    
    // Post the form data to the API
    try {
      setButtonLoad(true);
      const res = await postSubmitSocialMediaLinksDetails(formData);
      if (res?.data?.status) {
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalSocialMediaModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);
      } else {
        Toast("error", res?.data?.message);
        setButtonLoad(false);
        await dispatch(closeModalSocialMediaModal());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoad(false);
    }
    // Example: postDataToAPI(formData);

  };

  
  

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Social Media Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="h-[85%] w-[90%] border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain  mt-[30px]">
          <form
            className=" grid grid-cols-2 w-full gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Facebook:
                <input 
                onKeyDown={preventHashInput}

                
              
                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Facebook"
                  value={formData.social_link.Facebook}
                  onChange={handleInputChange}
                  placeholder="Enter Facebook URL ..."
                />
              </label>
            </div>
            <div className=" w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                LinkedIn:
                <input 
                onKeyDown={preventHashInput}

                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="linkedin"
                  value={formData.social_link.linkedin}
                  onChange={handleInputChange}
                  placeholder="Enter LinkedIn URL ..."

                />
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Instagram:
                <input 
                onKeyDown={preventHashInput}

                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Instagram"
                  value={formData.social_link.Instagram}
                  onChange={handleInputChange}
                  placeholder="Enter Instagram URL ..."

                />
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Github:
                <input 
                onKeyDown={preventHashInput}

                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Github"
                  value={formData.social_link.Github}
                  onChange={handleInputChange}
                  placeholder="Enter Github URL ..."

                />
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Naukri:
                <input 
                onKeyDown={preventHashInput}

                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Naukri"
                  value={formData.social_link.Naukri}
                  onChange={handleInputChange}
                  placeholder="Enter Naukri URL ..."

                />
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Indeed:
                <input 
                onKeyDown={preventHashInput}

                  className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Indeed"
                  value={formData.social_link.Indeed}
                  onChange={handleInputChange}
                  placeholder="Enter Indeed URL ..."

                />
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label  className="block  text-sm font-semibold text-black ">
                Pinterest:
                <input 
                onKeyDown={preventHashInput}

                  className=" w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  type="text"
                  name="Pinterest"
                  value={formData.social_link.Pinterest}
                  onChange={handleInputChange}
                  placeholder="Enter Pinterest URL ..."

                />
              </label>
            </div>
            <div className=" col-span-2">
              <button className=" bg-green-600 px-5 py-2 text-white rounded-lg" type="submit">
                {buttonLoad ? "Submitting Social Media Links" : "Submit Social Media Links"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaPopup;
