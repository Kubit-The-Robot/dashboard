import { PlayerConstants } from 'constants';
import { deepCopy } from 'modules';

const initialState = {
  coins: 500,
  experience: 0,
  level: 1,
  mood: '',
  username: '',
  hasUsername: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PlayerConstants.DECREASE_COINS: {
      const newValue = state.coins - payload.amount;

      return {
        ...deepCopy(state),
        coins: (newValue <= 0) ? 0 : newValue,
      };
    }

    case PlayerConstants.INCREASE_COINS: {
      const newValue = state.coins + payload.amount;

      return {
        ...deepCopy(state),
        coins: (newValue <= 0) ? 0 : newValue,
      };
    }

    case PlayerConstants.INCREASE_LEVEL: {
      return {
        ...deepCopy(state),
        level: state.experience + 1,
      };
    }

    case PlayerConstants.PLAYER_SET_MOOD: {
      return {
        ...deepCopy(state),
        playerMood: payload.playerMood,
      };
    }

    default:
      return state;
  }
};

export default reducer;
