import { logger } from 'modules';

/**
 * Combine multiple reducers into a single one
 * @param {*} reducers
 */
export const combineReducers = (reducers) => (state = {}, action) => {
  const nextState = Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});

  logger(action, state, nextState);

  return nextState;
};
