import {  doWorkStatus } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useWorkStatus(props: IProps) {
  return useMutation({
    mutationKey: ["workStatus"],
    mutationFn: doWorkStatus,
    ...props,
  });
}

export default useWorkStatus;
