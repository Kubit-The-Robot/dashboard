import OverReact from 'overreact';
import '@lottiefiles/lottie-player';

import store from './store';
import { debounce, saveState } from 'modules';

import './styles/global.styles.scss';

import Game from 'containers/Game';

const render = () => {
  OverReact.render(<Game store={store} />, document.getElementById('game-canvas'));
};

store.subscribe(render);
store.subscribe(
  debounce(() => {
    saveState(store.getState);
  })
);

render();
