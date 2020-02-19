import {Action} from 'redux';

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
}

export interface ActionUserSchema extends Action {
  type: string;
  payload?: UserSchema;
}
