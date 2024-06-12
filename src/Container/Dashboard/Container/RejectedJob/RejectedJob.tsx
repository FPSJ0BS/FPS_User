import FlatList from "@Components/FlatList/FlatLIst";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useJobAppliedList from "@Hooks/Queries/useJobAppliedList";
import List from "../Applied/Component/List";
import NoResults from "@Container/NoResults/NoResults";
import { memo } from "react";

const RejectedJob = () => {
  const { userData } = useGlobalContext();
  const { data: JobAppliedList } = useJobAppliedList({
    UID: userData?.UID,
  });
  const rejectedJob =
    JobAppliedList &&
    JobAppliedList.filter((item) => {
      return item?.appliedStatus === "Rejected";
    });

  return (
    <>
      {" "}
      <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
        <h2 className="main-title m0">Rejected Job</h2>
      </div>
      <div className="wrapper flex-wrap">
       
        <FlatList
          data={rejectedJob}
          renderItem={(item) => <List data={item} />}
          ListEmptyComponent={() => {
            return (
              <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                <NoResults text="No Rejected Applications Found" />
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default memo(RejectedJob);
