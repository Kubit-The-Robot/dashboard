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
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
