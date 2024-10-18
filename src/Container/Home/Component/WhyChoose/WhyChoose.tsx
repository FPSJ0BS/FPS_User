import AI from "@Assets/Icons/Why Choose/AI.png";
import SAFETY from "@Assets/Icons/Why Choose/Safety.png";
import EXPERT from "@Assets/Icons/Why Choose/expert.png";
import REPUTATION from "@Assets/Icons/Why Choose/reputation.png";

const WhyChoose = () => {
  return (
    <div className=" hidden lg:flex flex-col gap-5 py-[50px] px-[40px] 2xl:px-[100px] w-full bg-black">
      <div className=" flex flex-col gap-2">
        <h2 className=" text-white text-[40px] font-bold">
          Why Choose Tallento.ai for Your Job Search?
        </h2>
        <p className=" text-[14px] text-[#cccccc]">
          Recruitment made easy for candidates searching for IIT JEE, NEET
          Coaching jobs, Edtech jobs, School teacher jobs & Other Education
          Sector Jobs
        </p>
      </div>
      <div className=" flex gap-5 py-[50px]  w-full">
        <div className=" w-[25%] flex flex-col gap-5">
          <img src={REPUTATION} className="w-[25%]" alt="reputation" />

          <div className=" flex flex-col gap-2">
            <h3 className=" text-white text-[20px] font-semibold">
              Reputation And Reliability
            </h3>
            <p className=" text-[#6d7275]">
              We exclusively partner with reputed organizations in the education
              sector, ensuring you have access to trustworthy job opportunities.
            </p>
          </div>
        </div>

        <div className=" py-[130px] h-full border-1 border-solid border-[#343a40]"></div>

        <div className=" w-[25%] flex flex-col gap-5">
          <img src={AI} className="w-[25%]" alt="reputation" />

          <div className=" flex flex-col gap-2">
            <h3 className=" text-white text-[20px] font-semibold">
              AI-Powered Efficiency
            </h3>
            <p className=" text-[#6d7275]">
              Save time & effort with AI-enhanced job search tools that deliver
              personalized recommendations & streamline the application process.
            </p>
          </div>
        </div>

        <div className=" py-[130px] h-full border-1 border-solid border-[#343a40]"></div>

        <div className=" w-[25%] flex flex-col gap-5">
          <img src={SAFETY} className="w-[25%]" alt="reputation" />

          <div className=" flex flex-col gap-2">
            <h3 className=" text-white text-[20px] font-semibold">
              Safety And Security
            </h3>
            <p className=" text-[#6d7275]">
              Rest assured knowing that all organizations on our platform
              undergo thorough verification to ensure your safety and
              satisfaction.
            </p>
          </div>
        </div>

        <div className=" py-[130px] h-full border-1 border-solid border-[#343a40]"></div>

        <div className=" w-[25%] flex flex-col gap-5">
          <img src={EXPERT} className="w-[25%]" alt="reputation" />

          <div className=" flex flex-col gap-2">
            <h3 className=" text-white text-[20px] font-semibold">
              Expert Support
            </h3>
            <p className=" text-[#6d7275]">
              Benefit from the guidance and support of our team of job search
              experts, dedicated to helping you find the perfect job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
