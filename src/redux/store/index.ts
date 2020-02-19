import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cache']
};

const loadFromLocalStorage = () => {
  try {
    const serializadeState = localStorage.getItem('persist:root');

    if (serializadeState === null) {
      return undefined;
    }
    const rawDataFromLocalStorage = JSON.parse(serializadeState);
    const cachedUsers = {cache: JSON.parse(rawDataFromLocalStorage.cache)};

    return cachedUsers;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const getCachedUsers = loadFromLocalStorage();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, getCachedUsers, composeWithDevTools());
export const persistor = persistStore(store);
