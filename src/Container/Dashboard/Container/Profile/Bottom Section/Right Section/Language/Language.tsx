import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pen from "@Assets/Icons/pen.png";
import {
  editLanguageDataJobValues,
  openModalLanguageAddModal,
  openModalLanguageDeleteModal,
  openModalLanguageEditModal,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import Delete from "@Assets/Icons/delete.png";
import LanguageIcon from "@Assets/Icons/Profile/language.png";

function Language() {
  const dispatch = useDispatch();

  const { userDataArray, percentageDataToAddArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const opnSkillsPopup = () => {
    dispatch(openModalLanguageAddModal());
  };

  const openDeletePopup = async (id) => {
    await dispatch(
      editLanguageDataJobValues({
        languageId: id,
      })
    );

    dispatch(openModalLanguageDeleteModal());
  };

  const openEditPopup = async (id) => {
    await dispatch(
      editLanguageDataJobValues({
        languageId: id,
      })
    );

    dispatch(openModalLanguageEditModal());
  };

  return (
    <div
      id="language"
      className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full language"
    >
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex gap-2 items-start">
          <div className=" flex items-center gap-2 h-[40px]">
            <img
              className=" w-[65px]"
              src={LanguageIcon}
              alt="Education-Icon"
            />
            <h6 className="text-[14px] md:text-[16px] w-ful flex gap-2 cursor-default font-bold">
              Language
            </h6>
          </div>
        </div>
        <div
          onClick={() => opnSkillsPopup()}
          className="text-[11px] md:text-[14px] cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center"
        >
          Add Language
        </div>
      </div>
      {percentageDataToAddArray?.faculity_language === "yes" && <hr />}

      <div className=" flex flex-col md:hidden gap-4">
        {userDataArray?.language_data?.map(
          ({
            id,
            language_text,
            proficiency,
            can_read,
            can_write,
            can_speak,
          }) => {
            return (
              <div key={id} className=" flex flex-col gap-1">
                <div className=" flex gap-2 items-start">
                  <p className=" text-black mb-0 font-bold">{language_text} -</p>
                  <p className=" text-black mb-0">{proficiency}</p>
                  <div className=" w-[6%] h-[40px] flex items-center gap-3 ml-4">
                    <img
                      onClick={() => openEditPopup(id)}
                      className="w-[16px] cursor-pointer hover:w-[20px] "
                      src={Pen}
                      alt="pen"
                    />
                    <img
                      onClick={() => openDeletePopup(id)}
                      className="w-[20px] cursor-pointer hover:w-[22px] "
                      src={Delete}
                      alt="Delete"
                    />
                  </div>
                </div>

                <div className=" flex gap-2">
                  <p className="mb-0">{can_read === '1' ? 'Can Read' : 'Cannot Read'}</p>
                  <p className="mb-0">{can_write === '1' ? 'Can Write' : 'Cannot Write'}</p>
                  <p className="mb-0">{can_speak === '1' ? 'Can Speak' : 'Cannot Speak'}</p>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className=" hidden md:block">
        {percentageDataToAddArray?.faculity_language === "yes" && (
          <div className=" flex  gap-2 justify-start items-start mt-[20px] w-full">
            <div className=" w-full flex  gap-2 justify-start items-start text-[#737bb5] font-semibold">
              <div className=" w-[19%]  h-[40px] flex items-center">
                <p className=" mb-0">Languages</p>
              </div>
              <div className=" w-[19%]  h-[40px] flex items-center">
                <p className=" mb-0">Proficiency</p>
              </div>
              <div className=" w-[19%]  h-[40px] flex items-center">
                <p className=" mb-0">Read</p>
              </div>
              <div className=" w-[19%]  h-[40px] flex items-center">
                <p className=" mb-0">Write</p>
              </div>
              <div className=" w-[19%]  h-[40px] flex items-center">
                <p className=" mb-0">Speak</p>
              </div>
              <div className=" w-[5%]  h-[40px] flex items-center">
                {/* <p className=" mb-0">Speak</p> */}
              </div>
            </div>
          </div>
        )}

        <hr />

        <div className=" flex flex-col  gap-2 justify-start items-start mt-[20px] w-full">
          {userDataArray?.language_data?.map(
            ({
              id,
              language_text,
              proficiency,
              can_read,
              can_write,
              can_speak,
            }) => {
              return (
                <div
                  key={id}
                  className=" w-full flex  gap-2 justify-start items-start "
                >
                  <div className=" w-[19%]  h-[40px] flex items-center">
                    <p className=" mb-0 font-bold">{language_text}</p>
                  </div>
                  <div className=" w-[19%]  h-[40px] flex items-center">
                    <p className=" mb-0 font-bold">{proficiency}</p>
                  </div>
                  <div className=" w-[19%]  h-[40px] flex items-center pl-2">
                    {parseInt(can_read) === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-[#737bb5]"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x text-[#737bb5]"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    )}
                  </div>
                  <div className=" w-[19%]  h-[40px] flex items-center pl-2">
                    {parseInt(can_write) === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-[#737bb5]"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x text-[#737bb5]"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    )}
                  </div>
                  <div className=" w-[18%]  h-[40px] flex items-center pl-3">
                    {parseInt(can_speak) === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-[#737bb5]"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x text-[#737bb5]"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    )}
                  </div>
                  <div className=" w-[6%] h-[40px] flex items-center gap-3">
                    <img
                      onClick={() => openEditPopup(id)}
                      className="w-[16px] cursor-pointer hover:w-[20px] "
                      src={Pen}
                      alt="pen"
                    />
                    <img
                      onClick={() => openDeletePopup(id)}
                      className="w-[20px] cursor-pointer hover:w-[22px] "
                      src={Delete}
                      alt="Delete"
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Language);
