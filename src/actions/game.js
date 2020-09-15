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