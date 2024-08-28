import useBlogDetails from "@Hooks/Queries/useBlogDetails";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import singleJob from "@Assets/images/review/singlejob.jpg";
import { memo, useState } from "react";
import { formatDistance } from "date-fns";
import { AppConst } from "@/Enum/AppConst";
import SocialMediaLinks from "@Const/SocialMediaLinks";
import useBlog from "@Hooks/Queries/useBlog";
import Imag from "@Components/Image/Image";
import FlatList from "@Components/FlatList/FlatLIst";
import { AppRoute } from "@Navigator/AppRoute";
import "./index.scss";
const BlogDetails = () => {
  const [query] = useState({
    page_num: 0,
  });
  const { data: blog } = useBlog({ query });
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: blogDetails } = useBlogDetails({
    enabled: !!id,
    blog_id: atob(id || ""),
  });
  const blog_details = blogDetails?.data?.[0];

  return (
    <>
      <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="card blog blog-detail border-0">
                <img
                  src={
                    blog_details?.blogimage
                      ? `${blog?.data?.img_base_url}/${blog_details?.blogimage}`
                      : singleJob
                  }
                  className="img-fluid rounded-top"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div className="card-body">
                  <h6 className="mb-3">
                    <a className="text-primary fs-5 font-normal ">
                      {blog_details?.title}
                    </a>
                  </h6>

                  <span
                    className="blog-wrap"
                    dangerouslySetInnerHTML={{
                      __html: blog_details?.long_description,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 sidebar sticky-bar">
                <div className="card-body">
                  <div className="widget mb-4 pb-2">
                    <h4 className="font-bold fs-4">Recent Post</h4>
                    <div className="mt-4">
                      <FlatList
                        data={blog?.data?.data?.slice(0, 3)}
                        renderItem={(item?: any) => {
                          const date =
                            item?.created_at &&
                            formatDistance(
                              new Date(item?.created_at),
                              new Date(),
                              {
                                addSuffix: true,
                              }
                            );
                          return (
                            <div
                              className="clearfix post-recent d-flex flex-row gap-4 mb-2 cursor-pointer"
                              onClick={() =>
                                navigate(
                                  `${AppRoute.Blog}/${item?.title
                                    .trim()
                                    .replaceAll(" ", "-")
                                    .toLowerCase()}/${btoa(item?.blogid)}`
                                )
                              }
                            >
                              <div className="post-recent-thumb float-left">
                                <div style={{ width: "75px", height: "45px" }}>
                                  <Imag
                                    alt="img"
                                    src={`${blog?.data?.img_base_url}${item?.blogimage}`}
                                    className=" rounded"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="post-recent-content float-left">
                                <a
                                  style={{ color: "#3c4858", fontSize: "15px" }}
                                >
                                  {item?.title}
                                </a>
                                <span className="text-muted mt-1 d-block">
                                  {date.toString().replace("about", "")}
                                </span>
                              </div>
                            </div>
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="widget">
                    <div className="wd-social d-flex flex-col">
                      <h2 className="mb-3 font-bold">Follow Us:</h2>
                      <ul className="list-social d-flex aln-center">
                        <li>
                          <NavLink
                            to={SocialMediaLinks.facebook}
                            aria-label={`Visit ${AppConst.LogoName} Facebook page`}
                            target="_blank"
                          >
                            <i className="icon-facebook"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={SocialMediaLinks.linkedin}
                            aria-label={`Visit ${AppConst.LogoName} on LinkedIn`}
                            target="_blank"
                          >
                            <i className="icon-linkedin2"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={SocialMediaLinks.instagram}
                            aria-label={`View ${AppConst.LogoName} on instagram`}
                            target="_blank"
                          >
                            <i className="icon-instagram1"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={SocialMediaLinks.youtube}
                            aria-label={`Visit ${AppConst.LogoName} on Youtube`}
                            target="_blank"
                          >
                            <i className="icon-youtube"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(BlogDetails);
