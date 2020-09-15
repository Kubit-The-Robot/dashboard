import { GameConstants } from 'constants';
import { deepCopy } from 'modules';

const initialState = {
  alerts: [],
  events: {},
  isCartActive: false,
  isLoading: false,
  isReady: false,
  isSpeechRecognitionActive: false,
  isStoreActive: false,
  skipIntro: false,
  route: '#start',
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
