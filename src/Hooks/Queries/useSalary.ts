import { doGetSalary } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useSalary(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.salary],
    queryFn: doGetSalary,
    ...props,
  });
}

export default useSalary;
