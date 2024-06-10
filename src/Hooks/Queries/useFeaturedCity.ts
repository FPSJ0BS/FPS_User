import { doFeaturedCity} from "@Repo/ProfileRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";


type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useFeaturedCity(props: IProps) {
  return useQuery({
    queryKey: ["featuredCity"],
    queryFn: doFeaturedCity,
    ...props,
  });
}

export default useFeaturedCity;
