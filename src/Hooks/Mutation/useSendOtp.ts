import { sendOtp } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useSendOtp(props: IProps) {
  return useMutation({
    mutationKey: ["sendOtp"],
    mutationFn: sendOtp,
    ...props,
  });
}

export default useSendOtp;
