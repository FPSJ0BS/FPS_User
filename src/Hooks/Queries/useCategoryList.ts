import { dogetCategory } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useCategoryList(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.categoryList],
    queryFn: dogetCategory,
    ...props,
  });
}

export default useCategoryList;
