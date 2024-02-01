import { api } from "@/lib/axios";
import { FollowingDataResponse } from "@/types/following";

export async function getFollowingData(userName: string) {
  const response = await api.get<FollowingDataResponse[]>(
    `/users/${userName}/following`
  );

  return response.data;
}
