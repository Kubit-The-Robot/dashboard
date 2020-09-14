import OverReact from 'overreact';
import '@lottiefiles/lottie-player';

import store from './store';

import './styles/global.styles.scss';

import Game from 'containers/Game';

// const initGame = () => {
//   OverReact.render(<Game />, document.getElementById('game-canvas'));
// };

// store.subscribe(initGame);

// initGame();

OverReact.render(<Game />, document.getElementById('game-canvas'));