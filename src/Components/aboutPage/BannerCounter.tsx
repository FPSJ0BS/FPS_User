import { memo, useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import img from "@Assets/images/partners/thum-1.png";

import "./style.scss";

function BannerCounter() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <section className="wd-banner-counter">
      <div className="container st3">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-title-counter stc">
              <h3 className="fw-bold">The numbers don't lie</h3>
              <p>About 800+ new jobs everyday</p>
            </div>
            <div className="group-counter wow fadeInUp">
              <div className="row align-item-center">
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={10}
                                suffix="k+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Jobs Available</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={1500}
                                suffix="+"
                                duration={3}
                                separator=""
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">New Jobs This Week!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={5500}
                                suffix="+"
                                duration={3}
                                separator=""
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Companies Hiring</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter br-none">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={1}
                                suffix="M+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Candidates</p>
                  </div>
                </div>
              </div>
              <img className="thumb ani4" src={img} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BannerCounter);
