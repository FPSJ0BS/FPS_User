import { doSearchJobs } from "@Repo/AuthRepo";

import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
import { IQuery } from "@Type/QueryType";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;
function useSearchJobsQuery(props:IProps,query: any) {
  return useQuery({
    queryKey: [Querykeys.allJobsQuery, query],
    queryFn: doSearchJobs,
    ...props
  });
}

export default useSearchJobsQuery;
