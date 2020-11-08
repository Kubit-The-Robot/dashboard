import { keymirror } from 'modules';

export * from './game';
export * from './kubit';
export * from './player';

export const ROUTES = {
  FOOD: '#food',
  GAME: '#game',
  INTRO: '#intro',
  SHOP: '#shop',
  START: '#start',
  USERNAME: '#username',
  WORKSHOP: '#workshop',
  DASHBOARD: '#dashboard',
};

export const KUBIT_STATES = keymirror({
  ANGRY: undefined,
  ANSWER_RIGHT: undefined,
  ANSWER_WRONG: undefined,
  EATING: undefined,
  ENERGIZING: undefined,
  FLYING: undefined,
  IS_BATTERY_LOW: undefined,
  IS_DAMAGED: undefined,
  IS_HUNGRY: undefined,
  IS_IDLE: undefined,
  IS_SAD: undefined,
  SMILING: undefined,
  TALKING: undefined,
  TALKING_BAD: undefined,
  TALKING_GOOD: undefined,
  LEVEL_UP: undefined,
});
