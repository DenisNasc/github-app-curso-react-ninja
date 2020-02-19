import {AplicationSchema, ActionAplicationSchema} from './types';
import {FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAIL} from '../../actions/aplication';

const initialState: AplicationSchema = {
  fetchUserStart: false,
  fetchUserSuccess: false,
  fetchUserFail: false
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
    default:
      return {...state};
  }
};

export default cache;
