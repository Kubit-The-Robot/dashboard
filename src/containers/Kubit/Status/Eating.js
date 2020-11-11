import OverReact from 'overreact';
const { useEffect } = OverReact;

import eating from 'assets/animations/eating.json';
import eatingEffects from 'assets/animations/effects/eating.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Eating(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.EATING);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction eating">
        <lottie-player
          id="eating"
          autoplay
          loop
          speed={2}
          preserveAspectRatio="xMidYMid meet"
          src={eatingEffects}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-eating"
        autoplay
        preserveAspectRatio="xMidYMid meet"
        src={eating}
      >
      </lottie-player>
    </div>
  );
}

export default Eating;