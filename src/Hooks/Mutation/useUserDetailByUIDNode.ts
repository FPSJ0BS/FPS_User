import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { doGetUserDetailByUIDNode } from "@Repo/profileAPI";
import { IQuery } from "@Type/QueryType";

type IProps = IQuery<UseQueryOptions<any, Error, any>>;

function useUserDetailByUIDNode(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["userDetail", UID],
    queryFn: () => doGetUserDetailByUIDNode(UID),
    ...props,
  });
}

export default useUserDetailByUIDNode;
