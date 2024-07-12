import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { doCareerPreferenceType } from "@Repo/profileAPI";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useCareerPreferenceCity(props: IProps) {
  return useQuery({
    queryKey: ["doCareerPreferenceType"],
    queryFn: doCareerPreferenceType,
    ...props,
  });
}

export default useCareerPreferenceCity;
