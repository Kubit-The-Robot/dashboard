import OverReact from 'overreact';

import { connect } from 'store';

import batteryIcon from 'assets/ui/game/battery-icon.svg';
import forkIcon from 'assets/ui/game/fork-icon.svg';
import micIcon from 'assets/ui/game/mic-icon.svg';
import micActiveIcon from 'assets/ui/game/mic-active-icon.svg';
import friendIcon from 'assets/ui/game/friend-icon.svg';
import stageIcon from 'assets/ui/game/stage-icon.svg';

import './CommandBar.scss';

function CommandBar() {
  return (
    <div className="command-bar">
      <button className="command command-battery">
        <div className="command__image">
          <img src={batteryIcon} alt=""/>
        </div>
      </button>

      <button className="command command-food">
        <div className="command__image">
          <img src={forkIcon} alt=""/>
        </div>
      </button>

      <button className="command command-talk">
        <div className="command__image">
          <img src={micIcon} alt=""/>
        </div>
      </button>

      <button className="command command-pets">
        <div className="command__image">
          <img src={friendIcon} alt=""/>
        </div>
      </button>

      <button className="command command-stage">
        <div className="command__image">
          <img src={stageIcon} alt=""/>
        </div>
      </button>
    </div>
  );
}

export default CommandBar
