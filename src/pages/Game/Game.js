import OverReact from 'overreact';
import Status from './Status';

import batteryIcon from 'assets/ui/game/battery-icon.svg';
import forkIcon from 'assets/ui/game/fork-icon.svg';
import micIcon from 'assets/ui/game/mic-icon.svg';
import micActiveIcon from 'assets/ui/game/mic-active-icon.svg';
import friendIcon from 'assets/ui/game/friend-icon.svg';
import stageIcon from 'assets/ui/game/stage-icon.svg';

import Kubit from 'containers/Kubit';

import batteryUpSFX from 'assets/sfx/energy-up.wav';
import clickSFX from 'assets/sfx/coin.wav';

import './Game.scss';

const batterySound = new Audio(batteryUpSFX);
const clickSound = new Audio(clickSFX);

function Game() {
  function onClickBattery(e) {
    e.preventDefault;

    batterySound.play();
  }

  function onClickFood(e) {
    e.preventDefault;

    clickSound.play();
  }

  function onClickTalk(e) {
    e.preventDefault;

    batterySound.play();
  }

  function onClickFriend(e) {
    e.preventDefault;

    clickSound.play();
  }

  function onClickStage(e) {
    e.preventDefault;

    clickSound.play();
  }

  return (
    <div className="stages stages--yellow">
      <audio autoplay style={{display: 'none'}}>
        <source src="" type="audio/mp3" />
      </audio>

      <div className="game-container">
        <Status />

        <Kubit />

        <div className="command-bar">
          <button
            className="command command-battery"
            onClick={onClickBattery}
          >
            <div className="command__image">
              <img src={batteryIcon} alt=""/>
            </div>
          </button>

          <button
            className="command command-food"
            onClick={onClickFood}
          >
            <div className="command__image">
              <img src={forkIcon} alt=""/>
            </div>
          </button>

          <button
            className="command command-talk"
            onClick={onClickTalk}
          >
            <div className="command__image">
              <img src={micIcon} alt=""/>
            </div>
          </button>

          <button
            className="command command-pets"
            onClick={onClickFriend}
          >
            <div className="command__image">
              <img src={friendIcon} alt=""/>
            </div>
          </button>

          <button
            className="command command-stage"
            onClick={onClickStage}
          >
            <div className="command__image">
              <img src={stageIcon} alt=""/>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
