import { doSearchJobsNode } from "@Repo/AuthRepo";

import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
import { IQuery } from "@Type/QueryType";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;
function useSearchJobsQueryNode(props:IProps,query: any) {
  return useQuery({
    queryKey: [Querykeys.allJobsQuery, query],
    queryFn: doSearchJobsNode,
    ...props
  });
}

export default useSearchJobsQueryNode;
