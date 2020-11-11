import { GameConstants, KubitConstants, KUBIT_STATES, ANIMATION_DURATION } from 'constants';
import { deepCopy } from 'modules';

const moodsList = [
  'ANGRY',
  'ANSWER_RIGHT',
  'ANSWER_WRONG',
  'EATING',
  'ENERGIZING',
  'LEVEL_UP',
  'PRE_FLIGHT',
  'SMILING',
  'TALKING',
  'TALKING_BAD',
  'TALKING_GOOD',
];

const initialState = {
  energy: 100,
  happiness: 100,
  hungry: 0,
  mood: '',
  nextUpdate: Date.now(),
  nextUpdateDuration: 2000,
  status: KUBIT_STATES.IS_IDLE,
  isFoodOpen: false,
  isPetOpen: false,
  isStageOpen: false,
};

const defineKubitStatus = (state) => {
  const {
    energy,
    happiness,
    hungry,
    mood,
    nextUpdate,
  } = state;

  if (mood && nextUpdate > Date.now()) {
    return { ...deepCopy(state) };
  }

  if (energy < 10 && happiness < 10 && hungry < 10) {
    return {
      ...deepCopy(state),
      status: KUBIT_STATES.IS_DAMAGED,
    }
  }
  else if (energy < 25) {
    return {
      ...deepCopy(state),
      status: KUBIT_STATES.IS_BATTERY_LOW,
    }
  }
  else if (hungry < 25) {
    return {
      ...deepCopy(state),
      status: KUBIT_STATES.IS_HUNGRY,
    }
  }
  else if (happiness < 25) {
    return {
      ...deepCopy(state),
      status: KUBIT_STATES.IS_SAD,
    }
  }
  else {
    return {
      ...deepCopy(state),
      status: KUBIT_STATES.IS_IDLE,
    }
  }
}

const kubitReducer = (state = initialState, { type, payload }) => {
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
      const duration = ANIMATION_DURATION[payload.value] || state.nextUpdateDuration;

      return {
        ...deepCopy(state),
        nextUpdate: Date.now() + duration,
        mood: payload.value,
        status: payload.value,
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

    case GameConstants.TICK_TACK: {
      const energy = state.energy - 1;
      const happiness = state.happiness - 1;
      const hungry = state.hungry - 1;

      return {
        ...defineKubitStatus(state),
        energy: (energy <= 0) ? 0 : energy,
        happiness: (happiness <= 0) ? 0 : happiness,
        hungry: (hungry <= 0) ? 0 : hungry,
      };
    }

    default:
      return state;
  }
};

export default kubitReducer;
