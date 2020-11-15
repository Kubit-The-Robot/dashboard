import { DashboardConstants } from 'constants';
import { deepCopy } from 'modules';

const initialState = {
  finished: 0,
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
      isBlocked: true,
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
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DashboardConstants.FINISH_LESSON: {
      const slug = payload.value;
      const found = state.lessons.find(item => item.slug === slug);
      const updatedItem = {
        ...found,
        hasFinished: true,
      }

      const finished = [...state.lessons.filter(item => item.slug !== slug), updatedItem].filter((item) => item.hasFinished);

      return {
        ...deepCopy(state),
        finished: finished.length,
        lessons: [...state.lessons.filter(item => item.slug !== slug), updatedItem],
      };
    }

    default:
      return state;
  }
};

export default reducer;
