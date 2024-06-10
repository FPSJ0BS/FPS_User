import { AppConst } from "@/Enum/AppConst";
import SEO from "@Components/Seo/Seo";
import { AppRoute } from "@Navigator/AppRoute";
import { memo } from "react";
import { Link } from "react-router-dom";

 function Thankyou() {
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Job Application Thank You Page"}
        type={"Web Page"}
      />
      <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 ">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="title-heading text-center my-auto">
              <div className="w-24 h-24  bg-primaryOne rounded-full text-5xl flex align-middle justify-center items-center shadow-sm  mx-auto text-white">
                {/* <MdOutlineThumbUpOffAlt /> */}
                <i className="icon-check" />
              </div>
              <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">
                Thank you for Applying
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                Your application is under review, and we will be in touch soon.
              </p>

              <div className="mt-6 d-flex flex-row gap-3 justify-content-center">
                <Link
                  to={AppRoute.Home}
                  className="btn  hover:bg-primaryOne border-primaryOne hover:border-primaryOne text-primaryOne hover:text-white rounded-full"
                >
                  Back to Home
                </Link>
                <Link
                  to={AppRoute.Find_Jobs}
                  className="btn  hover:bg-primaryOne border-primaryOne hover:border-primaryOne text-primaryOne hover:text-white rounded-full"
                >
                  Find Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default memo(Thankyou);
