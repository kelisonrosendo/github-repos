import { UserNameProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { getFollowingData } from "@/api/get-following-data";

export function Following({ userName }: UserNameProp) {
  const { data: followingData } = useQuery({
    queryKey: ["following", userName],
    queryFn: () => getFollowingData(userName),
  });

  return (
    <div>
      {followingData?.map((following) => (
        <div key={following.id}>{following.login}</div>
      ))}
    </div>
  );
}
