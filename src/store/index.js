import OverReact from 'overreact';
import { createStore } from './create-store';
import { loadState, debounce, saveState } from 'modules';

import rootReducers from 'reducers';

const persistedState = loadState();

const store = createStore(rootReducers, persistedState);

function connect(mapStateToProps = () => {}, mapDispatchToProps = () => {}) {
  return function(WrappedComponent) {

    function ConnectedComponent() {
      const state = store.getState;

      return (<WrappedComponent
        {...mapStateToProps(state)}
        {...mapDispatchToProps(store.dispatch)}
      />
      )
    }

    return ConnectedComponent;
  }
}

export { store, connect };
