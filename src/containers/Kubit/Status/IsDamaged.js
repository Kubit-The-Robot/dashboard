import OverReact from 'overreact';
const { useEffect } = OverReact;

import isDamaged from 'assets/animations/isDamaged.json';

import { playKubitSound } from '../sounds';
import { KUBIT_STATES } from 'constants';

function IsDamaged(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_DAMAGED);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-isDamaged"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={isDamaged}
      >
      </lottie-player>
    </div>
  );
}

export default IsDamaged;