import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import FlatList from "@Components/FlatList/FlatLIst";
import Imag from "@Components/Image/Image";
import Pagination from "@Components/Pagination";
import SEO from "@Components/Seo/Seo";
import useBlog from "@Hooks/Queries/useBlog";
import { AppRoute } from "@Navigator/AppRoute";
import { formatDistance } from "date-fns";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [query, setQuery] = useState({
    page_num: 1,
    limit: 10,
  });
  const { data: blog } = useBlog({ query });
  const navigate = useNavigate()
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={`${AppConst.LogoName} Blog`}
        type={"Blog Page"}
      />
      <Breadcrumb title="Blog" />
      <section className="blog-section">
        <div className="container">
          <div className="group-col-3">
            <FlatList
              data={blog?.data?.data}
              renderItem={(item?: any) => {
                const date =
                  item?.created_at &&
                  formatDistance(new Date(item?.created_at), new Date(), {
                    addSuffix: true,
                  });
                return (
                  <div
                    className="widget-blog-1 style-1 cl3 stc"
                    onClick={() =>
                      navigate(
                        `${AppRoute.Blog}/${item?.title
                          .trim()
                          .replaceAll(" ", "-")
                          .toLowerCase()}/${btoa(item?.blogid)}`
                      )
                    }
                  >
                    <div className="img-blog">
                      <Imag
                        src={`${blog?.data?.img_base_url}${item?.blogimage}`}
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <h3 className="main-title">
                        <a>{item?.title}</a>
                      </h3>
                      <ul className="meta">
                        <li className="author">
                          <span>by</span>
                          {item?.author}
                        </li>
                        <li className="time">
                          <span className="icon-calendar"></span>{" "}
                          {date.toString().replace("about", "")}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              }}
            />
          </div>
          {blog?.data?.data && blog?.data?.data?.length > 0 && (
            <div className="mb-4">
              <Pagination
                total={blog?.data?.total_page_count}
                current={query?.page_num - 1}
                onChange={(page) => {
                  setQuery({
                    ...query,
                    page_num: page + 1,
                  });
                }}
                pageSize={query?.limit}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default memo(Blog);
