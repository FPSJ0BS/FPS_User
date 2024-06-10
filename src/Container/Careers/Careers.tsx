import "./careers.scss";
import Banner from "./component/Banner";
import Inclusion from "./component/Inclusion";
import JoinTeam from "./component/JoinTeam";
import LifeFpsJob from "./component/LifeFpsJob";
import Lighthouse from "./component/Lighthouse";
import MotherSatFpsJob from "./component/MotherSatFpsJob";
import OurValues from "./component/OurValues";
import Testimonials from "./component/Testimonials";
import WhyFpsJob from "./component/WhyFpsJob";
import Widget from "./component/Widget";
const Careers = () => {
  return (
    <div className="careers-wrap">
      <main>
        <Banner />
        <Widget />
        <WhyFpsJob />
        <OurValues />
        <JoinTeam />
        <LifeFpsJob />
        <Inclusion />
        <MotherSatFpsJob />
        <Testimonials />
        <Lighthouse />
        <div className="full-width-container career-bottom-banner">
          <div className="content">
            <div className="career-bottom-banner-container">
              <img
                src="https://www.phonepe.com/webstatic/6444/static/great-place-to-work-90b09c4db47066092b552de455fbb3bf.svg"
                className="career-bottom-banner-great-place"
                alt="Great Place to work in Bangalore"
              />
              <div className="career-bottom-banner-card">
                <h2>All Current Openings</h2>
                <div className="career-bottom-banner__btn-container">
                  <div className="desktop">
                    <a className="btn-container" href="/careers/job-openings/">
                      <span className="btn-container__btn btnStyle">
                        <span>View Openings</span>
                        <span className="arrow">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMS4wNTQgOC41SDMxIi8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTI0IDFsOCA4LTggNyIvPjwvZz48L3N2Zz4=" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="mobile">
                    <a className="btn-container" href="/careers/job-openings/">
                      <span className="btn-container__btn btnStyle">
                        <span>View</span>
                        <span className="arrow">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMS4wNTQgOC41SDMxIi8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTI0IDFsOCA4LTggNyIvPjwvZz48L3N2Zz4=" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://www.phonepe.com/webstatic/6444/static/career-footer-flower-fb09a2189f58e5211928ef040db61b3e.svg"
                className="career-bottom-banner-flower"
                alt="Footer Flower"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
