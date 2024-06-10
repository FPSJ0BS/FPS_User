import { doAllFeaturedJobs } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useFeaturedJobs(props: IProps, query?: any) {
  return useQuery({
    queryKey: ["featuredJobs", query],
    queryFn: doAllFeaturedJobs,
    ...props,
  });
}

export default useFeaturedJobs;
