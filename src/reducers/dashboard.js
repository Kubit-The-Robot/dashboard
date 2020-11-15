import { GameConstants } from 'constants';
import { deepCopy } from 'modules';
import { ROUTES } from 'constants';

const initialState = {
  lessons: [
    {
      id: 2,
      slug: 'matematica',
      name: 'Matemática',
      day: 'Segunda',
      isBlocked: false,
      hasFinished: false,
      experience: 100,
    },
    {
      id: 3,
      slug: 'artes',
      name: 'Artes',
      day: 'Terça',
      isBlocked: false,
      hasFinished: false,
      experience: 100,
    },
    {
      id: 4,
      slug: 'portugues',
      name: 'Português',
      day: 'Quarta',
      isBlocked: true,
      hasFinished: false,
      experience: 100,
    },
    {
      id: 5,
      slug: 'ciencias',
      name: 'Ciências',
      day: 'Quinta',
      isBlocked: true,
      hasFinished: false,
      experience: 100,
    },
    {
      id: 6,
      slug: 'ingles',
      name: 'Inglês',
      day: 'Sexta',
      isBlocked: true,
      hasFinished: false,
      experience: 100,
    },
  ],
  matematica: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GameConstants.GAME_SET_ROUTE: {
      return {
        ...deepCopy(state),
        route: payload.route,
      };
    }

    default:
      return state;
  }
};

export default reducer;
