import { doReadAllNotifications } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useReadAllNotification(props: IProps) {
  return useMutation({
    mutationKey: ["readAllNotifcation"],
    mutationFn: doReadAllNotifications,
    ...props,
  });
}

export default useReadAllNotification;
