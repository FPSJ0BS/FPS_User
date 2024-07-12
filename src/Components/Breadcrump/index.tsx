import { AppRoute } from "@Navigator/AppRoute";
import { memo } from "react";
import { Link } from "react-router-dom";

Breadcrumb.propTypes = {};

type IProps = {
  title: string;
  className?: string;
};

function Breadcrumb({ title, className }: IProps) {
  return (
    <section className={`bg-f5  ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Breadcrumb);
