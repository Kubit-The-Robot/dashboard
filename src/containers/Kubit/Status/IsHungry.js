import OverReact from 'overreact';
const { useEffect } = OverReact;

import isHungry from 'assets/animations/isHungry.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function IsHungry(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_HUNGRY);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-isHungry"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={isHungry}
      >
      </lottie-player>
    </div>
  );
}

export default IsHungry;