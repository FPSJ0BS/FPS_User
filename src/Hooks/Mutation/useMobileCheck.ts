import { doMobileNumberCheck } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useMobileCheck(props: IProps) {
  return useMutation({
    mutationKey: ["mobileNumberCheck"],
    mutationFn: doMobileNumberCheck,
    ...props,
  });
}

export default useMobileCheck;
