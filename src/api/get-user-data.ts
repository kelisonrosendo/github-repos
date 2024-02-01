import { api } from "@/lib/axios";
import { UserDataResponse } from "@/types/user";

export async function getUserData(userName: string) {
  const response = await api.get<UserDataResponse>(`/users/${userName}`);

  return response.data;
}
