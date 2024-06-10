import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
import { doGetBlogDetails } from "@Repo/ProfileRepo";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>> & {
  blog_id: any;
};

function useBlogDetails(props: IProps) {
  const { blog_id, ...prop } = props;
  return useQuery({
    queryKey: [Querykeys.blogDetails, blog_id],
    queryFn: () => doGetBlogDetails({blog_id}),
    ...prop,
  });
}

export default useBlogDetails;
