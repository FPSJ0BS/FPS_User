import { editEducationDataJobValues, editEmploymentDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";
import { useSelector, useDispatch } from "react-redux";


export const StartdateEmploymentEdit = () => {
  const { editEmploymentData } = useSelector((state: any) => state.myProfileEducationSlice);


  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const inputValue = e.target.value;


      if (inputValue ?? false) {
        dispatch(
          editEmploymentDataJobValues({
            startDate: inputValue,
          })
        );
      } else {
        dispatch(
          editEmploymentDataJobValues({
            startDate: "",
          })
        );
      }
    
  };

  return (
    <div className=" sm:w-[100%] w-[250px] flex flex-col gap-2 ">
      <label
        htmlFor="startdateEmploymentEdit"
        className=" postJobInputTitle font-semibold text-black "
      >
        Start Date *
      </label>
      <input
      autoComplete="off"
      placeholder="Enter startDate..."
        required
        onChange={(e) => handleChange(e)}
        type="date"
        id="startdateEmploymentEdit"
        name="jobTitle"
        className=" p-2  sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEmploymentData.startDate}
      />
    </div>
  );
};
