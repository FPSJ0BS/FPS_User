import { useGlobalContext } from "@Context/GlobalContextProvider";
import List from "./Component/List";
import FlatList from "@Components/FlatList/FlatLIst";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import useAllFavourite from "@Hooks/Queries/useAllFavourite";
import { memo } from "react";

const SavedJob = () => {
  const { userData } = useGlobalContext();
  const { data: AllFavourite } = useAllFavourite(
    {
      enabled: !!userData?.UID,
    },
    {
      UID: userData?.UID,
    }
  );
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Saved Jobs Page"}
        type={"Web Page"}
      />
      <div className="d-flex align-items-center justify-content-between mb-20 lg-mb-30">
        <h2 className="main-title m0">Saved Job</h2>
      </div>
      <div className="wrapper flex-wrap">
        <FlatList
          data={AllFavourite?.data}
          renderItem={(item) => <List data={item} />}
        />
      </div>
    </>
  );
};

export default memo(SavedJob);
