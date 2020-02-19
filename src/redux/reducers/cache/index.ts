import {ActionCacheSchema, UserETagSchema} from './types';
import {CACHE_THIS_USER, THIS_USER_IS_CACHED} from '../../actions/cache';

const initialState = {
  users: []
};

const cache = (state = initialState, action: ActionCacheSchema) => {
  switch (action.type) {
    case CACHE_THIS_USER: {
      const alreadyCached = state.users.find(
        (cachedUser: UserETagSchema) =>
          cachedUser.nickname.toLowerCase() === action.payload?.query.toLowerCase()
      );

      if (alreadyCached) {
        return {...state};
      }

      return {...state, users: [...state.users, {...action.payload}]};
    }

    case THIS_USER_IS_CACHED: {
      return {...state};
    }
    default:
      return {...state};
  }
};

export default cache;
