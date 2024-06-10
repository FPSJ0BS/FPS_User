import { dogetJobDetails } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useJobDetails(props: IProps, query: any) {
  return useQuery({
    queryKey: [Querykeys.jobDetails, query],
    queryFn: dogetJobDetails,
    ...props,
  });
}

export default useJobDetails;
