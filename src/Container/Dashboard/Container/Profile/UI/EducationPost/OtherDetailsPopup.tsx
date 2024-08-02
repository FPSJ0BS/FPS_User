import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@Assets/Icons/remove.png";
import {
  closeModalOtherDetailsModal,
  toggleRefetchProfile,
} from "@/Redux/Dashboard/MyProfile/Education/EducationSlice";
import { Toast } from "@Utils/Toast";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { postOtherDetails } from "@/api/api";

function OtherDetailsPopup() {
  const { userData } = useGlobalContext();
  const userId = userData?.UID;
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );
  const dispatch = useDispatch();
  const [buttonLoad, setButtonLoad] = useState(false);

  const popupCloseFunc = async () => {
    await dispatch(closeModalOtherDetailsModal());
  };

  const [formData, setFormData] = useState({
    bio: userDataArray?.other_details?.bio || "",
    address: userDataArray?.other_details?.address || "",
    hometown: userDataArray?.other_details?.hometown || "",
    pincode: userDataArray?.other_details?.pincode || "",
    faculityID: userId,
    gender: userDataArray?.other_details?.gender || "",
    dob: userDataArray?.other_details?.dob || "",
    banner: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "banner") {
      setFormData({ ...formData, banner: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
 

   

    try {
      setButtonLoad(true);
      const res = await postOtherDetails(formDataToSend);

      if (res?.data?.status) {
        dispatch(toggleRefetchProfile());
        await dispatch(closeModalOtherDetailsModal());
        Toast("success", res?.data?.message);
        setButtonLoad(false);
      } else {
        Toast("error", res?.data?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="TrackPopup h-full w-[100vw] md:w-[65vw] right-0 z-50 flex justify-end fixed">
      <img
        onClick={popupCloseFunc}
        className="cursor-pointer absolute sm:left-10 top-[30px]"
        src={CloseIcon}
        alt="close"
      />

      <div className="bg-white h-full w-[100%] md:w-[90%] md:rounded-l-[100px] shadow-lg flex flex-col items-center py-4">
        <h4 className="font-bold underline border-solid border-b-[1px]">
          Other Details
        </h4>
        <div className="w-full border-b-[1.5px] border-dashed border-[#4a4e69] mt-6"></div>
        <div className="h-[85%] w-[90%] border-1 border-solid border-gray-200 p-3 rounded-xl overflow-y-auto handleScrollbarMain mt-[30px]">
          <form
            onSubmit={handleSubmit}
            className=" p-6 rounded  grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="address"
              >
                Address
              </label>
              <input
                required
                placeholder="Enter Address ..."
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="hometown"
              >
                Hometown
              </label>
              <input
                required
                placeholder="Enter Hometown ..."
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="hometown"
                name="hometown"
                value={formData.hometown}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="pincode"
              >
                Pincode
              </label>
              <input
                required
                placeholder="Enter Pincode ..."
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="number"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                required
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                required
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="banner"
              >
                Banner
              </label>
              <input
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="file"
                id="banner"
                name="banner"
                onChange={handleChange}
              />
            </div>

            <div className=" col-span-2">
              <label
                className="block text-sm font-semibold text-black"
                htmlFor="bio"
              >
                Bio
              </label>
              <textarea
                required
                placeholder="Enter Bio ..."
                className="w-[100%] mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              {buttonLoad ? "Submitting Details ..." : "Submit Details"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtherDetailsPopup;
