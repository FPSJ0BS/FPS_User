import { editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";
import { useSelector, useDispatch } from "react-redux";


export const InstituteNameEducationEdit = () => {
  const { editEducationData } = useSelector((state: any) => state.myProfileEducationSlice);


  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const inputValue = e.target.value;

    if (TextInputValidEmployer(inputValue)) {
      if (inputValue ?? false) {
        dispatch(
          editEducationDataJobValues({
            instituteName: inputValue,
          })
        );
      } else {
        dispatch(
          editEducationDataJobValues({
            instituteName: "",
          })
        );
      }
    }
  };

  return (
    <div className=" sm:w-[100%] w-[250px] flex flex-col gap-2 ">
      <label
        htmlFor="instituteNameEducationEdit"
        className=" postJobInputTitle font-semibold text-black "
      >
        University/Institute Name *
      </label>
      <input
      autoComplete="off"
      placeholder="Enter University/Institute Name..."
        required
        onChange={(e) => handleChange(e)}
        type="text"
        id="instituteNameEducationEdit"
        name="jobTitle"
        className=" p-2  sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editEducationData.instituteName}
      />
    </div>
  );
};
