import { useSelector, useDispatch } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalLanguageEditModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { getSingleLanguageDetails, postSubmitEditLanguageDetails, postSubmitLanguageDetails } from "@/api/api";
import Loader from "@Container/Dashboard/Loader/laoder";

function LanguageEditPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();
  const [singleLanData, setSingleLanData] = useState(null);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [loaderState, setLoaderState] = useState(false);

  const [languageInputs, setLanguageInputs] = useState({
    language: "",
    read: false,
    write: false,
    speak: false,
    proficiency: "",
  });

  const { languageDataArray, editLanguageData } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  useLayoutEffect(() => {
    setLoaderState(true);
    const fetchSingleLanguageDetails = async () => {
      const res = await getSingleLanguageDetails(
        userId,
        editLanguageData.languageId
      );

      if (res?.data?.status) {
        const data = res?.data?.data[0];
        setSingleLanData(data);
        setLanguageInputs({
          language: data.language,
          read: data.can_read === 1,
          write: data.can_write === 1,
          speak: data.can_speak === 1,
          proficiency: data.proficiency,
        });
        setLoaderState(false);
      } else {
        console.error(res);
      }
    };

    fetchSingleLanguageDetails();
  }, [userId, editLanguageData.languageId]);

  const handleInputChange = (field, value) => {
    setLanguageInputs({ ...languageInputs, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoad(true);

    const formattedData = {
      faculityID: userId,
      id: editLanguageData.languageId,
      language: parseInt(languageInputs.language),
      read: languageInputs.read ? 1 : 0,
      write: languageInputs.write ? 1 : 0,
      speak: languageInputs.speak ? 1 : 0,
      proficiency: languageInputs.proficiency,
    };

    try {
      const res = await postSubmitEditLanguageDetails(formattedData);

      if (res?.data?.status) {
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalLanguageEditModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);
      } else {
        Toast("error", res?.data?.message);
      }
    } catch (error) {
      console.error(error);
    }

    setButtonLoad(false);
  };

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={() => dispatch(closeModalLanguageEditModal())}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Edit Language
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        {loaderState ? (
          <div className=" h-full w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <form className="w-full h-full p-5" onSubmit={handleSubmit}>
            <div className="h-[85%] w-full border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain">
              <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 items-end">
                  <div className="flex flex-col w-[100%]  md:w-[50%] gap-2">
                    <label
                      htmlFor="language"
                      className="postJobInputTitle font-semibold text-black"
                    >
                      Select Language *
                    </label>
                    <select
                      id="language"
                      required
                      value={languageInputs.language}
                      onChange={(e) =>
                        handleInputChange("language", e.target.value)
                      }
                      className="w-full p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="" disabled>
                        Select Language ...
                      </option>
                      {languageDataArray.map((language) => (
                        <option key={language.id} value={language.id}>
                          {language.language}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col w-[100%]  md:w-[50%] gap-2">
                    <label
                      htmlFor="proficiency"
                      className="postJobInputTitle font-semibold text-black"
                    >
                      Select Proficiency *
                    </label>
                    <select
                      id="proficiency"
                      required
                      value={languageInputs.proficiency}
                      onChange={(e) =>
                        handleInputChange("proficiency", e.target.value)
                      }
                      className="w-full p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="" disabled>
                        Select Proficiency ...
                      </option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-6">
                  <label className="mr-2 flex gap-1 items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={languageInputs.read}
                      onChange={(e) =>
                        handleInputChange("read", e.target.checked)
                      }
                    />
                    Read
                  </label>
                  <label className="mr-2 flex gap-1 items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={languageInputs.write}
                      onChange={(e) =>
                        handleInputChange("write", e.target.checked)
                      }
                    />
                    Write
                  </label>
                  <label className="mr-2 flex gap-1 items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={languageInputs.speak}
                      onChange={(e) =>
                        handleInputChange("speak", e.target.checked)
                      }
                    />
                    Speak
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" w-[100%] md:w-[20%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
            >
              {buttonLoad ? "Submitting..." : "Save Language"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LanguageEditPopup;
