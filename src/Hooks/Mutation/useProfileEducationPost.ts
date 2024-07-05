import { doProfileEducationPost } from "@Repo/profileAPI";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useProfileEducationPost(props: IProps) {
  return useMutation({
    mutationKey: ["profileEducation"],
    mutationFn: doProfileEducationPost,
    ...props,
  });
}

export default useProfileEducationPost;
