import { doSearchJobs } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import MutationKeys from "./MutationKeys";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useSearchJobs(props: IProps) {
  return useMutation({
    mutationKey: [MutationKeys.SearchJobs],
    mutationFn: doSearchJobs,
    ...props,
  });
}

export default useSearchJobs;
