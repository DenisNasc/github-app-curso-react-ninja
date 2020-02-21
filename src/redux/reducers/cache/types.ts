import {Action} from 'redux';
import {UserSchema} from '../user/types';

export interface UserETagSchema extends UserSchema {
  etag: string;
}

export interface CacheSchema {
  users: UserETagSchema[];
}

export interface ActionCacheSchema extends Action {
  type: string;
  payload?: {etag: string; query: string};
}
