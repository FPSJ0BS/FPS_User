import FlatList from "@Components/FlatList/FlatLIst";
import { reviewJob } from "@Const/fakeData/ReviewJob";
import { AppConst } from "@/Enum/AppConst";
import Recruitment from "@Assets/images/recruitment-poster.webp";
import PlayButton from "@Assets/images/play-button.svg";
import { memo, useState } from "react";
import VideoModal from "@Container/Home/Component/Modal/Modal";
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "@Context/GlobalContextProvider";
function ReviewJob09({ className }: any) {
  const [isModal, setIsModal] = useState(false);
  const { userData } = useGlobalContext();
  return (
    <>
      <section className={className}>
        <div className="container">
          <div className="tf-title style-2">
            <div className="group-title">
              <h1>{`Why Choose ${AppConst.LogoName} for Your Recruitment Needs?`}</h1>
            </div>
          </div>
          <div className="row gap-6">
            <div className="col-lg-5 col-md-12 wow fadeInLeft">
              <div className="wd-review-job pt9">
                <ul className="list-review2">
                  <FlatList
                    data={reviewJob}
                    renderItem={(item: any) => {
                      return (
                        <li className={`${item.id === 1 && "active"} mb-4`}>
                          <h6 className="mb-1 fs-6 font-bold">{item?.title}</h6>
                          <p className="text-base text-secondary">
                            {item?.content}
                          </p>
                        </li>
                      );
                    }}
                  />
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="wd-review-job widget-counter relative mb-5">
                <img width="100%" height="100%" src={Recruitment} />
                <img
                  src={PlayButton}
                  className="playbutton"
                  onClick={() => setIsModal(true)}
                />
              </div>
              {!userData?.UID && (
                <div className="d-flex flex-row gap-2 justify-content-center">
                  <NavLink
                    to="https://employer.fpsjob.com/"
                    target={"_blank"}
                    className="videoButton"
                  >
                    Post Job
                  </NavLink>

                  <NavLink
                    to={"https://employer.fpsjob.com/register"}
                    aria-label="Sign Up page"
                    className="videoButton"
                  >
                    Register
                  </NavLink>
                </div>
              )}
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
              src="https://www.youtube.com/embed/X0B17GpgSbc?si=EegG5xpFi0gKAboL&amp;&autoplay=1"
              title="YouTube video player"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          }
          setIsModal={setIsModal}
          isModal={isModal}
        />
      )}
    </>
  );
}

export default memo(ReviewJob09);
