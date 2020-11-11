import OverReact from 'overreact';
const { useEffect } = OverReact;

import isSad from 'assets/animations/isSad.json';
import sadEffects from 'assets/animations/effects/emotion-sad.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function IsSad(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_SAD);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction is-sad">
        <lottie-player
          id="isSad"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={sadEffects}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-isSad"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={isSad}
      >
      </lottie-player>
    </div>
  );
}

export default IsSad;