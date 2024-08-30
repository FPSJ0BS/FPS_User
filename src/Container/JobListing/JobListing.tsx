// import { AppConst } from "@/Enum/AppConst";
// import SEO from "@Components/Seo/Seo";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { memo, useState } from "react";
import { JobListingNew } from "./JobListingNew";
import { useSelector } from "react-redux";
import useSearchJobsQueryNode from "@Hooks/Queries/useSearchJobsQueryNode";

const JobListing = () => {
  const { userData } = useGlobalContext();
  const { modalOpen } = useSelector((state: any) => state.appliedJobSlice);

  const [searchJob, setSearchJob] = useState<any>({
    facultyID: userData?.UID ? userData?.UID : 103082,

    totalPage: 0,

    limit: 12,
  });

  // const { data: jobs, refetch } = useSearchJobsQuery(
  //   { enabled: !!searchJob?.UID },
  //   searchJob
  // );

  const { data: jobs, refetch } = useSearchJobsQueryNode(
    { enabled: !!searchJob?.facultyID },
    searchJob
  );

  return (
    <>
      {/* {modalOpen && <TrackPopup />} */}

      <JobListingNew
        data={jobs}
        searchJob={searchJob}
        setSearchJob={setSearchJob}
        refetch={refetch}
      />
    </>
  );
};

export default memo(JobListing);
