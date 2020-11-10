import OverReact from 'overreact';
const { useEffect } = OverReact;

import talkingGood from 'assets/animations/smiling.json';

import { KUBIT_STATES } from 'constants';
import { playKubitSound } from '../sounds';

function TalkingGood(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.TALKING_GOOD);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-talkingGood"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={talkingGood}
      >
      </lottie-player>
    </div>
  );
}

export default TalkingGood;