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

export const statusMapper = {
  ANGRY: {
    sound: 'angrySFX_',
    rangeStart: 1,
    rangeEnd: 6,
    duration: 0,
  },
  ANSWER_RIGHT: {
    sound: 'answerRightSFX_',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  ANSWER_WRONG: {
    sound: 'answerWrongSFX_',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  EATING: {
    sound: 'eatingSFX_',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  ENERGIZING: {
    sound: 'energizingSFX_',
    rangeStart: 1,
    rangeEnd: 3,
    duration: 0,
  },
  IS_BATTERY_LOW: {
    sound: 'batteryLowSFX_',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  IS_DAMAGED: {
    sound: 'damagedSFX_',
    rangeStart: 1,
    rangeEnd: 3,
    duration: 0,
  },
  IS_HUNGRY: {
    sound: 'hungrySFX_',
    rangeStart: 1,
    rangeEnd: 2,
    duration: 0,
  },
  IS_IDLE: {
    sound: 'idleSFX_',
    rangeStart: 1,
    rangeEnd: 2,
    duration: 0,
  },
  IS_SAD: {
    sound: 'isSadSFX_',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  PRE_FLIGHT: {
    sound: '',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
  SMILING: {
    sound: 'smilingSFX_',
    rangeStart: 1,
    rangeEnd: 2,
    duration: 0,
  },
  TALKING: {
    sound: 'talkingSFX_',
    rangeStart: 1,
    rangeEnd: 4,
    duration: 0,
  },
  TALKING_BAD: {
    sound: 'talkingBadSFX_',
    rangeStart: 1,
    rangeEnd: 5,
    duration: 0,
  },
  TALKING_GOOD: {
    sound: 'talkingGoodSFX_',
    rangeStart: 1,
    rangeEnd: 4,
    duration: 0,
  },
  LEVEL_UP: {
    sound: '',
    rangeStart: 1,
    rangeEnd: 1,
    duration: 0,
  },
};

const SFX = {
  angrySFX_1: new Audio(angrySound1),
  angrySFX_2: new Audio(angrySound2),
  angrySFX_3: new Audio(angrySound3),
  angrySFX_4: new Audio(angrySound4),
  angrySFX_5: new Audio(angrySound5),
  angrySFX_6: new Audio(angrySound6),
  answerRightSFX_1: new Audio(answerRightSound1),
  answerWrongSFX_1: new Audio(answerWrongSound1),
  eatingSFX_1: new Audio(eatingSound1),
  energizingSFX_1: new Audio(energizingSound1),
  energizingSFX_2: new Audio(energizingSound2),
  energizingSFX_3: new Audio(energizingSound3),
  idleSFX_1: new Audio(idleSound1),
  idleSFX_2: new Audio(idleSound2),
  batteryLowSFX_1: new Audio(batteryLowSound1),
  damagedSFX_1: new Audio(damagedSound1),
  damagedSFX_2: new Audio(damagedSound2),
  damagedSFX_3: new Audio(damagedSound3),
  hungrySFX_1: new Audio(hungrySound1),
  hungrySFX_2: new Audio(hungrySound2),
  isSadSFX_1: new Audio(isSadSound1),
  levelUpSFX_1: new Audio(levelUpSound1),
  smilingSFX_1: new Audio(smilingSound1),
  smilingSFX_2: new Audio(smilingSound2),
  talkingBadSFX_1: new Audio(talkingBadSound1),
  talkingBadSFX_2: new Audio(talkingBadSound2),
  talkingBadSFX_3: new Audio(talkingBadSound3),
  talkingBadSFX_4: new Audio(talkingBadSound4),
  talkingBadSFX_5: new Audio(talkingBadSound5),
  talkingGoodSFX_1: new Audio(talkingGoodSound1),
  talkingGoodSFX_2: new Audio(talkingGoodSound2),
  talkingGoodSFX_3: new Audio(talkingGoodSound3),
  talkingGoodSFX_4: new Audio(talkingGoodSound4),
  talkingSFX_1: new Audio(talkingSound1),
  talkingSFX_2: new Audio(talkingSound2),
  talkingSFX_3: new Audio(talkingSound3),
  talkingSFX_4: new Audio(talkingSound4),
};

SFX.angrySFX_1.volume = 0.2;
SFX.angrySFX_2.volume = 0.2;
SFX.angrySFX_3.volume = 0.2;
SFX.angrySFX_4.volume = 0.2;
SFX.angrySFX_5.volume = 0.2;
SFX.angrySFX_6.volume = 0.2;
SFX.answerRightSFX_1.volume = 0.2;
SFX.answerWrongSFX_1.volume = 0.2;
SFX.eatingSFX_1.volume = 0.2;
SFX.energizingSFX_1.volume = 0.2;
SFX.energizingSFX_2.volume = 0.2;
SFX.energizingSFX_3.volume = 0.2;
SFX.idleSFX_1.volume = 0.2;
SFX.idleSFX_2.volume = 0.2;
SFX.batteryLowSFX_1.volume = 0.2;
SFX.damagedSFX_1.volume = 0.2;
SFX.damagedSFX_2.volume = 0.2;
SFX.damagedSFX_3.volume = 0.2;
SFX.hungrySFX_1.volume = 0.2;
SFX.hungrySFX_2.volume = 0.2;
SFX.isSadSFX_1.volume = 0.2;
SFX.levelUpSFX_1.volume = 0.2;
SFX.smilingSFX_1.volume = 0.2;
SFX.smilingSFX_2.volume = 0.2;
SFX.talkingBadSFX_1.volume = 0.2;
SFX.talkingBadSFX_2.volume = 0.2;
SFX.talkingBadSFX_3.volume = 0.2;
SFX.talkingBadSFX_4.volume = 0.2;
SFX.talkingBadSFX_5.volume = 0.2;
SFX.talkingGoodSFX_1.volume = 0.2;
SFX.talkingGoodSFX_2.volume = 0.2;
SFX.talkingGoodSFX_3.volume = 0.2;
SFX.talkingGoodSFX_4.volume = 0.2;
SFX.talkingSFX_1.volume = 0.2;
SFX.talkingSFX_2.volume = 0.2;
SFX.talkingSFX_3.volume = 0.2;
SFX.talkingSFX_4.volume = 0.2;

export const playKubitSound = (status) => {
  const { sound, rangeStart, rangeEnd } = statusMapper[status];
  const track = sound + (Math.floor(Math.random() * rangeEnd) + rangeStart);

  if (SFX[track]) {
    SFX[track].play();
  }
}