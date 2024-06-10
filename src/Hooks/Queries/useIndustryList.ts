import { dogetindustryList } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useIndustryList(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.industryList],
    queryFn: dogetindustryList,
    ...props,
  });
}

export default useIndustryList;
