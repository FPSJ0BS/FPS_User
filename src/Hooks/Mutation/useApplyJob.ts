
import { doApplyJob } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useApplyJob(props: IProps) {
  return useMutation({
    mutationKey: ["ApplyJob"],
    mutationFn: doApplyJob,
    ...props,
  });
}

export default useApplyJob;
