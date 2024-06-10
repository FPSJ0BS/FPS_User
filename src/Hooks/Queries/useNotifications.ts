import { doNotifications } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useNotifications(props: IProps,query:any) {
  return useQuery({
    queryKey: ["notifications",query],
    queryFn: doNotifications,
    ...props,
  });
}

export default useNotifications;
