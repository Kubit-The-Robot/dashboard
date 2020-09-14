import OverReact from 'overreact';
import '@lottiefiles/lottie-player';

import store from './store';
import { debounce, saveState } from 'modules';

import './styles/global.styles.scss';

import Game from 'containers/Game';

const initGame = () => {
  OverReact.render(<Game store={store} />, document.getElementById('game-canvas'));
};

store.subscribe(initGame);

initGame();
