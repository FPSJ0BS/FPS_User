import { doLanguagesType} from "@Repo/profileAPI";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useLanguagesType(UID: string, props: IProps) {
  return useQuery({
    queryKey: ["languages", UID],
    queryFn: () => doLanguagesType(UID),
    ...props,
  });
}

export default useLanguagesType;
