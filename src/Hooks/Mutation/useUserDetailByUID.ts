import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { doGetUserDetailByUID } from "@Repo/profileAPI";
import { IQuery } from "@Type/QueryType";

type IProps = IQuery<UseQueryOptions<any, Error, any>>;

function useUserDetailByUID(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["userDetail", UID],
    queryFn: () => doGetUserDetailByUID(UID),
    ...props,
  });
}

export default useUserDetailByUID;
