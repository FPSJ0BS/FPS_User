import {doCreateOrderId } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useCreateOrder(props: IProps) {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: doCreateOrderId,
    ...props,
  });
}

export default useCreateOrder;
