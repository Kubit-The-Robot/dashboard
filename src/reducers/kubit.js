import { KubitConstants, KUBIT_STATES } from 'constants';
import { deepCopy } from 'modules';

const initialState = {
  energy: 20,
  happiness: 50,
  hungry: 50,
  mood: '',
  status: KUBIT_STATES.IS_IDLE,
};

const countReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case KubitConstants.DECREASE_ENERGY: {
      const newValue = state.energy - payload.value;

      return {
        ...deepCopy(state),
        energy: (newValue <= 0) ? 0 : newValue,
      };
    }

    case KubitConstants.DECREASE_HAPPINESS: {
      const newValue = state.happiness - payload.value;

      return {
        ...deepCopy(state),
        happiness: (newValue <= 0) ? 0 : newValue,
      };
    }

    case KubitConstants.DECREASE_HUNGRY: {
      const newValue = state.hungry - payload.value;

      return {
        ...deepCopy(state),
        hungry: (newValue <= 0) ? 0 : newValue,
      };
    }

    case KubitConstants.INCREASE_ENERGY: {
      const newValue = state.energy + payload.value;

      return {
        ...deepCopy(state),
        energy: (newValue >= 100) ? 100 : newValue,
      };
    }

    case KubitConstants.INCREASE_HAPPINESS: {
      const newValue = state.happiness + payload.value;

      return {
        ...deepCopy(state),
        happiness: (newValue >= 100) ? 100 : newValue,
      };
    }

    case KubitConstants.INCREASE_HUNGRY: {
      const newValue = state.hungry + payload.value;

      return {
        ...deepCopy(state),
        hungry: (newValue >= 100) ? 100 : newValue,
      };
    }

    case KubitConstants.SET_MOOD: {
      return {
        ...deepCopy(state),
        mood: payload.value,
      };
    }

    case KubitConstants.SET_STATUS: {
      return {
        ...deepCopy(state),
        status: payload.value,
      };
    }

    default:
      return state;
  }
};

export default countReducer;
