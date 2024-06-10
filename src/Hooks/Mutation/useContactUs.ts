import { doContactUs } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useContactUs(props: IProps) {
  return useMutation({
    mutationKey: ["contactUs"],
    mutationFn: doContactUs,
    ...props,
  });
}

export default useContactUs;
