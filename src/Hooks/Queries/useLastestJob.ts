import { doLatestJobs } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useLatestJobs(props: IProps, query?: any) {
  return useQuery({
    queryKey: ["latestJobs", query],
    queryFn: doLatestJobs,
    select(data) {
      const _data = data?.jobs.sort((a, b) => {
        return a.created_at - b.created_at;
      });

      return _data.slice(0, 6);
    },
    ...props,
  });
}

export default useLatestJobs;
