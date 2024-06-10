import {  otpCheck } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useOtpCheck(props: IProps) {
  return useMutation({
    mutationKey: ["otpCheck"],
    mutationFn: otpCheck,
    ...props,
  });
}

export default useOtpCheck;
