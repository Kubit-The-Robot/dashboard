import { KubitConstants } from 'constants';

/**
 * @param {number} value
 */
export const removeEnergy = (value) => {
  return {
    type: KubitConstants.DECREASE_ENERGY,
    payload: {
      value,
    },
  }
};

/**
 * @param {number} value
 */
export const removeHappiness = (value) => {
  return {
    type: KubitConstants.DECREASE_HAPPINESS,
    payload: {
      value,
    },
  }
};

/**
 * @param {number} value
 */
export const removeHungry = (value) => {
  return {
    type: KubitConstants.DECREASE_HUNGRY,
    payload: {
      value,
    },
  }
};

/**
 * @param {number} value
 */
export const addEnergy = (value) => {
  return {
    type: KubitConstants.INCREASE_ENERGY,
    payload: {
      value,
    },
  }
};

/**
 * @param {number} value
 */
export const addHappiness = (value) => {
  return {
    type: KubitConstants.INCREASE_HAPPINESS,
    payload: {
      value,
    },
  }
};

/**
 * @param {number} value
 */
export const addHungry = (value) => {
  return {
    type: KubitConstants.INCREASE_HUNGRY,
    payload: {
      value,
    },
  }
};

/**
 * @param {string} value
 */
export const setMood = (value) => {
  return {
    type: KubitConstants.SET_MOOD,
    payload: {
      value,
    },
  }
};

/**
 * @param {string} value
 */
export const setStatus = (value) => {
  return {
    type: KubitConstants.SET_STATUS,
    payload: {
      value,
    },
  }
};