import OverReact from 'overreact';
import { loadState, debounce, saveState } from 'modules';

import { store } from './store';

import '@lottiefiles/lottie-player';
import './styles/global.styles.scss';

import Game from 'containers/Game';

const initGame = () => {
  OverReact.render(<Game />, document.getElementById('game-canvas'));
};

store.subscribe(initGame);

store.subscribe(debounce(() => {
  saveState(store.getState);
}, 500));

initGame();