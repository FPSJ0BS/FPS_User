import { doVerificationOtp } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useVerificationOtp(props: IProps) {
  return useMutation({
    mutationKey: ["verificationOtp"],
    mutationFn: doVerificationOtp,
    ...props,
  });
}

export default useVerificationOtp;
