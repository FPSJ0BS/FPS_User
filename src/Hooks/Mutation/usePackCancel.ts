import { doPackCancel } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function usePackCancel(props: IProps) {
  return useMutation({
    mutationKey: ["packCancel"],
    mutationFn: doPackCancel,
    ...props,
  });
}

export default usePackCancel;
