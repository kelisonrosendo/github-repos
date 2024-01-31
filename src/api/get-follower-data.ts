import { api } from "@/lib/axios";

export interface GetFollowerDataParams {
  userName: string;
}

export interface GetFollowerDataResponse {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
}

export async function getFollowerData({ userName }: GetFollowerDataParams) {
  const response = await api.get<GetFollowerDataResponse[]>(
    `/users/${userName}/followers`
  );

  return response.data;
}
