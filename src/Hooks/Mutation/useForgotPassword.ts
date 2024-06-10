import { doForgotPassword } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useForgotPassword(props: IProps) {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: doForgotPassword,
    ...props,
  });
}

export default useForgotPassword;
