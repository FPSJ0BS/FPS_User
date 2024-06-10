import { doAppliedJobsTrackData } from "@Repo/ProfileRepo";
import { Query, useQuery } from "@tanstack/react-query";

function useJobAppliedStatusTrackData(applyID?: string) {
  return useQuery({
    queryKey: ["AppliedStatusTrackData", Query],
    queryFn: () => doAppliedJobsTrackData(applyID as string),
    enabled: !!applyID,
  });
}

export default useJobAppliedStatusTrackData;
