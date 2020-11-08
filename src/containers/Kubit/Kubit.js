import OverReact from 'overreact';

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
import angrySound1 from 'assets/kubit-sounds/ANGRY-1.mp3';
import angrySound2 from 'assets/kubit-sounds/ANGRY-2.mp3';
import angrySound3 from 'assets/kubit-sounds/ANGRY-3.mp3';
import angrySound4 from 'assets/kubit-sounds/ANGRY-4.mp3';
import angrySound5 from 'assets/kubit-sounds/ANGRY-5.mp3';
import angrySound6 from 'assets/kubit-sounds/ANGRY-6.mp3';

import answerRightSound1 from 'assets/kubit-sounds/ANSWER_RIGHT-1.mp3';
import answerWrongSound1 from 'assets/kubit-sounds/ANSWER_WRONG-1.mp3';

import eatingSound1 from 'assets/kubit-sounds/EATING-1.mp3';

import energizingSound1 from 'assets/kubit-sounds/ENERGIZING-1.mp3';
import energizingSound2 from 'assets/kubit-sounds/ENERGIZING-2.mp3';
import energizingSound3 from 'assets/kubit-sounds/ENERGIZING-3.mp3';

import idleSound1 from 'assets/kubit-sounds/IDLE-1.mp3';
import idleSound2 from 'assets/kubit-sounds/IDLE-2.mp3';

import batteryLowSound1 from 'assets/kubit-sounds/IS_BATTERY_LOW-1.mp3';

import damagedSound1 from 'assets/kubit-sounds/IS_DAMAGED-1.mp3';
import damagedSound2 from 'assets/kubit-sounds/IS_DAMAGED-2.mp3';
import damagedSound3 from 'assets/kubit-sounds/IS_DAMAGED-3.mp3';

import hungrySound1 from 'assets/kubit-sounds/IS_HUNGRY-1.mp3';
import hungrySound2 from 'assets/kubit-sounds/IS_HUNGRY-2.mp3';

import isSadSound1 from 'assets/kubit-sounds/IS_SAD-1.mp3';

import levelUpSound1 from 'assets/kubit-sounds/LEVEL_UP-1.mp3';

import smilingSound1 from 'assets/kubit-sounds/SMILING-1.mp3';
import smilingSound2 from 'assets/kubit-sounds/SMILING-2.mp3';

import talkingBadSound1 from 'assets/kubit-sounds/TALKING_BAD-1.mp3';
import talkingBadSound2 from 'assets/kubit-sounds/TALKING_BAD-2.mp3';
import talkingBadSound3 from 'assets/kubit-sounds/TALKING_BAD-3.mp3';
import talkingBadSound4 from 'assets/kubit-sounds/TALKING_BAD-4.mp3';
import talkingBadSound5 from 'assets/kubit-sounds/TALKING_BAD-5.mp3';

import talkingGoodSound1 from 'assets/kubit-sounds/TALKING_GOOD-1.mp3';
import talkingGoodSound2 from 'assets/kubit-sounds/TALKING_GOOD-2.mp3';
import talkingGoodSound3 from 'assets/kubit-sounds/TALKING_GOOD-3.mp3';
import talkingGoodSound4 from 'assets/kubit-sounds/TALKING_GOOD-4.mp3';

import talkingSound1 from 'assets/kubit-sounds/TALKING-1.mp3';
import talkingSound2 from 'assets/kubit-sounds/TALKING-2.mp3';
import talkingSound3 from 'assets/kubit-sounds/TALKING-3.mp3';
import talkingSound4 from 'assets/kubit-sounds/TALKING-4.mp3';

import './Kubit.scss';

const { useState, useEffect } = OverReact;

function Kubit() {
  let feedbackOutput;
  let playAnimation;
  const defaultAnimation = idleFloating;

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
        src={playAnimation || defaultAnimation}
      ></lottie-player>
    </div>
  );
}

export default Kubit;
