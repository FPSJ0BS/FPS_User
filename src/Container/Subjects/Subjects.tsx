import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import FlatList from "@Components/FlatList/FlatLIst";
import Imag from "@Components/Image/Image";
import SEO from "@Components/Seo/Seo";
import NoResults from "@Container/NoResults/NoResults";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useSubjectCategory from "@Hooks/Queries/useSubjectCategory";
import { AppRoute } from "@Navigator/AppRoute";
import { memo } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";

const Subjects = () => {
  const { categoryData, setSubjectData } = useGlobalContext();
  const { category, sub_id } = useParams();
  const navigate = useNavigate();
  const { data: subjectCategory } = useSubjectCategory(
    { enabled: !!sub_id },
    { categoryId: sub_id }
  );

 
  return (
    <>
      {Object.keys(categoryData).length !== 0 ? (
        <SEO
          title={`${categoryData?.meta_title}`}
          description={`${categoryData?.meta_description}`}
          metaKeywords={`${categoryData?.meta_keywords}`}
          ogKeywords={categoryData?.og_keywords}
          ogDescription={categoryData?.og_description}
          ogTitle={categoryData?.og_title}
          name={"Subject Page"}
          type={"Subject Page"}
        />
      ) : (
        <SEO
          title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
          description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
          metaKeywords={
            "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
          }
          name={"Find Jobs"}
          type={"Find Jobs Page"}
        />
      )}

      {/* <Breadcrumb className="" title="Subject" /> */}
      <section
        className="testimonials-category-section bg-white"
      >
        <div className="w-full flex justify-center items-center md:mt-[-100px] ">
          <div className=" w-[600px] h-[600px] bg-[#302f2f] rounded-[40px] flex justify-start items-start p-[40px] flex-col">
            <h2 className=" text-white text-[25px] md:text-[35px] text-start font-semibold">
              Choose the job title <br /> you're
              interested in{" "}
            </h2>

            <div className="w-full min-h-[420px] overflow-y-auto pb-5 pt-1 flex flex-wrap gap-3 mt-3 pr-1">
              {subjectCategory?.data?.map((idx, index) => {
                return (
                  <div key={index}>
                    <div
                      onClick={() => {
                        setSubjectData(idx);
                        navigate({
                          pathname: AppRoute.Find_Jobs,
                          search: createSearchParams({
                            title: idx?.function,
                          }).toString(),
                        });
                      }}
                      className="text-white border-1 border-solid border-[#5a5859] px-2 py-2 rounded-lg cursor-pointer hover:bg-[#0a0c0f] "
                    >
                      {idx?.function}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Subjects);
