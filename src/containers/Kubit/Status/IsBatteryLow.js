import OverReact from 'overreact';
const { useEffect } = OverReact;

import { KUBIT_STATES } from 'constants';

import isBatteryLow from 'assets/animations/isBatteryLow.json';

import { playKubitSound } from '../sounds';

function IsBatteryLow(props) {
  useEffect(() => {
    playKubitSound(KUBIT_STATES.IS_BATTERY_LOW);
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-isBatteryLow"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={isBatteryLow}
      >
      </lottie-player>
    </div>
  );
}

export default IsBatteryLow;