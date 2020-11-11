import OverReact from 'overreact';
const { useEffect } = OverReact;

import talking from 'assets/animations/energizing.json';
import emotionHappy from 'assets/animations/effects/emotion-happy.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function Talking(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction talking">
        <lottie-player
          id="talking"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={emotionHappy}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-talking"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={talking}
      >
      </lottie-player>
    </div>
  );
}

export default Talking;