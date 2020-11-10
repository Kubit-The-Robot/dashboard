import OverReact from 'overreact';
const { useEffect } = OverReact;

import isLoading from 'assets/animations/isLoading.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function IsLoading(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_LOADING);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-isLoading"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={isLoading}
      >
      </lottie-player>
    </div>
  );
}

export default IsLoading;