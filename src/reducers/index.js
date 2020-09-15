import { combineReducers } from 'store/combine-reducers';

import gameReducer from 'reducers/game';
import kubitReducer from 'reducers/kubit';
import playerReducer from 'reducers/player';

const rootReducers = combineReducers({
  game: gameReducer,
  kubit: kubitReducer,
  player: playerReducer,
});

export default rootReducers;