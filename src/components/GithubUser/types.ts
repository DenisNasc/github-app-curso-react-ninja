export interface GithubUserSchema {
  id?: string;
  email: string;
  nickname: string;
  name: string;
  avatarURL: string;
  description: string;
  createdAt: string;
  repos: number;
  following: number;
  followers: number;
}
