import { UserNameProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { getFollowerData } from "@/api/get-follower-data";
import { ListUserRepo } from "@/components/list-user-repo";

export function Follower({ userName }: UserNameProp) {
  const { data: followerData, isPending } = useQuery({
    queryKey: ["follower", userName],
    queryFn: () => getFollowerData(userName),
  });

  return (
    <>
      {isPending ? (
        "carregando"
      ) : (
        <>
          {followerData?.map((follower) => (
            <ListUserRepo {...follower} key={follower.id} />
          ))}
        </>
      )}
    </>
  );
}
