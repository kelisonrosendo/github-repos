export interface UserDataResponse {
  id: number;
  login: string;
  name?: string;
  avatar_url: string;
  bio?: string;
  location?: string;
  html_url: string;
  followers?: number;
  following?: number;
  public_repos?: number;
}

export interface UserNameProp {
  userName: string;
}
