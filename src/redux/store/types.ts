import {UserSchema} from '../reducers/user/types';
import {AplicationSchema} from '../reducers/aplication/types';
import {CacheSchema} from '../reducers/cache/types';

export interface StoreSchema {
  user: UserSchema;
  aplication: AplicationSchema;
  cache: CacheSchema;
}
