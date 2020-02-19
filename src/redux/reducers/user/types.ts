import {Action} from 'redux';

export interface UserSchema {
  id: string;
  nickname: string;
  name: string;
  avatarURL: string;
  description: string;
  createdAt: string;
  repos: number;
}

export interface ActionUserSchema extends Action {
  type: string;
  payload?: UserSchema;
}
