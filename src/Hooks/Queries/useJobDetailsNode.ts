import { dogetJobDetailsNode } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useJobDetailsNode(props: IProps, query: any) {
  return useQuery({
    queryKey: [Querykeys.jobDetails, query],
    queryFn: dogetJobDetailsNode,
    ...props,
  });
}

export default useJobDetailsNode;
