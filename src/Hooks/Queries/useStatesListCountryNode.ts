import { dogetStateListCountryNode } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useStatesListCountryNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.stateList],
    queryFn: dogetStateListCountryNode,
    ...props,
  });
}

export default useStatesListCountryNode;
