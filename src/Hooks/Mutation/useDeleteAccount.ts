import { doDeleteAccount } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useDeleteAccount(props: IProps) {
  return useMutation({
    mutationKey: ["deleteAccount"],
    mutationFn: doDeleteAccount,
    ...props,
  });
}

export default useDeleteAccount;
