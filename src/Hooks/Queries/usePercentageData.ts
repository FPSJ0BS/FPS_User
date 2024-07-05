import { doProfilePercentage } from "@Repo/profileAPI";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function usePercentageData(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["percentage", UID],
    queryFn: () => doProfilePercentage(UID),
    ...props,
  });
}

export default usePercentageData;
