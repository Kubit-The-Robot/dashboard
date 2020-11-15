import { keymirror } from 'modules';

export * from './game';
export * from './kubit';
export * from './player';
export * from './dashboard';

export const ROUTES = {
  DASHBOARD: '#dashboard',
  GAME: '#game',
  INTRO: '#intro',
  START: '#start',
  OPENING: '#abertura',
  TUTORIAL: '#comojogar',
  MATH: '#matematica',
  LOGIN: '#login',
};

export const KUBIT_STATES = keymirror({
  ANGRY: undefined,
  ANSWER_RIGHT: undefined,
  ANSWER_WRONG: undefined,
  EATING: undefined,
  ENERGIZING: undefined,
  IS_BATTERY_LOW: undefined,
  IS_DAMAGED: undefined,
  IS_HUNGRY: undefined,
  IS_IDLE: undefined,
  IS_SAD: undefined,
  LEVEL_UP: undefined,
  PRE_FLIGHT: undefined,
  SMILING: undefined,
  TALKING: undefined,
  TALKING_BAD: undefined,
  TALKING_GOOD: undefined,
});

export const ANIMATION_DURATION = {
  ANGRY: 3000,
  ANSWER_RIGHT: 0,
  ANSWER_WRONG: 0,
  EATING: 2000,
  ENERGIZING: 2000,
  IS_BATTERY_LOW: 0,
  IS_DAMAGED: 0,
  IS_HUNGRY: 0,
  IS_IDLE: 0,
  IS_SAD: 0,
  LEVEL_UP: 0,
  PRE_FLIGHT: 0,
  SMILING: 3000,
  TALKING: 2000,
  TALKING_BAD: 2000,
  TALKING_GOOD: 2000,
};
