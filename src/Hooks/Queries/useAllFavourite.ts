import { doAllFavourite } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;
function useAllFavourite(props: IProps, query: any) {
  return useQuery({
    queryKey: [Querykeys.allFavourite, query],
    queryFn: doAllFavourite,
    ...props,
  });
}

export default useAllFavourite;
