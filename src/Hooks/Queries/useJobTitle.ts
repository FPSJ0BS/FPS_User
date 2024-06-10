import { dogetJobTitle } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useJobTitle(props: IProps, query?: any) {
  return useQuery({
    queryKey: [Querykeys.jobTitle, query],
    queryFn: dogetJobTitle,
    ...props,
  });
}

export default useJobTitle;
