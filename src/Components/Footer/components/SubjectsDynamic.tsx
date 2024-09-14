import { getSubjectsForFooter } from "@/api/api";
import { AppRoute } from "@Navigator/AppRoute";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";

const SubjectsDynamic = () => {
  const { subjectText } = useSelector((state: any) => state.appliedJobSlice);
const navigate = useNavigate()


  const [allData, setAllData] = useState({
    jobCount: "",
    functionText: "",
    allCity: [],
    cityName: "",
    otherSubject: [],
  });

  const changeName = (city, count) => {
    setAllData({
      ...allData,
      cityName: city,
      jobCount: count,
    });
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await getSubjectsForFooter(subjectText);

        if (res?.data?.status) {
          console.log("res", res?.data?.data?.otherSubject);
          const jobCount = res?.data?.data?.searchResults[0]?.jobs;
          const functionText = res?.data?.data?.searchResults[0]?.function;
          const allCity = res?.data?.data?.allCity;
          const otherSubject = res?.data?.data?.otherSubject;
          setAllData({
            ...allData,
            jobCount,
            functionText,
            allCity,
            otherSubject,
          });
        }
      } catch (error) {
        console.log("subjects dynamic", error);
      }
    };

    if (subjectText) {
      fetchSubjects();
    }
  }, [subjectText]);

  const nav = (fun, city) => {

    const main = {
      function : fun,
      city
    }


    navigate({
      pathname: AppRoute.Find_Jobs,
      search: createSearchParams(main).toString(),
    });



  }

  return (
    <div className=" w-full min-h-[400px] flex justify-center items-start ">
      <div className=" w-[800px] min-h-full p-5 border-2 border-solid flex flex-col gap-4 ">
        <h3 className=" text-white font-semibold text-[24px] leading-[1.4em]">
          Apply to {allData?.jobCount} {allData?.functionText} Jobs{" "}
          {allData?.cityName ? `in ${allData?.cityName}` : ""} on Tallento.ai
        </h3>
        <div className=" flex gap-3 flex-wrap">
          {allData?.allCity?.map(({ name, jobs_count }, index) => {
            return (
              <p
                onClick={() => changeName(name, jobs_count)}
                key={index}
                className=" text-[18px] text-white hover:underline cursor-pointer"
              >
                {name}
              </p>
            );
          })}
        </div>
        <hr className=" text-white" />
        <div className=" grid grid-cols-2 gap-3">
          {allData?.otherSubject?.map(({ function: fun, ID }) => {
            return (
              <div onClick={() => nav(fun, allData?.cityName)} key={ID} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot text-white"
                >
                  <circle cx="12.1" cy="12.1" r="1" />
                </svg>

                <p className=" text-[15px] text-white hover:underline cursor-pointer tracking-wider ">
                  {fun}{" "}
                  {allData?.cityName ? `jobs in ${allData?.cityName}` : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectsDynamic;
