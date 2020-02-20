import {AplicationSchema, ActionAplicationSchema} from './types';
import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  TOGGLE_SHOW_REPOSITORIES
} from '../../actions/aplication';

const initialState: AplicationSchema = {
  fetchUserStart: false,
  fetchUserSuccess: false,
  fetchUserFail: false,
  showRepositories: false
};

const cache = (state = initialState, action: ActionAplicationSchema) => {
  switch (action.type) {
    case FETCH_USER_START: {
      return {...state, fetchUserStart: true, fetchUserSuccess: false, fetchUserFail: false};
    }

    case FETCH_USER_SUCCESS: {
      return {...state, fetchUserStart: false, fetchUserSuccess: true, fetchUserFail: false};
    }

    case FETCH_USER_FAIL: {
      return {...state, fetchUserStart: false, fetchUserSuccess: false, fetchUserFail: true};
    }

    case TOGGLE_SHOW_REPOSITORIES: {
      return {...state, showRepositories: !state.showRepositories};
    }
    default:
      return {...state};
  }
};

export default cache;
