import  { memo, useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";



function Couter() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };
  return (
    <section className=" hidden md:block border-1 border-solid border-gray-300 ">
      <div className="bg-pri1 count-spacing">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <div className="col-lg-3 col-md-6 col-6  wow fadeInUp">
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <Waypoint onEnter={onVWEnter}>
                    <h2 className=" text-[30px] md:text-[45px]">
                      {viewPortEntered && (
                        <CountUp
                          className="number"
                          end={10000}
                          suffix="+"
                          duration={3}
                          decimal=""
                        />
                      )}
                    </h2>
                  </Waypoint>
                </div>
                <p className="description">Jobs Available</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <Waypoint onEnter={onVWEnter}>
                    <h2 className=" text-[30px] md:text-[45px]">
                      {viewPortEntered && (
                        <CountUp
                          className="number"
                          end={1500}
                          suffix="+"
                          duration={1}
                          separator=""
                        />
                      )}
                    </h2>
                  </Waypoint>
                </div>
                <p className="description">New Jobs This Week!</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6  wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <Waypoint onEnter={onVWEnter}>
                    <h2 className=" text-[30px] md:text-[45px]">
                      {viewPortEntered && (
                        <CountUp
                          className="number"
                          end={5500}
                          suffix="+"
                          duration={1}
                          separator=""
                        />
                      )}
                    </h2>
                  </Waypoint>
                </div>
                <p className="description">Companies Hiring</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6  wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <Waypoint onEnter={onVWEnter}>
                    <h2 className=" text-[30px] md:text-[45px]">
                      {viewPortEntered && (
                        <CountUp
                          className="number"
                          end={1}
                          suffix="M+"
                          duration={3}
                        />
                      )}
                    </h2>
                  </Waypoint>
                </div>
                <p className="description">Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Couter);
