import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalEmploymentAddModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { postSubmitEmploymentDetails } from "@/api/api";

function EmploymentPostPopup() {
  const { userData } = useGlobalContext();
  const dispatch = useDispatch();
  const [buttonLoad, setButtonLoad] = useState(false);

  const [employmentDetails, setEmploymentDetails] = useState([
    {
      faculityID: userData?.UID,
      organization: "",
      designation: "",
      responsibilities: "",
      start_date: "",
      end_date: "",
      currently: 0,
    },
  ]);

  const [errors, setErrors] = useState<string[]>([]); // Track date errors for each entry

  const handleAddMore = () => {
    setEmploymentDetails([
      ...employmentDetails,
      {
        faculityID: userData?.UID,
        organization: "",
        designation: "",
        responsibilities: "",
        start_date: "",
        end_date: "",
        currently: 0,
      },
    ]);
    setErrors([...errors, ""]);
  };

  const handleDelete = (index) => {
    setEmploymentDetails(employmentDetails.filter((_, i) => i !== index));
    setErrors(errors.filter((_, i) => i !== index));
  };

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedEmploymentDetails = employmentDetails.map((detail, i) => {
      // Handle the change for the specific employment detail
      if (i === index) {
        const updatedDetail = {
          ...detail,
          [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
        };

        // Date validation when either date changes
        const { start_date, end_date } = updatedDetail;
        if (
          (name === "start_date" && end_date && start_date > end_date) ||
          (name === "end_date" && start_date && end_date < start_date)
        ) {
          // Clear the end_date if start_date is greater
          updatedDetail.end_date = ""; // Clear end_date on error
          setErrors((prevErrors) => {
            const updatedErrors = [...prevErrors];
            updatedErrors[index] = "Start date must be before end date.";
            return updatedErrors;
          });
        } else {
          setErrors((prevErrors) => {
            const updatedErrors = [...prevErrors];
            updatedErrors[index] = ""; // Clear error if the dates are valid
            return updatedErrors;
          });
        }

        return updatedDetail;
      }
      return detail; // Return unchanged detail
    });

    setEmploymentDetails(updatedEmploymentDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any errors before submitting
    if (errors.some((error) => error !== "")) {
      Toast("error", "Please fix the errors before submitting.");
      return;
    }

    console.log('employmentdetails',employmentDetails);

    const updatedEmploymentDetails = employmentDetails.map((detail) => {
      return {
        ...detail,
        end_date: detail.end_date === "" ? null : detail.end_date, // Replace empty string with null
      };
    });

    setButtonLoad(true);
    try {
      const res = await postSubmitEmploymentDetails(updatedEmploymentDetails);
      if (res?.data?.status) {
        await popupCloseFunc();
        Toast("success", res?.data?.message);
        dispatch(toggleRefetchProfile());
      } else {
        await popupCloseFunc();
        Toast("error", res?.data?.message);
      }
    } catch (error) {
      Toast("error", "An error occurred while submitting.");
    } finally {
      setButtonLoad(false);
    }
  };

  const popupCloseFunc = async () => {
    await dispatch(closeModalEmploymentAddModal());
  };

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-full md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Add Employment Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="w-full overflow-y-auto px-5 py-4 handleScrollbarMain">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {employmentDetails.map((detail, index) => (
              <div
                key={index}
                className="border-1 border-solid p-4 border-gray-300 rounded-lg relative grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                  <label
                    htmlFor="orgId"
                    className="block text-sm font-semibold text-black"
                  >
                    Organization
                  </label>
                  <input
                    required
                    id="orgId"
                    type="text"
                    name="organization"
                    value={detail.organization}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Organization ..."
                    className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                  <label
                    htmlFor="DesgID"
                    className="block text-sm font-semibold text-black"
                  >
                    Designation
                  </label>
                  <input
                    required
                    id="DesgID"
                    type="text"
                    name="designation"
                    value={detail.designation}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Designation ..."
                    className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                  />
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                  <label
                    htmlFor="ResId"
                    className="block text-sm font-semibold text-black"
                  >
                    Responsibilities
                  </label>
                  <input
                    required
                    id="ResId"
                    type="text"
                    name="responsibilities"
                    value={detail.responsibilities}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Responsibilities ..."
                    className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                  />
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                  <label
                    htmlFor="DateId"
                    className="block text-sm font-semibold text-black"
                  >
                    Start Date
                  </label>
                  <input
                    required
                    id="DateId"
                    type="date"
                    name="start_date"
                    value={detail.start_date}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Start Date"
                    className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                  />
                </div>

                {detail.currently === 0 && (
                  <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                    <label
                      htmlFor="endDateid"
                      className="block text-sm font-semibold text-black"
                    >
                      End Date
                    </label>
                    <input
                      required
                      id="endDateid"
                      type="date"
                      name="end_date"
                      value={detail.end_date}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="End Date"
                      className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                    />
                    {errors[index] && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors[index]}
                      </span>
                    )}
                  </div>
                )}

                <label className="flex items-center col-span-2">
                  <input
                    type="checkbox"
                    name="currently"
                    checked={detail.currently === 1}
                    onChange={(e) => handleChange(index, e)}
                    className="mr-2"
                  />
                  Currently Working
                </label>
                <div className="flex justify-end w-full col-span-2">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="w-[30%] mt-5 p-2 bg-red-500 text-white rounded-lg"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row gap-2 col-span-2 md:col-span-1">
              <button
                type="button"
                onClick={handleAddMore}
                className="w-[100%]w-[30%] mt-4 p-2 bg-blue-500 text-white rounded-md shadow-sm"
              >
                Add More Employment
              </button>
              <button
                type="submit"
                className="w-[100%]w-[30%] mt-4 p-2 bg-green-500 text-white rounded-md shadow-sm flex justify-center items-center"
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

export default EmploymentPostPopup;
