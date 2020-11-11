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
export const setMood = (value, duration) => {
  return {
    type: KubitConstants.SET_MOOD,
    payload: {
      value,
      duration,
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

export const toggleFoodsModal = (value) => {
  return {
    type: KubitConstants.TOGGLE_FOODS_MODAL,
    payload: {
      value,
    },
  }
};

export const togglePetsModal = (value) => {
  return {
    type: KubitConstants.TOGGLE_PETS_MODAL,
    payload: {
      value,
    },
  }
};

export const toggleStagesModal = (value) => {
  return {
    type: KubitConstants.TOGGLE_STAGES_MODAL,
    payload: {
      value,
    },
  }
};