import { doPackUpdate } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function usePackUpdate(props: IProps) {
  return useMutation({
    mutationKey: ["packUpdate"],
    mutationFn: doPackUpdate,
    ...props,
  });
}

export default usePackUpdate;
