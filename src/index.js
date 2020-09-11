import OverReact from 'overreact';
import Overdux from 'overdux';

import { Store } from 'overdux/store';
import { combineReducers } from 'overdux/combinereducers';
import { testReducer } from 'reducers';

import './styles/global.styles.css';

Overdux.store = new Store(combineReducers(testReducer));

const App = require('./containers/App')['default'];

OverReact.render(<App />, document.getElementById('game-canvas'));
