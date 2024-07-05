import { doSkillsSubmittedType } from "@Repo/profileAPI";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useSkillsSubmitted(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["skillsSubmitted", UID],
    queryFn: () => doSkillsSubmittedType(UID),
    ...props,
  });
}

export default useSkillsSubmitted;
