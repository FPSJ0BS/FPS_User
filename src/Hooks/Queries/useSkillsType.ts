import { doSkillsType } from "@Repo/profileAPI";
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { IQuery } from "@Type/QueryType";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;



function useskillsType(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["skills", UID],
    queryFn: () => doSkillsType(UID),
    ...props,
  });
}

export default useskillsType;
