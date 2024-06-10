import Footer from "@Components/Footer/Footer";
import GoTop from "@Components/GoTop/GoTop";
import Header from "@Components/Header/Header";
import SidebarPopup from "@Components/SidebarPopup/SidebarPopup";
import { AppRoute } from "@Navigator/AppRoute";
import { memo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [isShowMobile, setShowMobile] = useState(false);
  const location = useLocation();
  const handleMobile = () => {
    const getMobile: any = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };
  return (
    <>
      {location.pathname.includes(AppRoute.Dashboard) ? (
        <Outlet />
      ) : (
        <>
          <SidebarPopup handleMobile={handleMobile} />
          <Header clname="act1" handleMobile={handleMobile} />
          <Outlet />
          <Footer />
          <GoTop />
        </>
      )}
    </>
  );
};

export default memo(Layout);
