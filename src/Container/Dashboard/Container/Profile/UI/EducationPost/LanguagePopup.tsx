import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import { closeModalLanguageAddModal, toggleRefetchProfile } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { postSubmitLanguageDetails } from "@/api/api";

function LanguagePopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();

  const [buttonLoad, setButtonLoad] = useState(false);
  const [languageInputs, setLanguageInputs] = useState([
    { language: "", read: false, write: false, speak: false, proficiency: "" },
  ]);

  useEffect(() => {
    console.log(languageInputs);
  }, [languageInputs]);

  const { languageDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  useEffect(() => {
    console.log("languageDataArray", languageDataArray);
  }, [languageDataArray]);

  const popupCloseFunc = async () => {
    await dispatch(closeModalLanguageAddModal());
  };

  const handleAddLanguage = () => {
    setLanguageInputs([
      ...languageInputs,
      {
        language: "",
        read: false,
        write: false,
        speak: false,
        proficiency: "",
      },
    ]);
  };

  const handleRemoveLanguage = (index) => {
    const newLanguageInputs = languageInputs.filter((_, i) => i !== index);
    setLanguageInputs(newLanguageInputs);
  };

  const handleInputChange = (index, field, value) => {
    const newLanguageInputs = languageInputs.map((input, i) =>
      i === index ? { ...input, [field]: value } : input
    );
    setLanguageInputs(newLanguageInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoad(true);

    const formattedData = languageInputs.map((input) => ({
      faculityID: userId,
      language: parseInt(input.language),
      read: input.read ? 1 : 0,
      write: input.write ? 1 : 0,
      speak: input.speak ? 1 : 0,
      proficiency: input.proficiency,
    }));

    console.log("formattedData", formattedData);

    try {

      const res = await postSubmitLanguageDetails(formattedData)

      if(res?.data?.status){
        console.log("language", res);
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalLanguageAddModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);

      } else{
        console.log("language fail", res);
        Toast("error", res?.data?.message);
        setButtonLoad(false);
        // await dispatch(closeModalLanguageAddModal());
      }
      
    } catch (error) {
      console.log(error);
    }

   

    setButtonLoad(false);
  };

  return (
    <div className="TrackPopup h-full w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[90%] rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Add Languages
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <form className="w-full h-full p-5" onSubmit={handleSubmit}>
          <div className="h-[85%] w-full border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain">
            {languageInputs.map((input, index) => (
              <div key={index} className="mb-4 flex flex-col gap-2">
                <div className="flex gap-2 items-end">
                  <div className="flex flex-col w-[50%] gap-2">
                    <label
                      htmlFor={`language-${index}`}
                      className="postJobInputTitle font-semibold text-black"
                    >
                      Select Language *
                    </label>
                    <select
                      id={`language-${index}`}
                      required
                      value={input.language}
                      onChange={(e) =>
                        handleInputChange(index, "language", e.target.value)
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

                  <div className="flex flex-col w-[50%] gap-2">
                    <label
                      htmlFor={`proficiency-${index}`}
                      className="postJobInputTitle font-semibold text-black"
                    >
                      Select Proficiency *
                    </label>
                    <select
                      id={`proficiency-${index}`}
                      required
                      value={input.proficiency}
                      onChange={(e) =>
                        handleInputChange(index, "proficiency", e.target.value)
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
                      checked={input.read}
                      onChange={(e) =>
                        handleInputChange(index, "read", e.target.checked)
                      }
                    />
                    Read
                  </label>
                  <label className="mr-2 flex gap-1 items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={input.write}
                      onChange={(e) =>
                        handleInputChange(index, "write", e.target.checked)
                      }
                    />
                    Write
                  </label>
                  <label className="mr-2 flex gap-1 items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={input.speak}
                      onChange={(e) =>
                        handleInputChange(index, "speak", e.target.checked)
                      }
                    />
                    Speak
                  </label>
                </div>

                {index !== 0 && (
                  <div className="w-full mt-4">
                    <button
                      type="button"
                      onClick={() => handleRemoveLanguage(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                )}
                <hr />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLanguage}
              className="mt-2 text-white bg-blue-500 px-2 py-2 rounded-lg"
            >
              Add Another Language
            </button>
          </div>
          <button
            type="submit"
            className="w-[20%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
          >
            {buttonLoad ? "Submitting..." : "Save Languages"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LanguagePopup;
