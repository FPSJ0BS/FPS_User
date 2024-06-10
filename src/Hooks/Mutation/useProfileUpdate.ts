import { doProfileUpdate } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useProfileUpdate(props: IProps) {
  return useMutation({
    mutationKey: ["profileUpdate"],
    mutationFn: doProfileUpdate,
    ...props,
  });
}

export default useProfileUpdate;
