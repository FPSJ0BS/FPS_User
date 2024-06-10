import { doAppliedJobs } from "@Repo/ProfileRepo";
import { useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
function useJobAppliedList(query?: any) {
  return useQuery({
    queryKey: [Querykeys.jobApplied, query],
    queryFn: doAppliedJobs,
    select(data) {
      const _data = data?.appliedJobs.sort((a, b) => {
        const _a: any = new Date(a.created_at);
        const _b: any = new Date(b.created_at);
        return _b - _a;
      });
      return _data;
    },
    enabled: !!query?.UID,
  });
}

export default useJobAppliedList;
