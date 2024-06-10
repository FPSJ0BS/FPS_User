import { doReadOneNotifications } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useReadOneNotification(props: IProps) {
  return useMutation({
    mutationKey: ["readOneNotifcation"],
    mutationFn: doReadOneNotifications,
    ...props,
  });
}

export default useReadOneNotification;
