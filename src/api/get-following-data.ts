import { api } from "@/lib/axios";

export interface GetFollowingDataParams {
  userName: string;
}

export interface GetFollowingDataResponse {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
}

export async function getFollowingData({ userName }: GetFollowingDataParams) {
  const response = await api.get<GetFollowingDataResponse[]>(
    `/users/${userName}/following`
  );

  return response.data;
}
