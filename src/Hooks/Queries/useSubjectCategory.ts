import { dogetSubjectCategory } from "@Repo/AuthRepo";
import {  IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions,  useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useSubjectCategory(props: IProps,query:any) {
  return useQuery({
    queryKey: ["subjectCategory",query],
    queryFn: dogetSubjectCategory,
    ...props,
  });
}

export default useSubjectCategory;
