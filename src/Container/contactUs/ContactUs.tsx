import { AppConst } from "@/Enum/AppConst";
import BaseLocationIFrame from "@Components/BaseLocation/BaseLocation";
import SEO from "@Components/Seo/Seo";
import SocialMediaLinks from "@Const/SocialMediaLinks";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useContactUs from "@Hooks/Mutation/useContactUs";
import { IContactUs } from "@Type/ProfileType";
import { Toast } from "@Utils/Toast";
import { EMAIL_REGEX } from "@Utils/Validate";
import { memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import PHONEICON from "@Assets/Icons/phone.png";

const ContactUs = () => {
  const { userData } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUs>();

  const { mutateAsync } = useContactUs({});

  const [formDataValues, setFormDataValues] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataValues({
      ...formDataValues,
      [name]: value,
    });
  };

  const onSubmitData = (event) => {
    event.preventDefault();
    const _data = { ...formDataValues, UID: userData?.UID ? userData?.UID : 103082 };
    mutateAsync(_data).then((res) => {
      if (res?.status === "success") {
        Toast("succes", res?.message);
      } else {
        Toast("error", res?.message);
      }
    });
  };

  return (
    <>

      <SEO
        title={`Contact Us | ${AppConst.LogoName} `}
        description={`If you are a job seeker and would like to contact us visit our official website ${AppConst.LogoName}`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Contact Us"}
        type={"Contact Us Page"}
      />

      <div className="h-[90vh] flex w-full justify-center items-center">
        <div></div>

        <div className=" w-[80%] h-[70vh] flex  md:flex-row shadow-lg rounded-[20px]">
          <div className=" hidden   relative w-[40%] md:h-[75vh] lg:h-[70vh] bg-black rounded-[20px] p-[30px] md:flex flex-col gap-3 overflow-hidden">
            <h2 className="text-white text-[25px] font-medium">
              Contact Information
            </h2>

            <div className=" mt-[50px] gap-[50px] flex flex-col ">
              <div className=" flex items-center gap-4 w-full">
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
                  className="lucide lucide-phone text-white w-[30%]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className=" flex flex-col w-[70%]">
                  <p className=" font-semibold text-white">
                    {AppConst.MobileNumberOne}
                  </p>
                  <p className=" font-semibold text-white">
                    {AppConst.MobileNumberSecond}
                  </p>
                </div>
              </div>

              <div className=" flex gap-4 w-full ">
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
                  className="lucide lucide-mail text-white w-[30%]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <p className=" break-all flex w-[70%] font-semibold text-white">{AppConst.Email}</p>
              </div>

              <div className=" flex gap-4 w-full ">
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
                  className="lucide lucide-map-pin text-white w-[30%]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className=" z-50 font-semibold text-white w-[70%]">{AppConst.Address}</p>

              </div>
            </div>
            <div className=" mt-[80px] flex gap-5">
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
                className="lucide lucide-instagram text-white"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>

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
                className="lucide lucide-linkedin text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>

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
                className="lucide lucide-youtube text-white"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>

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
                className="lucide lucide-facebook text-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div className=" absolute w-[200px] h-[200px] bg-[#413f3f] bottom-[-5vw] right-[-5vw] rounded-full opacity-50"></div>
            <div className=" absolute w-[150px] h-[150px] bg-[#413f3f] bottom-[2vw] right-[2vw] rounded-full opacity-50"></div>
          </div>

          <div className=" md:w-[60%]  bg-white rounded-[20px] p-[30px]">
            <form onSubmit={onSubmitData} className="grid  md:grid-cols-2 gap-x-5 gap-y-10">
              <input
              required
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formDataValues.name}
                onChange={handleChange}
                className="border-1 border-solid border-black rounded-[5px] md:col-span-1 col-span-2"
              />
              <input
              required
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formDataValues.email}
                onChange={handleChange}
                className="border-1 border-solid border-black rounded-[5px] md:col-span-1 col-span-2"
              />
              <input
              required
                type="text"
                name="number"
                placeholder="Enter Number"
                value={formDataValues.number}
                onChange={handleChange}
                className="border-1 border-solid border-black rounded-[5px] md:col-span-1 col-span-2"
              />
              <textarea
              required
                name="message"
                placeholder="Enter Message"
                value={formDataValues.message}
                onChange={handleChange}
                className="border-1 border-solid border-black rounded-[5px] p-[10px] col-span-2"
              />
              <div className="col-span-2 flex justify-center items-center">
                <button className="w-[50%] py-3 font-semibold bg-black text-white border-white border-2 border-solid">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ContactUs);
