import { api } from "@/lib/axios";

export interface GetUserDataParams {
  userName: string;
}

export interface GetUserDataResponse {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export async function getUserData({ userName }: GetUserDataParams) {
  const response = await api.get<GetUserDataResponse>(`/users/${userName}`);

  return response.data;
}
