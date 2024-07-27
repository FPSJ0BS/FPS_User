import FlatList from "@Components/FlatList/FlatLIst";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useJobAppliedList from "@Hooks/Queries/useJobAppliedList";
import List from "./Component/List";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import NoResults from "@Container/NoResults/NoResults";
import { memo } from "react";


const Applied = () => {
  const { userData } = useGlobalContext();
  const { data: JobAppliedList } = useJobAppliedList({
    UID: userData?.UID,
  });

  // const appliedJob = JobAppliedList && JobAppliedList.filter((item) => {
  //   return item?.appliedStatus === "Applied";
  // });
  return (
    <>
   
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Applied Job List Page"}
        type={"Web Page"}
      />
      <div className="d-flex align-items-center justify-content-between mb-20 lg-mb-30">
        <h2 className="  main-title m0 ">Applied Job</h2>
      </div>
      <div className="wrapper flex-wrap">
        <FlatList
          data={JobAppliedList}
          renderItem={(item) => <List data={item} />}
          ListEmptyComponent={() => {
            return (
              <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                <NoResults />
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default memo(Applied);
