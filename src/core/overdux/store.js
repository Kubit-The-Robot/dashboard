import { v4 } from './utils/uuid';

import { SETUP_STATE } from './constants';

/**
 * Reducer Description
 * @name Reducer
 * @function
 * @param {Object} state - The initial state or the state that is being updated
 * @param {string} action - The action that will be taken when the function is called
 */

/**
 * @typedef {Object} Action
 * @property {String} type - Defines the action type
 * @property {*} [data] - Defines what will be updated inside the state
 */

class Store {
  state = {};
  reducers = {};
  /**
   * @param {Reducer} reducers - Defines the Reducers that will be stored into the application
   */
  constructor(reducers = {}) {
    for (const reducer in reducers) {
      if (!(reducers[reducer] instanceof Function)) {
        return new Error('All reducers must be Functions');
      }

      const reducerState = reducers[reducer](null, `@${SETUP_STATE}/${v4()}`);

      this.state = { ...this.state, ...reducerState };
    }

    this.reducers = reducers;
  }
  /**
   * @param {Action} action - Defines the action that will be sent to some reducer
   */
  dispatch(action) {
    if (!action.type) {
      return new Error('action.type has to be defined');
    }

    for (const reducer in this.reducers) {
      this.reducers[reducer](action.data, action.type);
    }
  }
}

export { Store };
