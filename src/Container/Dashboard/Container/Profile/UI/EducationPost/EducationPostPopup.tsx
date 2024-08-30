import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import { closeModalEducationModal, closeModalEmploymentAddModal, toggleRefetchProfile } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { postSubmitEducationDetails } from "@/api/api";
import useProfileEducationPost from "@Hooks/Mutation/useProfileEducationPost";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationSchema } from "@/schema/educationSchema";

function EducationPost() {
  const { userData } = useGlobalContext();
  const dispatch = useDispatch();
  const { mutateAsync } = useProfileEducationPost({});
  const [buttonLoad, setButtonLoad] = useState(false);

  const { qualificationDataArray, resultDataArray, educationDataArray } = useSelector((state: any) => state.myProfileEducationSlice);


  const inputRef = useRef(null);


  const {
    register,
    control,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        {
          institute_name: "",
          course: "",
          start_date: "",
          end_date: "",
          currently: false,
          result: "",
          result_type: "",
          type: "",
          specialization: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmitData = async (data) => {
    setButtonLoad(true);
    const educationData = data.education.map((item) => ({
      ...item,
      faculityID: userData?.UID,
      result_type: Number(item.result_type),
      type: Number(item.type),
      course: Number(item.course),
      currently: item.currently ? 1 : 0,
    }));

    try {
      const res = await postSubmitEducationDetails(educationData);
      if (res?.data?.status) {
        dispatch(toggleRefetchProfile())
        await dispatch(closeModalEducationModal());
        Toast("success", res?.data?.message);

      } else {
        Toast("error", res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoad(false);
    }
  };

  const popupCloseFunc = async () => {
    await dispatch(closeModalEducationModal());
  };

  return (
    <div className="TrackPopup h-full w-[100vw] lg:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] lg:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">Add Education Details</h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full overflow-y-auto px-5 py-4 handleScrollbarMain">
          <form onSubmit={handleSubmit(onSubmitData)} className="space-y-6 ">
            {fields.map((item, index) => (
              <div key={item.id} className="space-y-4 border p-4 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black">University/Institute Name</label>
                    <input
                      placeholder="Enter University/Institute Name..."
                      {...register(`education.${index}.institute_name`)}
                      className="h-[50px] mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                    />
                    {errors.education?.[index]?.institute_name && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.institute_name?.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">Course</label>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <select
                        {...register(`education.${index}.course`)}
                        className="mt-1 block h-[50px] w-[100%] p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                      >
                        <option value="" disabled selected>Graduation, Post Graduation ...</option>
                        {qualificationDataArray?.map((qual) => (
                          <option key={qual.ID} value={qual?.ID}>{qual?.qualification}</option>
                        ))}
                      </select>
                      <select
                        {...register(`education.${index}.type`)}
                        className="mt-1 block h-[50px] w-[100%] md:w-[45%] p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                      >
                        <option value="" disabled selected>Enter Type ...</option>
                        {educationDataArray.map((type) => (
                          <option key={type?.id} value={type?.id}>{type?.type}</option>
                        ))}
                      </select>
                    </div>
                    {errors.education?.[index]?.course && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.course?.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black edu-start-date">Start Date</label>
                    <input
                    
                      type="date"
                      {...register(`education.${index}.start_date`)}
                      className="mt-1 h-[50px] block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                    />
                    {errors.education?.[index]?.start_date && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.start_date?.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">End Date</label>
                    <input
                      type="date"
                      {...register(`education.${index}.end_date`)}
                      className="mt-1 h-[50px] block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                    />
                    {errors.education?.[index]?.end_date && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.end_date?.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">Result</label>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <input
                        placeholder="Enter Result..."
                        {...register(`education.${index}.result`)}
                        className="mt-1 h-[50px] block w-[100%] md:w-[60%] p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                      />
                      <select
                        {...register(`education.${index}.result_type`)}
                        className="mt-1 h-[50px] block w-[100%] md:w-[40%] p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                      >
                        <option value="" disabled selected>Enter Type ...</option>
                        {resultDataArray?.map((type) => (
                          <option key={type?.id} value={type?.id}>{type?.type}</option>
                        ))}
                      </select>
                    </div>
                    {errors.education?.[index]?.result && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.result?.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">Specialization</label>
                    <input
                      placeholder="Enter specialization (Agriculture, Biology etc ...)"
                      {...register(`education.${index}.specialization`)}
                      className="mt-1 h-[50px] block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                    />
                    {errors.education?.[index]?.specialization && (
                      <span className="text-red-500 text-sm">{errors.education?.[index]?.specialization?.message}</span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black">Currently Pursuing?</label>
                  <input
                    type="checkbox"
                    {...register(`education.${index}.currently`, { setValueAs: (v) => (v ? 1 : 0) })}
                    className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                  />
                </div>
                {index > 0 && (
                  <div className="w-full flex justify-end">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="mt-2 w-[30%] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col md:flex-row md:gap-2">
              <button
                type="button"
                onClick={() =>
                  append({
                    institute_name: "",
                    course: "",
                    start_date: "",
                    end_date: "",
                    currently: false,
                    result: "",
                    result_type: "",
                    type: "",
                    specialization: "",
                  })
                }
                className="w-[100%] md:w-[30%] mt-4 p-2 bg-blue-500 text-white rounded-md shadow-sm"
              >
                Add More Education
              </button>
              <button
                type="submit"
                className="w-[100%] md:w-[30%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
              >
                {buttonLoad ? "Submitting..." : "Submit Details"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EducationPost;
