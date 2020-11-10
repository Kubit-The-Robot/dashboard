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
  battery: 1,
  stages: [
    {
      id: 30,
      slug: 'kubit-room',
      name: 'Quarto',
      type: 'stage',
      value: 0,
    },
    {
      id: 33,
      slug: 'ship',
      name: 'Nave-mãe',
      type: 'stage',
      value: 0,
    },
    {
      id: 31,
      slug: 'mars',
      name: 'Marte',
      type: 'stage',
      value: 0,
    },
    {
      id: 35,
      slug: 'venus',
      name: 'Vênus',
      type: 'stage',
      value: 0,
    },
    {
      id: 32,
      slug: 'pluto',
      name: 'Plutão',
      type: 'stage',
      value: 0,
    },
    {
      id: 34,
      slug: 'space',
      name: 'Galáxia',
      type: 'stage',
      value: 0,
    },
    {
      id: 29,
      slug: 'cozmo',
      name: 'Cosmos',
      type: 'stage',
      value: 0,
    },
    {
      id: 27,
      slug: 'abstract-yellow',
      name: 'Vórtice',
      type: 'stage',
      value: 0,
    },
    {
      id: 24,
      slug: 'abstract-blue',
      name: 'Vórtice 2',
      type: 'stage',
      value: 0,
    },
    {
      id: 25,
      slug: 'abstract-light',
      name: 'Vórtice 3',
      type: 'stage',
      value: 0,
    },
    {
      id: 26,
      slug: 'abstract-purple',
      name: 'Vórtice 4',
      type: 'stage',
      value: 0,
    },
    {
      id: 28,
      slug: 'abstract-red',
      name: 'Vórtice 5',
      type: 'stage',
      value: 0,
    },
  ],
  pets: [],
  foods: [
    {
      id: 2,
      slug: 'barbecue',
      name: 'Churrasco',
      type: 'hungry',
      value: 10,
      quantity: 1,
    },
    {
      id: 3,
      slug: 'carrots',
      name: 'Cenoura',
      type: 'hungry',
      value: 20,
    },
    {
      id: 4,
      slug: 'chicken',
      name: 'Frango',
      type: 'hungry',
      value: 20,
    },
    {
      id: 5,
      slug: 'eggs-bacon',
      name: 'Ovos com Bacon',
      type: 'hungry',
      value: 10,
    },
    {
      id: 6,
      slug: 'eggs',
      name: 'Ovos',
      type: 'hungry',
      value: 10,
    },
    {
      id: 7,
      slug: 'fish',
      name: 'Peixe',
      type: 'hungry',
      value: 20,
    },
    {
      id: 8,
      slug: 'french-fries',
      name: 'Batata Frita',
      type: 'hungry',
      value: 10,
    },
    {
      id: 9,
      slug: 'hamburger',
      name: 'Hamburguer',
      type: 'hungry',
      value: 10,
    },
    {
      id: 10,
      slug: 'hotdog',
      name: 'Cachorro-Quente',
      type: 'hungry',
      value: 10,
    },
    {
      id: 11,
      slug: 'pizza',
      name: 'Pizza',
      type: 'hungry',
      value: 10,
    },
    {
      id: 12,
      slug: 'salad',
      name: 'Salada',
      type: 'hungry',
      value: 20,
    },
    {
      id: 13,
      slug: 'salmon',
      name: 'Salmão',
      type: 'hungry',
      value: 20,
    },
    {
      id: 14,
      slug: 'soup',
      name: 'Sopa',
      type: 'hungry',
      value: 20,
    },
    {
      id: 15,
      slug: 'spaghetti',
      name: 'Macarrão',
      type: 'hungry',
      value: 10,
    },
    {
      id: 16,
      slug: 'steak',
      name: 'Carne',
      type: 'hungry',
      value: 20,
    },
    {
      id: 17,
      slug: 'wrapper',
      name: 'Taco',
      type: 'hungry',
      value: 10,
    },
  ],
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
