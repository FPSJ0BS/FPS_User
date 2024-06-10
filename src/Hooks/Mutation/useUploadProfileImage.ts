import { doUploadProfileImage } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useUploadProfileImage(props: IProps) {
  return useMutation({
    mutationKey: ["profileImage"],
    mutationFn: doUploadProfileImage,
    ...props,
  });
}

export default useUploadProfileImage;
