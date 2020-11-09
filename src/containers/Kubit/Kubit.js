import OverReact from 'overreact';

// Idle Animations
import isBatteryLow from 'assets/kubit/kubit-idle-battery.json';
import isDamaged from 'assets/kubit/kubit-idle-bug.json';
import isHungry from 'assets/kubit/kubit-idle-hungry.json';
import isFlying from 'assets/kubit/kubit-idle-running.json';
import isSad from 'assets/kubit/kubit-idle-sad.json';
import isIdle from 'assets/kubit/kubit-idle-floating.json';

// Reactions Animations
import angry from 'assets/kubit/kubit-reaction-angry.json';
import energizing from 'assets/kubit/kubit-reaction-battery.json';
import eating from 'assets/kubit/kubit-reaction-eating.json';
import smiling from 'assets/kubit/kubit-idle-affection.json';
import talking from 'assets/kubit/kubit-reaction-talking.json';

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

const angrySFX_1 = new Audio(angrySound1);
const angrySFX_2 = new Audio(angrySound2);
const angrySFX_3 = new Audio(angrySound3);
const angrySFX_4 = new Audio(angrySound4);
const angrySFX_5 = new Audio(angrySound5);
const angrySFX_6 = new Audio(angrySound6);
const answerRightSFX_1 = new Audio(answerRightSound1);
const answerWrongSFX_1 = new Audio(answerWrongSound1);
const eatingSFX_1 = new Audio(eatingSound1);
const energizingSFX_1 = new Audio(energizingSound1);
const energizingSFX_2 = new Audio(energizingSound2);
const energizingSFX_3 = new Audio(energizingSound3);
const idleSFX_1 = new Audio(idleSound1);
const idleSFX_2 = new Audio(idleSound2);
const batteryLowSFX_1 = new Audio(batteryLowSound1);
const damagedSFX_1 = new Audio(damagedSound1);
const damagedSFX_2 = new Audio(damagedSound2);
const damagedSFX_3 = new Audio(damagedSound3);
const hungrySFX_1 = new Audio(hungrySound1);
const hungrySFX_2 = new Audio(hungrySound2);
const isSadSFX_1 = new Audio(isSadSound1);
const levelUpSFX_1 = new Audio(levelUpSound1);
const smilingSFX_1 = new Audio(smilingSound1);
const smilingSFX_2 = new Audio(smilingSound2);
const talkingBadSFX_1 = new Audio(talkingBadSound1);
const talkingBadSFX_2 = new Audio(talkingBadSound2);
const talkingBadSFX_3 = new Audio(talkingBadSound3);
const talkingBadSFX_4 = new Audio(talkingBadSound4);
const talkingBadSFX_5 = new Audio(talkingBadSound5);
const talkingGoodSFX_1 = new Audio(talkingGoodSound1);
const talkingGoodSFX_2 = new Audio(talkingGoodSound2);
const talkingGoodSFX_3 = new Audio(talkingGoodSound3);
const talkingGoodSFX_4 = new Audio(talkingGoodSound4);
const talkingSFX_1 = new Audio(talkingSound1);
const talkingSFX_2 = new Audio(talkingSound2);
const talkingSFX_3 = new Audio(talkingSound3);
const talkingSFX_4 = new Audio(talkingSound4);

const kubitStates = {
  ANGRY: {
    animation: angry,
    soundsPrefix: 'angrySFX_',
  },
  ANSWER_RIGHT: {
    animation: '',
    soundsPrefix: 'answerRightSFX_',
    rangeStart: 1,
    rangeEnd: 6,
  },
  ANSWER_WRONG: {
    animation: '',
    soundsPrefix: 'answerWrongSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  EATING: {
    animation: eating,
    soundsPrefix: 'eatingSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  ENERGIZING: {
    animation: energizing,
    soundsPrefix: 'energizingSFX_',
    rangeStart: 1,
    rangeEnd: 3,
  },
  FLYING: {
    animation: isFlying,
    soundsPrefix: '',
    rangeStart: 1,
    rangeEnd: 1,
  },
  IS_BATTERY_LOW: {
    animation: isBatteryLow,
    soundsPrefix: 'idleSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  IS_DAMAGED: {
    animation: isDamaged,
    soundsPrefix: 'damagedSFX_',
    rangeStart: 1,
    rangeEnd: 3,
  },
  IS_HUNGRY: {
    animation: isHungry,
    soundsPrefix: 'hungrySFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  IS_IDLE: {
    animation: isIdle,
    soundsPrefix: 'idleSFX_',
    rangeStart: 1,
    rangeEnd: 2,
  },
  IS_SAD: {
    animation: isSad,
    soundsPrefix: '',
    rangeStart: 1,
    rangeEnd: 1,
  },
  SMILING: {
    animation: smiling,
    soundsPrefix: 'smilingSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  TALKING: {
    animation: talking,
    soundsPrefix: 'talkingSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  TALKING_BAD: {
    animation: isSad,
    soundsPrefix: 'talkingBadSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  TALKING_GOOD: {
    animation: smiling,
    soundsPrefix: 'talkingGoodSFX_',
    rangeStart: 1,
    rangeEnd: 1,
  },
  LEVEL_UP: {
    animation: isFlying,
    soundsPrefix: '',
    rangeStart: 1,
    rangeEnd: 1,
  },
};

function Kubit({ status = 'IS_IDLE', mood = '' }) {
  const [currentAnimation, setAnimation] = useState('');
  const [currentSound, setCurrentSound] = useState('');

  let feedbackOutput;
  let playAnimation;
  const defaultAnimation = isIdle;

  useEffect(() => {
    // if (mood) {
    // }
    // else {
    // }
  }, [status, mood]);

  return (
    <div className="kubit">
      <div className="kubit__feedback">{feedbackOutput}</div>

      <lottie-player
        id="kubit-character"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={currentAnimation || kubitStates[status].animation}
      ></lottie-player>
    </div>
  );
}

export default Kubit;
