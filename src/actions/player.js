import { PlayerConstants } from 'constants';

/**
 * @param {number} value
 */
export const addCoin = (value) => {
  return {
    type: PlayerConstants.DECREASE_COINS,
    payload: {
      amount: value,
    },
  }
};

/**
 * @param {number} value
 */
export const removeCoin = (value) => {
  return {
    type: PlayerConstants.INCREASE_COINS,
    payload: {
      amount: value,
    },
  }
};


export const addExperience = () => {
  return {
    type: PlayerConstants.INCREASE_EXPERIENCE,
  }
};

export const addLevel = () => {
  return {
    type: PlayerConstants.INCREASE_LEVEL,
  }
};

/**
 * @param {string} mood
 */
export const setPlayerMood = (mood) => {
  return {
    type: PlayerConstants.PLAYER_SET_MOOD,
    payload: {
      mood,
    },
  }
};

/**
 * @param {string} mood
 */
export const setPlayerName = (name) => {
  return {
    type: PlayerConstants.PLAYER_SET_NAME,
    payload: {
      name,
    },
  }
};
