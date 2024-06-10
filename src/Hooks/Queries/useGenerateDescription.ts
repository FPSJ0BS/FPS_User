import { doGenerateDescription } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";


type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useGenerateDescription(props: IProps,query:any) {
  return useQuery({
    queryKey: ["description", query],
    queryFn: doGenerateDescription,
    ...props,
  });
}

export default useGenerateDescription;
