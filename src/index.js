import OverReact from './core/overreact';
import Overdux from './core/overdux';

import { Store } from './core/overdux/store';
import { combineReducers } from './core/overdux/utils/combinereducers';
import { testReducer } from './reducers';

import './styles/global.styles.css';

Overdux.store = new Store(combineReducers(testReducer));

const App = require('./containers/App')['default'];

OverReact.render(<App />, document.getElementById('game-canvas'));
