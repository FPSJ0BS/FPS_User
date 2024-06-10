import { doGetPartner } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";


type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function usePartner(props: IProps, ) {
  return useQuery({
    queryKey: ["partner"],
    queryFn: doGetPartner,
    ...props,
  });
}

export default usePartner;
