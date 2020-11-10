import OverReact from 'overreact';

import { KUBIT_STATES } from 'constants';

import './Kubit.scss';

const statusMapper = {
  ANGRY: {
    duration: 0,
  },
  ANSWER_RIGHT: {
    duration: 0,
  },
  ANSWER_WRONG: {
    duration: 0,
  },
  EATING: {
    duration: 0,
  },
  ENERGIZING: {
    duration: 0,
  },
  IS_BATTERY_LOW: {
    duration: 0,
  },
  IS_DAMAGED: {
    duration: 0,
  },
  IS_HUNGRY: {
    duration: 0,
  },
  IS_IDLE: {
    duration: 0,
  },
  IS_SAD: {
    duration: 0,
  },
  PRE_FLIGHT: {
    duration: 0,
  },
  SMILING: {
    duration: 0,
  },
  TALKING: {
    duration: 0,
  },
  TALKING_BAD: {
    duration: 0,
  },
  TALKING_GOOD: {
    duration: 0,
  },
  LEVEL_UP: {
    duration: 0,
  },
};

import Angry from './Status/Angry';
import Eating from './Status/Eating';
import Energizing from './Status/Energizing';
import IsBatteryLow from './Status/IsBatteryLow';
import IsDamaged from './Status/IsDamaged';
import IsHungry from './Status/IsHungry';
import IsIdle from './Status/IsIdle';
import IsLoading from './Status/IsLoading';
import IsSad from './Status/IsSad';
import PreFlight from './Status/PreFlight';
import Smiling from './Status/Smiling';
import Talking from './Status/Talking';

const { useEffect } = OverReact;

function Kubit({ mood, status }) {
  // useEffect(() => {
  //   if (mood) {
  //     const { rangeStart, rangeEnd, soundsPrefix } = statusMapper[mood];
  //     SFX[soundsPrefix + (Math.floor(Math.random() * rangeEnd) + rangeStart)].play();
  //     setTimeout(() => setMoodDispatcher(''), 3000);
  //   }
  // }, [status, mood]);

  let output = (<IsIdle />);

  if (status === KUBIT_STATES.ANGRY) {
    output = (<Angry />);
  }
  else if (status === KUBIT_STATES.EATING) {
    output = (<Eating />);
  }
  else if (status === KUBIT_STATES.ENERGIZING) {
    output = (<Energizing />);
  }
  else if (status === KUBIT_STATES.IS_BATTERY_LOW) {
    output = (<IsBatteryLow />);
  }
  else if (status === KUBIT_STATES.IS_DAMAGED) {
    output = (<IsDamaged />);
  }
  else if (status === KUBIT_STATES.IS_HUNGRY) {
    output = (<IsHungry />);
  }
  else if (status === KUBIT_STATES.IS_SAD) {
    output = (<IsSad />);
  }
  else if (status === KUBIT_STATES.LEVEL_UP) {
    output = (<LevelUp />);
  }
  else if (status === KUBIT_STATES.PRE_FLIGHT) {
    output = (<PreFlight />);
  }
  else if (status === KUBIT_STATES.SMILING) {
    output = (<Smiling />);
  }
  else if (status === KUBIT_STATES.TALKING) {
    output = (<Talking />);
  }
  else if (status === KUBIT_STATES.TALKING_BAD) {
    output = (<TalkingBad />);
  }
  else if (status === KUBIT_STATES.TALKING_GOOD) {
    output = (<TalkingGood />);
  }
  else if (status === KUBIT_STATES.IS_IDLE) {
    output = (<IsIdle />);
  }

  return (
    <div className="kubit">
      {output}
    </div>
  );
}

export default Kubit;
