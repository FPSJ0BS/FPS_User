import Button from "@Components/Button/Button";
import FlatList from "@Components/FlatList/FlatLIst";
import Imag from "@Components/Image/Image";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import { AppRoute } from "@Navigator/AppRoute";
import { HTMLAttributes, memo, useState } from "react";
import { useNavigate } from "react-router-dom";

type IProps = {
  className: HTMLAttributes<HTMLDivElement>["className"]
}

const Category = (props: IProps) => {
  const { className } = props;
  const [dataBlock] = useState({
    title: "Browse by category",
    text: " Recruitment made easy for candidates searching for IIT JEE, NEET Coaching jobs, Edtech jobs, School teacher jobs & Other Education Sector Jobs",
  });
  const { data: Category } = useCategoryList({});
  const navigate = useNavigate();
  return (
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title row">
                <div className="col-12">
                  <h1 >{dataBlock.title}</h1>
                </div>
                <div className="col-sm-8 col-12">
                  <p >{dataBlock.text}</p>
                </div>
              </div>
              <Button title="All Categories" link={AppRoute.Find_Jobs} />
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="group-category-job wow fadeInUp"
              data-wow-delay=".2s"
            >
              <FlatList
                data={Category?.data}
                renderItem={(idx: any) => {
                  return (
                    <div
                      key={idx.id}
                      className={`job-category-box`}
                      onClick={() => {
                        navigate(
                          `/${idx?.category
                            .trim()
                            .replaceAll(" ", "-")
                            .toLowerCase()}/${idx?.ID}`,
                          {
                            state: idx?.ID,
                          }
                        );
                      }}
                    >
                      <div className="job-category-header">
                        <h1>
                          <a className="d-flex gap-2 align-items-center">
                            <Imag src={idx?.image} className="imgCategory" />
                            {idx?.category}
                          </a>
                        </h1>
                      </div>
                      <a className="btn-category-job">
                        Explore Subjects{" "}
                        <span className="icon-keyboard_arrow_right"></span>
                      </a>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Category);
