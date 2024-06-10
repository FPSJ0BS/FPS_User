import { dogetCityList } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useGetCityList(props: IProps, query?: any) {
  return useQuery({
    queryKey: [Querykeys.cityList, query],
    queryFn: dogetCityList,
    ...props,
  });
}

export default useGetCityList;
