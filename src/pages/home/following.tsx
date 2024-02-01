import { UserNameProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { getFollowingData } from "@/api/get-following-data";
import { ListUserRepo } from "@/components/list-user-repo";

export function Following({ userName }: UserNameProp) {
  const { data: followingData, isPending } = useQuery({
    queryKey: ["following", userName],
    queryFn: () => getFollowingData(userName),
  });

  return (
    <>
      {isPending ? (
        "Carregando..."
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
