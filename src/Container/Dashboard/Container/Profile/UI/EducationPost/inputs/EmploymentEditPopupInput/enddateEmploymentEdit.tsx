import { editEducationDataJobValues, editEmploymentDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";
import { useSelector, useDispatch } from "react-redux";


export const EnddateEmploymentEdit = () => {
  const { editEmploymentData } = useSelector((state: any) => state.myProfileEducationSlice);


  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const inputValue = e.target.value;


      if (inputValue ?? false) {
        dispatch(
          editEmploymentDataJobValues({
            endDate: inputValue,
          })
        );
      } else {
        dispatch(
          editEmploymentDataJobValues({
            endDate: "",
          })
        );
      }
    
  };

  return (
    <div className=" w-[100%]  flex flex-col gap-2 col-span-2 md:col-span-1">
      <label
        htmlFor="enddateEmploymentEdit"
        className=" postJobInputTitle font-semibold text-black "
      >
        End Date *
      </label>
      <input
      autoComplete="off"
      placeholder="Enter endDate..."
        required
        onChange={(e) => handleChange(e)}
        type="date"
        id="enddateEmploymentEdit"
        name="jobTitle"
        className=" p-2  sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEmploymentData.endDate}
      />
    </div>
  );
};
