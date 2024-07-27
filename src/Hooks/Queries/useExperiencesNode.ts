import { doGetExperiencesNode } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useExperiencesNode(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.experiences],
    queryFn: doGetExperiencesNode,
    ...props,
  });
}

export default useExperiencesNode;
