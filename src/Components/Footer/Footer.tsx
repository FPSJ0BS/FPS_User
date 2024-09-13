import { NavLink } from "react-router-dom";
import Logo from "@Assets/Icons/tallento white (1).png";
import AppleStore from "@Assets/images/AppleStore.webp";
import GoogleAppleStore from "@Assets/images/GoogleAppleStore.webp";
import { AppRoute } from "@Navigator/AppRoute";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import SocialMediaLinks from "@Const/SocialMediaLinks";
import { AppConst } from "@/Enum/AppConst";
import { StorageConst } from "@Const/StorageConst";
import Imag from "@Components/Image/Image";
import { memo } from "react";
import SubjectsDynamic from "./components/SubjectsDynamic";
import { useSelector } from "react-redux";
const Footer = () => {
  const { userData } = useGlobalContext();
  const { subjectText } = useSelector((state: any) => state.appliedJobSlice);

  return (
    <footer className="footer bg-[#090c0f] ">

      { subjectText && <SubjectsDynamic />}
      
      <div className="top-footer">
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
            <div className="footer-logo col-lg-5 col-12">
              <Imag
                className="site-logo"
                id="trans-logo"
                src={Logo}
                alt="Image"
              />
            </div>

            <div>
              <div className="wd-social d-flex flex-col aln-start">
                <span className=" text-white">Follow Us:</span>
                <ul className="list-social d-flex aln-center">
                  <li>
                    <NavLink
                      className={`text-black`}
                      to={SocialMediaLinks.facebook}
                      aria-label={`Visit ${AppConst.LogoName} Facebook page`}
                      target="_blank"
                    >
                      <i className="icon-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={SocialMediaLinks.linkedin}
                      aria-label={`Visit ${AppConst.LogoName} on LinkedIn`}
                      target="_blank"
                    >
                      <i className="icon-linkedin2"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={SocialMediaLinks.instagram}
                      aria-label={`View ${AppConst.LogoName} on instagram`}
                      target="_blank"
                    >
                      <i className="icon-instagram1"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={SocialMediaLinks.youtube}
                      aria-label={`Visit ${AppConst.LogoName} on Youtube`}
                      target="_blank"
                    >
                      <i className="icon-youtube"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
                <div className="icon-infor d-flex aln-center">
                  <div className="icon">
                    <span className="icon-call-calling">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </span>
                  </div>
                  <div className="content">
                    <p className=" text-white">Need help? </p>
                    <h6>
                      <NavLink
                        to={`tel:${AppConst.MobileNumberSecond}`}
                        className="fw-bolder text-white"
                        target="_blank"
                      >
                        {AppConst.MobileNumberSecond}
                      </NavLink>
                    </h6>
                    <h6>
                      <NavLink
                        to={`tel:${AppConst.MobileNumberOne}`}
                        className="fw-bolder text-white"
                        target="_blank"
                      >
                        {AppConst.MobileNumberOne}
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <p className="text-white font-light text-[13px]">
                  <p className="text-white font-extrabold text-[15px] ">Find Jobs or Hire Candidates with Tallento.ai</p>
                  {` 
Discover Tallento.ai, the innovative online educational job portal for IIT JEE, NEET, schools, colleges, universities, and other educational institutes. Connect with top talent and premier educational opportunities effortlessly.`}
                </p>
                {/* <div className="ft-icon">
                  <i className="icon-map-pin"></i>
                  {AppConst.Address}
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="footer-cl-2">
                <h6 className="ft-title text-white">Company</h6>
                <ul className="navigation-menu-footer ">
                  <li>
                    <NavLink className={`text-white`} to={AppRoute.Home}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`text-white`} to={AppRoute.About_Us}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`text-white`} to={AppRoute.Blog}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`text-white`} to={AppRoute.Contact_Us}>
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`text-white`}
                      to={"https://employer.fpsjob.com"}
                    >
                      Employer
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-cl-3">
                <h6 className="ft-title text-white">Quick Links</h6>
                <ul className="navigation-menu-footer">
                  <li>
                    <NavLink className={`text-white`} to={AppRoute.Faqs}>
                      FAQS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`text-white`}
                      to={AppRoute.Terms_of_use}
                    >
                      Terms Of Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`text-white`}
                      to={AppRoute.Privacy_Policy}
                    >
                      Privacy Policy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={`text-white`}
                      to={AppRoute.Refund_Policy}
                    >
                      Refund Policy
                    </NavLink>
                  </li>
                  {!userData?.UID && (
                    <>
                      <li>
                        <NavLink className={`text-white`} to={AppRoute.SignUp}>
                          Sign Up
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={`text-white`} to={AppRoute.Login}>
                          Sign In
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-12 ">
              <div className="footer-cl-5">
                <h6 className="ft-title text-white ">Download Tallento App</h6>
                <ul className="ft-download gap-2">
                  <li>
                    <NavLink
                      className={`text-white `}
                      to={StorageConst.APP_STORE_LINK}
                    >
                      <img
                      className=" border-1 border-solid "
                        src={AppleStore}
                        alt="images"
                        // width={"106px"}
                        // height={"31px"}
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`text-white`}
                      to={StorageConst.PLAY_STORE_LINK}
                    >
                      <img className="border-1 border-solid" src={GoogleAppleStore} alt="images" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="bt-left">
                <div className="copyright">
                  {` All rights reserved © 2024 FPS JOB PRIVATE LIMITED | CIN U93090PB2018PTC048543 | GSTIN: 08AADCF5402H1ZW`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
