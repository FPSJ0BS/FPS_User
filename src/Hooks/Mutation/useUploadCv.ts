import { useGlobalContext } from "@Context/GlobalContextProvider";
import { doUploadProfileCv } from "@Repo/ProfileRepo";
import { IMutate } from "@Type/QueryType";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
type IProps = IMutate<UseMutationOptions<any, Error, {}, unknown>>;
function useUploadCv(props: IProps) {
  const {setProgress} = useGlobalContext();
  return useMutation({
    mutationKey: ["UploadCv"],
    mutationFn: (data) => doUploadProfileCv(data, setProgress),
    ...props,
  });
}

export default useUploadCv;
