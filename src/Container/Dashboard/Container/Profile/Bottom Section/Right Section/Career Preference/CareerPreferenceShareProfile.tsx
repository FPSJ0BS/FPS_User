import { memo } from "react";
import {  useSelector } from "react-redux";
import CareerPreferenceIcon from "@Assets/Icons/Profile/CITY_PREFERENCES.png";

function CareerPreferenceShareProfile() {
  const { userDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );




 
  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full career-preference border-gray-400 border-solid border-2">
      <div className=" flex justify-between items-center gap-2  ">
        <div className=" flex items-center gap-2 h-[40px]">
          <img
            className=" w-[65px]"
            src={CareerPreferenceIcon}
            alt="Education-Icon"
          />
          <h6 className=" w-ful flex gap-2 cursor-default font-bold">
            Career Preference
          </h6>
        </div>
        
      </div>
      <hr />

      <div className=" flex flex-col gap-4 justify-start items-start mt-[20px] w-full">
        <div className=" flex flex-col justify-start items-start mb-2 gap-2 w-full">
          <div className=" flex flex-col justify-start items-start w-full">
            <p className=" text-gray-400 font-bold mb-0 capitalize w-full">
              Preferred Location
            </p>
            <div className=" flex gap-2">
              {userDataArray?.city_preferences?.map(
                ({ city_name, id }, index) => {
                  const isLastItem =
                    index === userDataArray.city_preferences.length - 1;
                  return (
                    <p
                      key={id}
                      className="capitalize cursor-pointer text-black font-semibold mb-0"
                    >
                      {city_name}
                      {!isLastItem && ","}
                    </p>
                  );
                }
              )}
            </div>
          </div>

          <div className=" flex flex-col justify-start items-start ">
            <p className=" text-gray-400 font-bold mb-0 capitalize ">
              Preferred Role
            </p>
            <div className=" flex gap-2">
              {userDataArray?.career_preferences?.map(
                ({ carrer_value, carrer_type }, index) => {
                  if (carrer_type === "job_role") {
                    return (
                      <p
                        key={index}
                        className="capitalize cursor-pointer text-black font-semibold mb-0"
                      >
                        {carrer_value}
                      </p>
                    );
                  }
                  return null;
                }
              )}
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[50%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Preferred Annual Salary
              </p>
              <div className=" flex gap-2">
                {userDataArray?.salary_preferences?.map(({ salary }, index) => {
                  return (
                    <p
                      key={index}
                      className="capitalize cursor-pointer text-black font-semibold mb-0"
                    >
                      {salary}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start ">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Employment Type
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "nature_of_employment") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          </div>

          <div className=" flex gap-4 w-full">
            <div className=" flex flex-col justify-start items-start w-[50%]">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Job Type
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "job_type") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start ">
              <p className=" text-gray-400 font-bold mb-0 capitalize ">
                Preferred Shift
              </p>
              <div className=" flex gap-2">
                {userDataArray?.career_preferences?.map(
                  ({ carrer_value, carrer_type }, index) => {
                    if (carrer_type === "preferred_shift") {
                      return (
                        <p
                          key={index}
                          className="capitalize cursor-pointer text-black font-semibold mb-0"
                        >
                          {carrer_value}
                        </p>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CareerPreferenceShareProfile);
