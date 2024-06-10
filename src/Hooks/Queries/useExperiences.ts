import { doGetExperiences } from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useExperiences(props: IProps) {
  return useQuery({
    queryKey: [Querykeys.experiences],
    queryFn: doGetExperiences,
    ...props,
  });
}

export default useExperiences;
