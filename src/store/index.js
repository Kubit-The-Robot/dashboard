import { combineReducers } from './combine-reducers';
import { createStore } from './create-store';
import { loadState } from 'modules';

import countReducer from 'reducers/app';

const rootReducers = combineReducers({
  app: countReducer,
});

const persistedState = loadState();

const store = createStore(rootReducers, persistedState);

export default store;
