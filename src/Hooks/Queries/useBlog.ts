import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
import { doGetBlog } from "@Repo/ProfileRepo";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>> & {
  query: any;
};

function useBlog(props: IProps) {
  const { query, ...prop } = props;
  return useQuery({
    queryKey: [Querykeys.blog, query],
    queryFn: () => doGetBlog(query),
    select(blog) {
      const data = blog;
      const _data = blog?.data?.data.sort((a, b) => {
        const _a: any = new Date(a.created_at);
        const _b: any = new Date(b.created_at);
        return _b - _a;
      });
      data.data.data = _data;
      return data;
    },
    ...prop,
  });
}

export default useBlog;
