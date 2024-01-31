import { useQuery } from "@tanstack/react-query";
import { getFollowingData } from "@/api/get-following-data";

interface UserNameProps {
  userName: string;
}

export function Following({ userName }: UserNameProps) {
  const { data: followingData } = useQuery({
    queryKey: ["following", userName],
    queryFn: () => getFollowingData({ userName }),
  });

  return (
    <div>
      {followingData?.map((following) => (
        <div key={following.id}>{following.name}</div>
      ))}
    </div>
  );
}
