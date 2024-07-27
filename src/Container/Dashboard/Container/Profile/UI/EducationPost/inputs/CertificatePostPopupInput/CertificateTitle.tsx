import { editCertificateDataJobValues, editEducationDataJobValues } from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { TextInputValidEmployer } from "@Container/Dashboard/Container/functions/functions";
import { useSelector, useDispatch } from "react-redux";


export const CertificateTitle = () => {
  const { editCertificateData } = useSelector((state: any) => state.myProfileEducationSlice);


  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const inputValue = e.target.value;

    if (TextInputValidEmployer(inputValue)) {
      if (inputValue ?? false) {
        dispatch(
          editCertificateDataJobValues({
            certificateTitle: inputValue,
          })
        );
      } else {
        dispatch(
          editCertificateDataJobValues({
            certificateTitle: "",
          })
        );
      }
    }
  };

  return (
    <div className=" w-[100%] flex flex-col gap-2 col-span-2 md:col-span-1">
      <label
        htmlFor="instituteNameEducationEdit"
        className=" postJobInputTitle font-semibold text-black "
      >
        Certificate Title *
      </label>
      <input
      autoComplete="off"
      placeholder="Enter Certificate Title..."
        required
        onChange={(e) => handleChange(e)}
        type="text"
        id="instituteNameEducationEdit"
        name="jobTitle"
        className=" p-2  sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editCertificateData.certificateTitle}
      />
    </div>
  );
};
