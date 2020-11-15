import OverReact from 'overreact';
import '@lottiefiles/lottie-player';

import { loadState, debounce, saveState, initWebsockets } from 'modules';

import { store } from './store';

import './styles/global.styles.scss';

import App from './App';

const initGame = () => {
  OverReact.render(<App />, document.getElementById('game-canvas'));
};

store.subscribe(initGame);

initWebsockets();

initGame();