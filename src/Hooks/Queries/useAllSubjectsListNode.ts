import { dogetAllSubjects } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useAllSubjectsListNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.subjects],
    queryFn: dogetAllSubjects,
    ...props,
  });
}

export default useAllSubjectsListNode;
