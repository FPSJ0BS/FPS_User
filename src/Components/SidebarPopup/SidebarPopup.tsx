import { AppRoute } from "@Navigator/AppRoute";
import logo from "@Assets/tallentologodark.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { navbar } from "@Const/fakeData/navbar";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import Imag from "@Components/Image/Image";
import SocialMediaLinks from "@Const/SocialMediaLinks";
import { AppConst } from "@/Enum/AppConst";
import { memo } from "react";

const SidebarPopup = ({ handleMobile }: any) => {

  const { userData, setUserLoginData } = useGlobalContext();

  const { data: Category } = useCategoryList({});
  
  const navigate = useNavigate();

  return (
    <div className="menu-mobile-popup">
      <div className="modal-menu__backdrop" onClick={handleMobile}></div>
      <div className="widget-filter">
        <div className="mobile-header">
          <div id="logo" className="logo">
            <Link to={AppRoute.Home}>
              <img className="site-logo" src={logo} alt="Image" />
            </Link>
          </div>
          <span className="title-button-group" onClick={handleMobile}>
            <i className="icon-close"></i>
          </span>
        </div>

        <Tabs className="tf-tab">
          <TabList className="menu-tab">
            <Tab className="user-tag">Menu</Tab>
            <Tab className="user-tag">Categories</Tab>
        
          </TabList>

          <div className="content-tab">
            <TabPanel className="header-ct-center menu-moblie animation-tab">
              <div className="nav-wrap">
                <nav className="main-nav mobile">
                  <ul id="menu-primary-menu" className="menu">
                    {userData?.UID
                      ? navbar.map((item, index) => {
                          return (
                            (item?.isGlobal || item?.isLogin ) && item?.mobile !== false && (
                              <li className={`menu-item `} key={index}>
                                <NavLink
                                  className={({ isActive }) => {
                                    return isActive
                                      ? `text-active`
                                      : "text-black";
                                  }}
                                  onClick={() => {
                                    handleMobile();
                                    if (item?.name === "Log Out") {
                                      setUserLoginData("");
                                      navigate(AppRoute.Home);
                                    }
                                  }}
                                  to={item?.to || ""}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            )
                          );
                        })
                      : navbar.map((item, index) => {
                          return (
                            (item?.isGlobal || !item?.isLogin ) && item?.mobile !== false && (
                              <li key={index} className={`menu-item `}>
                                <NavLink
                                  to={item.to}
                                  className={({ isActive }) => {
                                    return isActive
                                      ? `text-active`
                                      : "text-black";
                                  }}
                                  onClick={() => {
                                    handleMobile();
                                  }}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            )
                          );
                        })}
                  </ul>
                </nav>
              </div>
            </TabPanel>

            <TabPanel className="categories animation-tab">
              <div className="sub-categorie-mobile">
                <ul className="pop-up">
                  {Category?.data &&
                    Category?.data?.map((item, index) => {
                      if (item.status !== "1") {
                        return null;
                      }
                      return (
                        <li
                          className="categories-mobile"
                          key={index}
                          onClick={() => {
                            handleMobile();
                            navigate(
                              `${item?.category
                                .trim()
                                .replaceAll(" ", "-")
                                .toLowerCase()}/${item?.ID}`,
                              {
                                state: item?.ID,
                              }
                            );
                          }}
                        >
                          <a className="d-flex gap-2 align-content-center">
                            <Imag src={item?.image} className="imgCategory" />
                            {item?.category}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </TabPanel>
          </div>
        </Tabs>

        <div className="mobile-footer">
          {!userData?.UID && (
            <div className="header-customize-item button mb-5">
              <NavLink to="https://employer.fpsjob.com/" target={"_blank"}>
                Post Job
              </NavLink>
            </div>
          )}
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
              <p>Need help?</p>
              <h6>
                <Link to={`tel:${AppConst.MobileNumberOne}`}>
                  {AppConst.MobileNumberOne}
                </Link>
              </h6>
              <h6>
                <Link to={`tel:${AppConst.MobileNumberSecond}`}>
                  {AppConst.MobileNumberSecond}
                </Link>
              </h6>
            </div>
          </div>
          <div className="wd-social d-flex aln-center">
            <ul className="list-social d-flex aln-center">
              <li>
                <NavLink
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
  );
};

export default memo(SidebarPopup);
