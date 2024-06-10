import { AppConst } from "@/Enum/AppConst";

const Widget = () => {
  return (
    <div className="full-width-container">
      <div className="content">
        <div className="careers-tab-widget">
          <a className="careers-tab-widget-item" href="/careers/#JoinOurTeam">
            Join our team
          </a>
          <a className="careers-tab-widget-item" href="/careers/#LifeAtPhonepe">
            Life @ {AppConst.LogoName}
          </a>
          <a
            className="careers-tab-widget-item"
            href="/careers/#DiversityAndInclusion"
          >
            Diversity and Inclusion
          </a>
          <a
            className="careers-tab-widget-item"
            href="/careers/#PhonepeUniversity"
          >
            {AppConst.LogoName} University
          </a>
        </div>
      </div>
    </div>
  );
};

export default Widget;
