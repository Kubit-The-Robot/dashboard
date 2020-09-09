import { v4 } from './utils/uuid';

import {SETUP_STATE} from './constants';

/**
 * Reducer Description
 * @name Reducer
 * @function
 * @param {Object} state The initial state or the state that is being updated
 * @param {string} action The action that will be taken when the function is called
 */

class Store {
    state = {};
    /**
     * @param {Reducer} reducers Defines the Reducers that will be stored into the application
     */
    constructor(reducers = {}) {
        for (const reducer in reducers) {
            if (!(reducers[reducer] instanceof Function)) {
                return new Error('All reducers must be Functions');
            }

            const reducerState = reducers[reducer](null, `${SETUP_STATE}/${v4()}`);

            this.state = {...this.state, ...reducerState}
        }
    }
}

export { Store };
