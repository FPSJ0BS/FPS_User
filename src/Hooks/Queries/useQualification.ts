import { doQualification } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useQualification(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.qualification],
    queryFn: doQualification,
    ...props,
  });
}

export default useQualification;
