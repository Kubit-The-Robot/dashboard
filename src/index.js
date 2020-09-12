import OverReact from 'overreact';
import store from './store';
import { debounce, saveState } from 'modules';

import './styles/global.styles.css';

import Counter from 'containers/Counter';

const render = () => {
  OverReact.render(<Counter store={store} />, document.getElementById('game-canvas'));
};

store.subscribe(render);
store.subscribe(
  debounce(() => {
    saveState(store.getState);
  })
);

render();
