import { doaddFavourite} from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useFavourite(props: IProps) {
  return useMutation({
    mutationKey: ["addFavourite"],
    mutationFn: doaddFavourite,
    ...props,
  });
}

export default useFavourite;
