import { useQuery } from "@tanstack/react-query";
import { getFollowerData } from "@/api/get-follower-data";

interface UserNameProps {
  userName: string;
}

export function Follower({ userName }: UserNameProps) {
  const { data: followerData, isPending } = useQuery({
    queryKey: ["follower", userName],
    queryFn: () => getFollowerData({ userName }),
  });

  return (
    <>
      {isPending ? (
        "carregando"
      ) : (
        <div>
          {followerData?.map((follower) => (
            <div key={follower.id}>{follower.login}</div>
          ))}
        </div>
      )}
    </>
  );
}
