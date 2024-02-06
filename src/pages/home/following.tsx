import { UserNameProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { getFollowingData } from "@/api/get-following-data";
import { ListUserRepo } from "@/components/list-user-repo";
import { ListUserRepoSkeleton } from "@/components/list-user-repo-skeleton";

export function Following({ userName }: UserNameProp) {
  const { data: followingData, isPending } = useQuery({
    queryKey: ["following", userName],
    queryFn: () => getFollowingData(userName),
  });

  return (
    <>
      {isPending ? (
        <ListUserRepoSkeleton />
      ) : (
        <>
          {followingData?.map((following) => (
            <ListUserRepo {...following} key={following.id} />
          ))}
        </>
      )}
    </>
  );
}
