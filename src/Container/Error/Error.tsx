import { Link } from "react-router-dom";
// import logo from "../../../public/fps-logo.webp";
import error from "@Assets/images/error.png";
import { AppRoute } from "@Navigator/AppRoute";
import { memo } from "react";

const Error = () => {
  return (
    <section className="relative ">
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
            <div className="text-center">
              {/* <Link to="/index">
                <img src={logo} className="mx-auto h-10" alt="" />
              </Link> */}
            </div>
            <div className="title-heading text-center my-auto">
              <img src={error} className="mx-auto" alt="" />
              <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold">
                Page Not Found?
              </h1>
              <p className="text-slate-400">
                Whoops, this is embarassing. <br /> Looks like the page you were
                looking for wasn't found.
              </p>

              <div className="mt-4">
                <Link
                  to={AppRoute.Home}
                  className="btn bg-primaryOne hover:bg-primaryOne border-primaryOne hover:border-primaryOne text-white rounded-md"
                >
                  Back to Home
                </Link>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Error);
