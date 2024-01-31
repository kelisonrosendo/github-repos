import { api } from "@/lib/axios";

export interface GetRepoDataParams {
  userName: string;
}

export interface GetRepoDataResponse {
  id: number;
  name: string;
  html_url: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
}

export async function getRepoData({ userName }: GetRepoDataParams) {
  const response = await api.get<GetRepoDataResponse[]>(
    `/users/${userName}/repos`
  );

  return response.data;
}
