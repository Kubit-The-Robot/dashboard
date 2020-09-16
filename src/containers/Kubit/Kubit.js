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

// Sound Effects
import idleAffectionSound1 from 'assets/kubit-sounds/kubit-idle-affection-1.mp3';
import idleAffectionSound2 from 'assets/kubit-sounds/kubit-idle-affection-2.mp3';
import idleAffectionSound3 from 'assets/kubit-sounds/kubit-idle-affection-3.mp3';
import idleAffectionSound4 from 'assets/kubit-sounds/kubit-idle-affection-4.mp3';
import idleAffectionSound5 from 'assets/kubit-sounds/kubit-idle-affection-5.mp3';

import idleBatterySound1 from 'assets/kubit-sounds/kubit-idle-battery-1.mp3';

import idleBugSound1 from 'assets/kubit-sounds/kubit-idle-bug-1.mp3';
import idleBugSound2 from 'assets/kubit-sounds/kubit-idle-bug-2.mp3';
import idleBugSound3 from 'assets/kubit-sounds/kubit-idle-bug-3.mp3';
import idleBugSound4 from 'assets/kubit-sounds/kubit-idle-bug-4.mp3';
import idleBugSound5 from 'assets/kubit-sounds/kubit-idle-bug-5.mp3';

import idleHungrySound1 from 'assets/kubit-sounds/kubit-idle-hungry-1.mp3';
import idleRunningSound1 from 'assets/kubit-sounds/kubit-idle-running.mp3';

import idleSadSound1 from 'assets/kubit-sounds/kubit-idle-sad-1.mp3';
import idleSadSound2 from 'assets/kubit-sounds/kubit-idle-sad-2.mp3';
import idleSadSound3 from 'assets/kubit-sounds/kubit-idle-sad-3.mp3';
import idleSadSound4 from 'assets/kubit-sounds/kubit-idle-sad-4.mp3';
import idleSadSound5 from 'assets/kubit-sounds/kubit-idle-sad-5.mp3';
import idleSadSound6 from 'assets/kubit-sounds/kubit-idle-sad-6.mp3';
import idleSadSound7 from 'assets/kubit-sounds/kubit-idle-sad-7.mp3';

import reactionAngrySound1 from 'assets/kubit-sounds/kubit-reaction-angry-1.mp3';
import reactionAngrySound2 from 'assets/kubit-sounds/kubit-reaction-angry-2.mp3';
import reactionAngrySound3 from 'assets/kubit-sounds/kubit-reaction-angry-3.mp3';
import reactionAngrySound4 from 'assets/kubit-sounds/kubit-reaction-angry-4.mp3';
import reactionAngrySound5 from 'assets/kubit-sounds/kubit-reaction-angry-5.mp3';

import reactionEating1 from 'assets/kubit-sounds/kubit-reaction-eating-1.mp3';

import reactionFearSound1 from 'assets/kubit-sounds/kubit-reaction-fear-1.mp3';
import reactionFearSound2 from 'assets/kubit-sounds/kubit-reaction-fear-2.mp3';
import reactionFearSound3 from 'assets/kubit-sounds/kubit-reaction-fear-3.mp3';

import reactionShutdownSound1 from 'assets/kubit-sounds/kubit-reaction-shutdown-1.mp3';

import reactionTalking1 from 'assets/kubit-sounds/kubit-reaction-talking-1.mp3';
import reactionTalking2 from 'assets/kubit-sounds/kubit-reaction-talking-2.mp3';
import reactionTalking3 from 'assets/kubit-sounds/kubit-reaction-talking-3.mp3';
import reactionTalking4 from 'assets/kubit-sounds/kubit-reaction-talking-4.mp3';
import reactionTalking5 from 'assets/kubit-sounds/kubit-reaction-talking-5.mp3';
import reactionTalking6 from 'assets/kubit-sounds/kubit-reaction-talking-6.mp3';

import './Kubit.scss';

const { useState, useEffect } = OverReact;

function Kubit() {
  const [stateCounter, setState] = useState(0);

  let feedbackOutput;
  let playAnimation;
  const defaultAnimation = idleFloating;

  const handleClick = (e) => {
    e.preventDefault();

    setState(() => stateCounter + 1);
  };

  if (stateCounter % 2 === 0 && stateCounter !== 0) {
    playAnimation = idleAffection;
  }

  return (
    <div className="kubit">
      <div className="kubit__feedback">
        {feedbackOutput}
      </div>

      <lottie-player
        onClick={handleClick}
        id="kubit-character"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={playAnimation || defaultAnimation}
      ></lottie-player>
    </div>
  );
}

export default Kubit;
