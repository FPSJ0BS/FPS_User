import BannerCounter from "@Components/aboutPage/BannerCounter";
import Iconbox3 from "@Components/aboutPage/Iconbox3";
import Review from "@Components/aboutPage/Review";
import Testimonial from "@Components/aboutPage/Testimonial";
import img1 from "@Assets/images/job/work-icon-1.jpg";
import img2 from "@Assets/images/job/work-icon-2.jpg";
import img3 from "@Assets/images/job/work-icon-3.jpg";
import Partner from "@Components/aboutPage/Partner";
import Breadcrumb from "@Components/Breadcrump";
import React, { memo } from "react";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import { Link } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";
import img4 from "@Assets/images/job/work-icon-4.svg"
const Aboutus = () => {
  return (
    <React.Fragment>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={`About ${AppConst.LogoName}`}
        type={"About us Page"}
      />
      <Breadcrumb title="About Us" />
      <Review />
      <BannerCounter />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="container">
          <div className="title-iconbox style-3 stc">
            <h4 className="h4">
              Why Choose {AppConst.LogoName} for Your Job Search?
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-4">
                <div className="tf-iconbox style-3 cl4 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <a>Reputation and Reliability</a>
                    </h6>
                    <p className="whitespace-pre-wrap">
                      We exclusively partner with reputed organizations in the
                      education sector, ensuring you have access to trustworthy
                      job opportunities.
                    </p>
                    <button>
                      <Link to={AppRoute.Home}>
                        Start Now&nbsp;
                        <span className="icon-arrow-right2" />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl4 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <a>AI-Powered Efficiency</a>
                    </h6>
                    <p className="whitespace-pre-wrap">
                      Save time and effort with AI-enhanced job search tools
                      that deliver personalized recommendations and streamline
                      the application process.
                    </p>
                    <button>
                      <Link to={AppRoute.Home}>
                        Start Now&nbsp;
                        <span className="icon-arrow-right2" />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl4 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img3} alt="img" />
                    </div>
                  </div>
                  <div className="box-content ">
                    <h6 className="box-title">
                      <a>Safety and Security</a>
                    </h6>
                    <p className="whitespace-pre-wrap">
                      Rest assured knowing that all organizations on our
                      platform undergo thorough verification to ensure your
                      safety and satisfaction.
                    </p>
                    <button>
                      <Link to={AppRoute.Home}>
                        Start Now&nbsp;
                        <span className="icon-arrow-right2" />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl4 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img4} alt="img" />
                    </div>
                  </div>
                  <div className="box-content ">
                    <h6 className="box-title">
                      <a>Expert Support</a>
                    </h6>
                    <p className="whitespace-pre-wrap">
                      Benefit from the guidance and support of our team of job
                      search experts, dedicated to helping you find the perfect
                      job.
                    </p>
                    <button>
                      <Link to={AppRoute.Home}>
                        Start Now&nbsp;
                        <span className="icon-arrow-right2" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Iconbox3 />
      <Partner />
    </React.Fragment>
  );
};

export default memo(Aboutus);
