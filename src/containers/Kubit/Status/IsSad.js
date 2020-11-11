import OverReact from 'overreact';
const { useEffect } = OverReact;

import isSad from 'assets/animations/isSad.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function IsSad(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_SAD);
  }, []);

  return (
    <div {...props}>
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