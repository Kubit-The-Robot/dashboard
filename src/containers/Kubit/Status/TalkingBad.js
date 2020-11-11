import OverReact from 'overreact';
const { useEffect } = OverReact;

import talkingBad from 'assets/animations/angry.json';
import angryEffect from 'assets/animations/effects/emotion-angry.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function TalkingBad(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING_BAD);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction talking-bad">
        <lottie-player
          id="talking-bad"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={angryEffect}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-talkingBad"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={talkingBad}
      >
      </lottie-player>
    </div>
  );
}

export default TalkingBad;