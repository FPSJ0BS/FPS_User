import { doGenerateAccessToken } from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useAccessTokenGenerate(props: IProps) {
  return useMutation({
    mutationKey: ["accessToken"],
    mutationFn: doGenerateAccessToken,
    ...props,
  });
}

export default useAccessTokenGenerate;
