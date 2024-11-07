import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
import { doGetBlogDetails } from "@Repo/ProfileRepo";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>> & {
  blogId: any;
};

function useBlogDetails(props: IProps) {
  const { blogId, ...prop } = props;
  return useQuery({
    queryKey: [Querykeys.blogDetails, blogId],
    queryFn: () => doGetBlogDetails({blogId}),
    ...prop,
  });
}

export default useBlogDetails;
