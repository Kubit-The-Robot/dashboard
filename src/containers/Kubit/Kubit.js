import OverReact from 'overreact';

import { KUBIT_STATES } from 'constants';

import './Kubit.scss';

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
import TalkingGood from './Status/TalkingGood';
import TalkingBad from './Status/TalkingBad';

const { useEffect } = OverReact;

function Kubit({ status }) {
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
  else if (status === KUBIT_STATES.IS_LOADING) {
    output = (<IsLoading />);
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
    <div className="kubit-wrapper">
      {output}
    </div>
  );
}

export default Kubit;
