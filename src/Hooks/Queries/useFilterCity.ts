import { dogetFiterCityList } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useFilterCity(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.filterListCity],
    queryFn: dogetFiterCityList,
    ...props,
  });
}

export default useFilterCity;
