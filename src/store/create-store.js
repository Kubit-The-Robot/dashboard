/**
 * Creates a global store
 * @param {*} reducer
 */
/**
 * Create the game store
 * @param { function } reducer
 */

export const createStore = (reducer, persistedState) => {
  let state = persistedState || {};
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return {
    get getState() {
      return getState();
    },
    dispatch,
    subscribe,
  };
};
