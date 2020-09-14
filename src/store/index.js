import { combineReducers } from './combine-reducers';
import { createStore } from './create-store';
import { loadState, debounce, saveState } from 'modules';

import gameReducer from 'reducers/game';
import kubitReducer from 'reducers/kubit';
import playerReducer from 'reducers/player';

const rootReducers = combineReducers({
  game: gameReducer,
  kubit: kubitReducer,
  player: playerReducer,
});

const persistedState = loadState();

const store = createStore(rootReducers, persistedState);

export default store;
