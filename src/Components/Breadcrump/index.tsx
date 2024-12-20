import { memo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { AppRoute } from "@Navigator/AppRoute";
import { openModalLogin } from "@/Redux/appliedJobSlice";
import { useDispatch } from "react-redux";

Breadcrumb.propTypes = {};

type IProps = {
  title: string;
  className?: string;
};

function Breadcrumb({ title, className }: IProps) {
  const location = useLocation();
  const dispatch = useDispatch()
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, [location]);
  return (
    <section className={`bg-f5  ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`page-title ${
                showLogin ? "flex justify-between items-center" : ""
              } `}
            >
              <div className="widget-menu-link">
                <ul>
                  <li>
                    <Link to={AppRoute.Home}>Home</Link>
                  </li>
                  <li>
                    <a>{title}</a>
                  </li>
                </ul>
              </div>

              {showLogin && (
                <div className="w-[25%] hidden lg:block ">
                  <p className=" text-[14px] 2xl:text-[16px] font-semibold">
                    Already Registered?{" "}
                    <span
                      onClick={() => dispatch(openModalLogin())}
                      className=" cursor-pointer hover:underline text-[#355cec] font-semibold"
                    >
                      Login
                    </span>{" "}
                    here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Breadcrumb);
