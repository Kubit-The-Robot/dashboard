import OverReact from 'overreact';
import store from 'store';

// Idle Animations
import idleAffection from 'assets/kubit/kubit-idle-affection.json';
import idleBattery from 'assets/kubit/kubit-idle-battery.json';
import idleBug from 'assets/kubit/kubit-idle-bug.json';
import idleHungry from 'assets/kubit/kubit-idle-hungry.json';
import idleLoading from 'assets/kubit/kubit-idle-loading.json';
import idleRunning from 'assets/kubit/kubit-idle-running.json';
import idleSad from 'assets/kubit/kubit-idle-sad.json';
import idleFloating from 'assets/kubit/kubit-idle-floating.json';

// Reactions Animations
import reactionAngry from 'assets/kubit/kubit-reaction-angry.json';
import reactionBattery from 'assets/kubit/kubit-reaction-battery.json';
import reactionEating from 'assets/kubit/kubit-reaction-eating.json';
import reactionTalking from 'assets/kubit/kubit-reaction-talking.json';

import './Kubit.scss';

function Kubit() {
  let feedbackOutput;

  return (
    <div className="kubit">
      <div className="kubit__feedback">
        {feedbackOutput}
      </div>

      <lottie-player
        id="kubit-character"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={idleFloating}
      ></lottie-player>
    </div>
  );
}

export default Kubit;
