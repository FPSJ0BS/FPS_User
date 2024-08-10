import { AppConst } from "@/Enum/AppConst";
import FlatList from "@Components/FlatList/FlatLIst";
import { datawork } from "@Const/fakeData/howItWork";
import DreamJob from "@Assets/images/dream-job-poster.webp";
import PlayButton from "@Assets/images/play-button.svg";
import { memo, useState } from "react";
import VideoModal from "@Container/Home/Component/Modal/Modal";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { NavLink } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";
import Imag from "@Components/Image/Image";
function Box() {
  const [isModal, setIsModal] = useState(false);
  const { userData } = useGlobalContext();
  return (
    <>
      <section className="term-section background1 bg-white md:block hidden">
        <div className="container">
          <div className="title-iconbox style-2 pt-4">
            <h1 className="text-dark">
              {`Why Choose ${AppConst.LogoName} for Your Job Search?`}
            </h1>
          </div>
          <div className="row tf-tab pb-4 flex-wrap gap-6">
            <div className="col-lg-6 col-md-12">
              <div
                // style={{ position: "sticky", top: "50px" }}
                className="wd-review-job thumb2 widget-counter stc "
              >
                <div className="thumb relative mb-5">
                  <Imag
                    width="100%"
                    src={DreamJob}
                    style={{ objectFit: "contain" }}
                  />
                  <Imag
                    src={PlayButton}
                    className="playbutton"
                    onClick={() => setIsModal(true)}
                  />
                </div>
                <div className="d-flex flex-row gap-2 justify-content-center">
                  <NavLink
                    to={AppRoute.Find_Jobs}
                    aria-label="Sign Up page"
                    className=""
                  >
                    
                  <button className="buttonBannerHome">
                    <span className="buttonBannerHome_lg">
                      <span className="buttonBannerHome_sl"></span>
                      <span className="buttonBannerHome_text">Find Jobs</span>
                    </span>
                  </button>
                    
                  </NavLink>



                  {!userData?.UID && (
                    <NavLink
                      to={"https://employer.tallento.ai/register"}
                      aria-label="Sign Up page"
                      className="videoButton"
                    >
                      Register
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 wow fadeInRight d-flex flex-col justify-content-center">
              <div className="row rg-st1">
                <FlatList
                  data={datawork}
                  renderItem={(item: any) => {
                    return (
                      <div
                        className="colum3 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="tf-iconbox ">
                          <div className="box-content mb-4">
                            <h1 className="box-title text-left mb-1">
                              <a className="text-dark">
                                {`${item.id}.  ${item.title}`}
                              </a>
                            </h1>
                            <p className="text-secondary mb-2">
                              {item?.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModal && (
        <VideoModal
          children={
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/_wq3lNAn4SE?si=KfWn9E4dWBSd-_1l&amp;&autoplay=1"
              title="YouTube video player"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          }
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </>
  );
}

export default memo(Box);
