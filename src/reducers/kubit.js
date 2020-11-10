import { KubitConstants, KUBIT_STATES } from 'constants';
import { deepCopy } from 'modules';

const initialState = {
  energy: 20,
  happiness: 50,
  hungry: 50,
  mood: '',
  status: KUBIT_STATES.IS_IDLE,
  isFoodOpen: false,
  isPetOpen: false,
  isStageOpen: false,
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

    case KubitConstants.TOGGLE_FOODS_MODAL: {
      return {
        ...deepCopy(state),
        isPetOpen: false,
        isStageOpen: false,
        isFoodOpen: payload.value,
      };
    }

    case KubitConstants.TOGGLE_PETS_MODAL: {
      return {
        ...deepCopy(state),
        isFoodOpen: false,
        isStageOpen: false,
        isPetOpen: payload.value,
      };
    }

    case KubitConstants.TOGGLE_STAGES_MODAL: {
      return {
        ...deepCopy(state),
        isFoodOpen: false,
        isPetOpen: false,
        isStageOpen: payload.value,
      };
    }

    default:
      return state;
  }
};

export default countReducer;
