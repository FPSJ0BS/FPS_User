
import { Link } from "react-router-dom";
import phone from "@Assets/images/review/download_app.png";
// import phone from "@Assets/images/review/phone.png";
import btn2 from "@Assets/images/review/btn2.png";
import btn1 from "@Assets/images/review/btn1.png";
import { StorageConst } from "@Const/StorageConst";
import Imag from "@Components/Image/Image";
import { memo } from "react";
function GetApp(props: any) {
  const { className } = props;
  return (
    <section className={`get-app-sc ${className}`}>
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="wd-get-app">
              <div className="thumb ani4">
                <Imag src={phone} alt="images" style={{ margin: "auto", maxHeight: "414px" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight">
            <div className="wd-get-app">
              <div className="content">
                <h4 className="h4">Download The App</h4>
                <p>
                  Structured digital interviews increase the predictive <br />{" "}
                  validity of your hires by 65%.
                </p>
                <div className="group-btn">
                  <Link to={StorageConst.APP_STORE_LINK}>
                    <img src={btn2} alt="images" />
                  </Link>
                  <Link to={StorageConst.PLAY_STORE_LINK}>
                    <img src={btn1} alt="images" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(GetApp);
