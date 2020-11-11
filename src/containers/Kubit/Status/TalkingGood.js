import OverReact from 'overreact';
const { useEffect } = OverReact;

import talkingGood from 'assets/animations/smiling.json';
import heartEffect from 'assets/animations/effects/heart.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function TalkingGood(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING_GOOD);
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction talking-good">
        <lottie-player
          id="heart"
          autoplay
          loop
          preserveAspectRatio="xMidYMid meet"
          src={heartEffect}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-talkingGood"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={talkingGood}
      >
      </lottie-player>
    </div>
  );
}

export default TalkingGood;