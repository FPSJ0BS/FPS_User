import { dogetCityListNode } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useGetCityListNode(props: IProps, query?: any) {
  return useQuery({
    queryKey: [Querykeys.cityList, query],
    queryFn: dogetCityListNode,
    ...props,
  });
}

export default useGetCityListNode;
