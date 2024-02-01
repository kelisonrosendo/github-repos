import { api } from "@/lib/axios";
import { RepoDataResponse } from "@/types/repo";

export async function getRepoData(userName: string) {
  const response = await api.get<RepoDataResponse[]>(
    `/users/${userName}/repos`
  );

  return response.data;
}
