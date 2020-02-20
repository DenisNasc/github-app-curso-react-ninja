import {Action} from 'redux';

export type repositorie = {
  id: number;
  name: string;
  language: string | null;
  linkTo: string;
  createdAt: string;
};

export interface UserSchema {
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
  repositories: repositorie[];
}

export interface ActionUserSchema extends Action {
  type: string;
  payload?: UserSchema;
}
