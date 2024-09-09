import { dogetAllCityListNode } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useAllCityListNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.allCityList],
    queryFn: dogetAllCityListNode,
    ...props,
  });
}

export default useAllCityListNode;
