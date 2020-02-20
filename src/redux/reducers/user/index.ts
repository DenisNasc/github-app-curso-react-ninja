import {UserSchema, ActionUserSchema} from './types';
import {SET_USER, SET_USER_REPOSITORIES} from '../../actions/user';

const initialState: UserSchema = {
  id: '',
  email: '',
  nickname: '',
  name: '',
  avatarURL: '',
  description: '',
  createdAt: '',
  repos: 0,
  followers: 0,
  following: 0,
  repositories: []
};

const cache = (state = initialState, action: ActionUserSchema) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        id: action.payload?.id,
        email: action.payload?.email,
        nickname: action.payload?.nickname,
        name: action.payload?.name,
        avatarURL: action.payload?.avatarURL,
        description: action.payload?.description,
        createdAt: action.payload?.createdAt,
        repos: action.payload?.repos,
        followers: action.payload?.followers,
        following: action.payload?.following,
        repositories: action.payload?.repositories
      };
    }

    default:
      return {...state};
  }
};

export default cache;
