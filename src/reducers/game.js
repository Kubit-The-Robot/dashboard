import { GameConstants } from 'constants';
import { deepCopy } from 'modules';
import { ROUTES } from 'constants';

const initialState = {
  alerts: [],
  events: {},
  skipIntro: false,
  route: ROUTES.START,
  currentPet: '',
  currentStage: 'ship',
  stages: [
    {
      id: 30,
      slug: 'kubit-room',
      name: 'Quarto',
      type: 'stage',
    },
    {
      id: 33,
      slug: 'ship',
      name: 'Nave-mãe',
      type: 'stage',
    },
    {
      id: 31,
      slug: 'mars',
      name: 'Marte',
      type: 'stage',
    },
    {
      id: 35,
      slug: 'venus',
      name: 'Vênus',
      type: 'stage',
    },
    {
      id: 32,
      slug: 'pluto',
      name: 'Plutão',
      type: 'stage',
    },
    {
      id: 34,
      slug: 'space',
      name: 'Galáxia',
      type: 'stage',
    },
    {
      id: 29,
      slug: 'cozmo',
      name: 'Cosmos',
      type: 'stage',
    },
    {
      id: 27,
      slug: 'abstract-yellow',
      name: 'Vórtice',
      type: 'stage',
    },
    {
      id: 24,
      slug: 'abstract-blue',
      name: 'Vórtice 2',
      type: 'stage',
    },
    {
      id: 25,
      slug: 'abstract-light',
      name: 'Vórtice 3',
      type: 'stage',
    },
    {
      id: 26,
      slug: 'abstract-purple',
      name: 'Vórtice 4',
      type: 'stage',
    },
    {
      id: 28,
      slug: 'abstract-red',
      name: 'Vórtice 5',
      type: 'stage',
    },
  ],
  pets: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GameConstants.GAME_SET_ROUTE: {
      return {
        ...deepCopy(state),
        route: payload.route,
      };
    }

    case GameConstants.GAME_SET_STAGE: {
      return {
        ...deepCopy(state),
        currentStage: payload.value,

      };
    }

    case GameConstants.GAME_SET_PET: {
      return {
        ...deepCopy(state),
        currentPet: payload.value,
      };
    }

    default:
      return state;
  }
};

export default reducer;
