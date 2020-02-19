import {UserSchema, ActionUserSchema} from './types';
import SET_USER from '../../actions/user';

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
  following: 0
};

const cache = (state = initialState, action: ActionUserSchema) => {
  switch (action.type) {
    case SET_USER: {
      return {...action.payload};
    }
    default:
      return {...state};
  }
};

export default cache;
