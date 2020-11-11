import OverReact from 'overreact';
const { useEffect } = OverReact;

import energizing from 'assets/animations/energizing.json';
import energyEffect from 'assets/animations/effects/energy.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Energizing(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.ENERGIZING);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction energizing">
        <lottie-player
          id="energizing"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={energyEffect}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-energizing"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={energizing}
      >
      </lottie-player>
    </div>
  );
}

export default Energizing;