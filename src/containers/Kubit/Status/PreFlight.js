import OverReact from 'overreact';
const { useEffect } = OverReact;

import preFlight from 'assets/animations/PreFlight.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function PreFlight(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.PRE_FLIGHT);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-preFlight"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={preFlight}
      >
      </lottie-player>
    </div>
  );
}

export default PreFlight;