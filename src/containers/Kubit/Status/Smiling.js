import OverReact from 'overreact';
const { useEffect } = OverReact;

import smiling from 'assets/animations/smiling.json';
import excitedEffects from 'assets/animations/effects/emotion-excited.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Smiling(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.SMILING);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction smiling">
        <lottie-player
          id="smiling"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={excitedEffects}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-smiling"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={smiling}
      >
      </lottie-player>
    </div>
  );
}

export default Smiling;