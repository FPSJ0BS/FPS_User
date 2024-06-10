import { doChangePassword} from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useUserChangePassword(props: IProps) {
  return useMutation({
    mutationKey: ["changePassword"],
    mutationFn: doChangePassword,
    ...props,
  });
}

export default useUserChangePassword;
