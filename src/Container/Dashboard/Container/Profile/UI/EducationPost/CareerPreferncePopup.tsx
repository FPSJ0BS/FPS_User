import { useSelector, useDispatch } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalCareerPreferenceModal,
  closeModalLanguageEditModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import {
  getCareerPreferenceDetails,
  postSubmitCareerPreferenceDetails,
} from "@/api/api";
import Loader from "@Container/Dashboard/Loader/laoder";
import Select from "react-select";
import { SelectLocation } from "./inputs/CareerPreferenceInput/SelectLocation";
import { PreferredRole } from "./inputs/CareerPreferenceInput/PreferredRole";
import { PreferredShift } from "./inputs/CareerPreferenceInput/PreferredShift";
import { JobType } from "./inputs/CareerPreferenceInput/JobType";
import { EmploymentType } from "./inputs/CareerPreferenceInput/EmploymentType";
import { Salary } from "./inputs/CareerPreferenceInput/Salary";

function CareerPreferncePopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const dispatch = useDispatch();
  const [buttonLoad, setButtonLoad] = useState(false);
  const [loaderState, setLoaderState] = useState(false);

  const [careerPref, setCarrerPref] = useState([]);

  const [cityPref, setCityPref] = useState([]);
  const [salaryPref, setsalaryPref] = useState([]);



  useLayoutEffect(() => {
    setLoaderState(true);
    const fetchSingleLanguageDetails = async () => {
      const res = await getCareerPreferenceDetails(userId);

      if (res?.data?.status) {
        const career = await res?.data?.data?.career_preferences;
        const city = await res?.data?.data?.city_preferences;
        const salary = await res?.data?.data?.salary_preferences[0];

        await setCarrerPref(career);
        await setCityPref(city);
        await setsalaryPref(salary);

        setLoaderState(false);
      } else {
        console.error(res);
      }
    };

    fetchSingleLanguageDetails();
  }, []);

  const [locationArray, setLocationArray] = useState([]);
  const [roleArray, setRoleArray] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [selectedShift, setSelectedShift] = useState([]);
  const [jobType, setSelectedJobType] = useState([]);
  const [empType, setSelectedEmpType] = useState([]);

  // useEffect(() => {
  //   console.log("locationArray", locationArray);
  //   console.log("roleArray", roleArray);
  //   console.log("selectedSalary", selectedSalary?.id);
  //   console.log("selectedShift", selectedShift);
  //   console.log("jobType", jobType);
  //   console.log("empType", empType.id);

  // }, [
  //   locationArray,
  //   roleArray,
  //   selectedSalary,
  //   selectedShift,
  //   jobType,
  //   empType,
  // ]);

  const getAllIds = () => {
    // Assuming empType, jobType, selectedShift, and roleArray are defined as state variables
    const empTypeIds = empType?.id ? [empType.id] : [];
    const jobTypeIds = jobType?.id ? [jobType.id] : [];
    const selectedShiftIds = selectedShift?.id ? [selectedShift.id] : [];

    // Accumulate all IDs from roleArray into an array
    const roleArrayIds = roleArray?.map((item) => item.id) || [];

    // Concatenate all arrays and join with comma to form a single string
    const allIds = [
      ...empTypeIds,
      ...jobTypeIds,
      ...selectedShiftIds,
      ...roleArrayIds,
    ].join(",");

    return allIds;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoad(true);

    const allId = await getAllIds();
    const locationdata = await locationArray?.map((item) => item.id).join(",");
    const salaryId = selectedSalary?.id;
    const roleArrayIds = roleArray?.map((item) => item.id) || [];
    const loca = locationArray.map(item => Number(item.id))
    try {

      const res = await postSubmitCareerPreferenceDetails({
        facultyID: userId,
        job_role: parseInt(roleArrayIds[0]),
        preferred_city: loca,
        preferred_salary: salaryId,
        job_type: parseInt(jobType?.id),
        preferred_shift: parseInt(selectedShift?.id),
        nature_of_employment: parseInt(empType?.id),


      });

      if (res?.data?.status) {
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalCareerPreferenceModal());
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
        onClick={() => dispatch(closeModalCareerPreferenceModal())}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Career Preference
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        {loaderState ? (
          <div className=" h-full w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <form className="w-full h-full p-5" onSubmit={handleSubmit}>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 h-[85%]  w-full border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain">
              <SelectLocation
                locationArray={locationArray}
                setLocationArray={setLocationArray}
              />
              <PreferredRole
                roleArray={roleArray}
                setRoleArray={setRoleArray}
              />
              <Salary setSelectedSalary={setSelectedSalary} />
              <PreferredShift setSelectedShift={setSelectedShift} />
              <JobType setSelectedJobType={setSelectedJobType} />
              <EmploymentType setSelectedEmpType={setSelectedEmpType} />
            </div>
            <button
              disabled={locationArray.length < 1 || roleArray.length < 1}
              type="submit"
              className=" mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
            >
              {buttonLoad ? "Submitting..." : "Save Career Preferences"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CareerPreferncePopup;
