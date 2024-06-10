import FlatList from "@Components/FlatList/FlatLIst";
import List from "../Applied/Component/List";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useJobAppliedList from "@Hooks/Queries/useJobAppliedList";
import NoResults from "@Container/NoResults/NoResults";
import { memo } from "react";

const AccptedJob = () => {
  const { userData } = useGlobalContext();
  const { data: JobAppliedList } = useJobAppliedList({
    UID: userData?.UID,
  });
  const accptedJob =
    JobAppliedList &&
    JobAppliedList.filter((item) => {
      return item?.appliedStatus === "Accepted";
    });
  return (
    <>
      {" "}
      <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
        <h2 className="main-title m0">Accepted Job</h2>
      </div>
      <div className="wrapper flex-wrap">
        <FlatList
          data={accptedJob}
          renderItem={(item) => <List data={item} />}
          ListEmptyComponent={() => {
            return (
              <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                <NoResults text="Your Job Applications Are Still Pending" />
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default memo(AccptedJob);
