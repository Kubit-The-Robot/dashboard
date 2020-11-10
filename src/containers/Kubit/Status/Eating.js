import OverReact from 'overreact';
const { useEffect } = OverReact;

import eating from 'assets/animations/eating.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Eating(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.EATING);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-eating"
        autoplay
        preserveAspectRatio="xMidYMid slice"
        src={eating}
      >
      </lottie-player>
    </div>
  );
}

export default Eating;