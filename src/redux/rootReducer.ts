import {combineReducers} from 'redux';

import user from './reducers/user';
import cache from './reducers/cache';
import aplication from './reducers/aplication';

const rootReducer = combineReducers({user, cache, aplication});

export default rootReducer;
