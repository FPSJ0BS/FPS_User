import { doCancelJob} from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useCancelJob(props: IProps) {
  return useMutation({
    mutationKey: ["cancelJob"],
    mutationFn: doCancelJob,
    ...props,
  });
}

export default useCancelJob;
