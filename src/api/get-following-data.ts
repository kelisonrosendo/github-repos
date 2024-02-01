import { api } from "@/lib/axios";
import { UserDataResponse } from "@/types/user";

export async function getFollowingData(userName: string) {
  const response = await api.get<UserDataResponse[]>(
    `/users/${userName}/following`
  );

  return response.data;
}
