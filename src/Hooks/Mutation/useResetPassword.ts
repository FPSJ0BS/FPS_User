import { doResetPassword } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useResetPassword(props: IProps) {
  return useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: doResetPassword,
    ...props,
  });
}

export default useResetPassword;
