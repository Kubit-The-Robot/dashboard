/**
 * Create the game store
 * @param { function } currentReducer
 */

export const createStore = (currentReducer, persistedState) => {
  let currentState = persistedState || {};
  let currentListeners = [];
  let nextListeners = currentListeners;

  const getState = () => currentState;

  const ensureCanMutateNextListeners = () => {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  const subscribe = (listener) => {
    let isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();

      const index = nextListeners.indexOf(listener);

      nextListeners.splice(index, 1);
    };
  };

  const dispatch = (action) => {
    currentState = currentReducer(currentState, action);
    const listeners = (currentListeners = nextListeners);

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];

      listener();
    }

    return action;
  };

  dispatch({ type: 'INIT_STORE' });

  return {
    get getState() {
      return getState();
    },
    dispatch,
    subscribe,
  };
};
