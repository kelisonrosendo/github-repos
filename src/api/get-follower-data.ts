import { api } from "@/lib/axios";
import { UserDataResponse } from "@/types/user";

export async function getFollowerData(userName: string) {
  const response = await api.get<UserDataResponse[]>(
    `/users/${userName}/followers`
  );

  return response.data;
}
