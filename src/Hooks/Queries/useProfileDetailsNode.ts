import { doGetProfileDetailsNode } from "@Repo/ProfileRepo";
import { useQuery } from "@tanstack/react-query";
import { Querykeys } from "./queryname";
function useProfileDetailsNode(query?: any) {
  return useQuery({
    queryKey: [Querykeys.profileDetails, query],
    queryFn: doGetProfileDetailsNode,
    enabled: !!query?.facultyID
  });
}

export default useProfileDetailsNode;
