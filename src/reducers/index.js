import { combineReducers } from 'store/combine-reducers';

import gameReducer from 'reducers/game';
import kubitReducer from 'reducers/kubit';
import dashboardReducer from 'reducers/dashboard';
import playerReducer from 'reducers/player';

const rootReducers = combineReducers({
  game: gameReducer,
  dashboard: dashboardReducer,
  kubit: kubitReducer,
  player: playerReducer,
});

export default rootReducers;