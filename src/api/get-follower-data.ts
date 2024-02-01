import { api } from "@/lib/axios";
import { FollowerDataResponse } from "@/types/follower";

export async function getFollowerData(userName: string) {
  const response = await api.get<FollowerDataResponse[]>(
    `/users/${userName}/followers`
  );

  return response.data;
}
