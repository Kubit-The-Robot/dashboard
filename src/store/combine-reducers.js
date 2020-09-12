import { logger } from 'modules';

/**
 * Combine multiple reducers into a single one
 * @param {*} reducers
 */
export const combineReducers = (reducers) => (state = {}, action) =>
  Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);

    logger(action, state, nextState);

    return nextState;
  }, {});
