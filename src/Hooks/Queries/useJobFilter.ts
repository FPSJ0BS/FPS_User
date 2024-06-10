import { doJobFilter } from "@Repo/AuthRepo";
import { useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
function useJobFilter(query?: any) {
  return useQuery({
    queryKey: [Querykeys.jobFilter, query],
    queryFn: doJobFilter,
  });
}

export default useJobFilter;
