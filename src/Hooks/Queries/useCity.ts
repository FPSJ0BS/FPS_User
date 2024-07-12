import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { doCityType } from "@Repo/profileAPI";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useCity(props: IProps) {
  return useQuery({
    queryKey: ["City"],
    queryFn: doCityType,
    ...props,
  });
}

export default useCity;
