import { doSignUp} from "@Repo/AuthRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;

function useReg(props: IProps) {
  return useMutation({
    mutationKey: ["reg"],
    mutationFn: doSignUp,
    ...props,
  });
}

export default useReg;
