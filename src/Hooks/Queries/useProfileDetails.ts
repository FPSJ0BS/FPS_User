import { doGetProfileDetails } from "@Repo/ProfileRepo";
import { useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
function useProfileDetails(query?: any) {
  return useQuery({
    queryKey: [Querykeys.profileDetails, query],
    queryFn: doGetProfileDetails,
    enabled: !!query?.UID
  });
}

export default useProfileDetails;
