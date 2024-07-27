import { doGetSalaryNode } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useSalaryNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.salary],
    queryFn: doGetSalaryNode,
    ...props,
  });
}

export default useSalaryNode;
