import { doResumeBuy } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useResumeBuy(props: IProps) {
  return useMutation({
    mutationKey: ["doResumeBuy"],
    mutationFn: doResumeBuy,
    ...props,
  });
}

export default useResumeBuy;
