import OverReact from 'overreact';
const { useEffect } = OverReact;

import isIdle from 'assets/animations/isIdle.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function IsIdle(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_IDLE);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-isIdle"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={isIdle}
      >
      </lottie-player>
    </div>
  );
}

export default IsIdle;