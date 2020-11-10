import OverReact from 'overreact';
const { useEffect } = OverReact;

import talking from 'assets/animations/talking.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Talking(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-talking"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={talking}
      >
      </lottie-player>
    </div>
  );
}

export default Talking;