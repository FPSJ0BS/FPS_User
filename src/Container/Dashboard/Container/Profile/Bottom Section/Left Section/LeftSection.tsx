import { memo } from "react";
import { useSelector } from "react-redux";
import CircularProgressBar from "./Percentage";

function LeftSection() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`.${sectionId}`);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const { percentageDataToAddArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const percentage = percentageDataToAddArray?.percentage;

  return (
    <div className="fixed lg:left-[26.5%] xl:left-[22%] 2xl:left-[300px] w-[18%] bg-white rounded-[20px] min-h-[200px] p-[10px] flex flex-col gap-2 border-1 border-solid border-gray-200">
      <div className=" flex items-center justify-between w-full h-[80px]">
        <h6 className="font-semibold px-2 2xl:text-[20px] underline cursor-default">
          Quick Links
        </h6>
        <div className=" cursor-default ">
          <CircularProgressBar percentage={percentage} />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("resume")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Resume"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.cv_doc === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.cv_doc === "yes" ? "Update" : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("education")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Education"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_education === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_education === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("employment")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Employment"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_experience === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_experience === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Skills"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_skill === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_skill === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("certificates")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Certificates"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_certificate === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_certificate === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("language")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Language"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_language === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_language === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("career-preference")}
        >
          <p className="mb-0 font-semibold cursor-pointer">
            {"Career Preference"}
          </p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.faculity_career_preferences === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.faculity_career_preferences === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("other-details")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Other Details"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.other_details === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.other_details === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-pointer"
          onClick={() => scrollToSection("social-media")}
        >
          <p className="mb-0 font-semibold cursor-pointer">{"Social Media"}</p>
          <div className=" flex items-center gap-2">
            {percentageDataToAddArray?.social_link === "no" && (
              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-big-up-dash text-green-600"
                >
                  <path d="M9 19h6" />
                  <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
                </svg>
                <p className="mb-0 text-green-600 font-bold ">{percentageDataToAddArray?.perPercentage}%</p>
              </div>
            )}
            <button
              onClick={() => scrollToSection("education")}
              className="cursor-pointer text-[#9c6644] font-bold"
            >
              {percentageDataToAddArray?.social_link === "yes"
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LeftSection);
