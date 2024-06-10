// import { AppConst } from "@/Enum/AppConst";
import JobSection from "@Components/JobsSection";
// import SEO from "@Components/Seo/Seo";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useSearchJobsQuery from "@Hooks/Queries/useSearchJobsQuery";
import { memo, useState } from "react";

const JobListing = () => {
  const { userData} = useGlobalContext();
  const [searchJob, setSearchJob] = useState<any>({
    UID: userData?.UID ? userData?.UID : 103082,
    pageNo: 0,
    limit: 10,
  });

  const { data: jobs } = useSearchJobsQuery(
    { enabled: !!searchJob?.UID },
    searchJob
  );

  return (
    <>
      {/* {Object.keys(subjectData).length !== 0 ? (
        <SEO
          title={`${subjectData?.meta_title}`}
          description={`${subjectData?.meta_description}`}
          metaKeywords={`${subjectData?.meta_keywords}`}
          ogKeywords={subjectData?.og_keywords}
          ogDescription={subjectData?.og_description}
          ogTitle={subjectData?.og_title}
          name={"Find Jobs"}
          type={"Find Jobs Page"}
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
      )} */}

      <JobSection
        data={jobs}
        searchJob={searchJob}
        setSearchJob={setSearchJob}
      />
    </>
  );
};

export default memo(JobListing);
