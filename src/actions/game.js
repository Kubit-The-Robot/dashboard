import { GameConstants } from 'constants';

/**
 * @param {number} value
 */
export const setRoute = (route) => {
  const url = new URL(route);
  const { hash } = url;

  return {
    type: GameConstants.GAME_SET_ROUTE,
    payload: {
      route: hash,
    },
  }
};

export const setStage = (value) => {
  return {
    type: GameConstants.GAME_SET_STAGE,
    payload: { value },
  }
};

export const setPet = (value) => {
  return {
    type: GameConstants.GAME_SET_PET,
    payload: { value },
  }
};