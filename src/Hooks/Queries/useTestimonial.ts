import { doGetTestimonial } from "@Repo/AuthRepo";
import { IQuery } from "@Type/QueryType";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

type IProps = IQuery<UseQueryOptions<any, Error, any, QueryKey>>;

function useTestimonial(props: IProps) {
  return useQuery({
    queryKey: ["testimonial"],
    queryFn: doGetTestimonial,
    ...props,
  });
}

export default useTestimonial;
