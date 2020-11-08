import OverReact from 'overreact';
import { loadState, debounce, saveState } from 'modules';

import { store } from './store';

import '@lottiefiles/lottie-player';
import './styles/global.styles.scss';

import App from './App';

const initGame = () => {
  OverReact.render(<App />, document.getElementById('game-canvas'));
};

store.subscribe(initGame);

store.subscribe(debounce(() => {
  saveState(store.getState);
}, 500));

initGame();