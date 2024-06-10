import { doGetLinkedinProfile } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useLinkedinProfile(props: IProps) {
  return useQuery({
    queryKey: ["linkedinProfile"],
    queryFn: doGetLinkedinProfile,
    ...props,
  });
}

export default useLinkedinProfile;
