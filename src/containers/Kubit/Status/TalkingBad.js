import OverReact from 'overreact';
const { useEffect } = OverReact;

import talkingBad from 'assets/animations/angry.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function TalkingBad(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING_BAD);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-talkingBad"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={talkingBad}
      >
      </lottie-player>
    </div>
  );
}

export default TalkingBad;