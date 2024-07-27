import { dogetStateListNode } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useStatesListNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.stateList],
    queryFn: dogetStateListNode,
    ...props,
  });
}

export default useStatesListNode;
