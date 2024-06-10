import { loginwithEmail } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import MutationKeys from "./MutationKeys";


type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useLoginWithEmail(props: IProps) {
  return useMutation({
    mutationKey: [MutationKeys.loginwithEmail],
    mutationFn: loginwithEmail,
    ...props
  });
}

export default useLoginWithEmail