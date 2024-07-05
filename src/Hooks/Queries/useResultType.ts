import { doResultType } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useResultType(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.resultType],
    queryFn: doResultType,
    ...props,
  });
}

export default useResultType;
