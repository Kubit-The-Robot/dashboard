import OverReact from 'overreact';
import { connect } from 'store';

import { KUBIT_STATES } from 'constants';

import {
  removeEnergy,
  removeHappiness,
  removeHungry,
  addEnergy,
  addHappiness,
  addHungry,
  setMood,
  setStatus,
} from 'actions';

import { Recognition, getIntention } from 'modules';
import batteryIcon from 'assets/ui/game/battery-icon.svg';
import forkIcon from 'assets/ui/game/fork-icon.svg';
import micIcon from 'assets/ui/game/mic-icon.svg';
import micActiveIcon from 'assets/ui/game/mic-active-icon.svg';
import friendIcon from 'assets/ui/game/friend-icon.svg';
import stageIcon from 'assets/ui/game/stage-icon.svg';

import batteryUpSFX from 'assets/sfx/energy-up.wav';
import clickSFX from 'assets/sfx/coin.wav';

import Kubit from 'containers/Kubit';

import Status from './Status';

import './Game.scss';

const batterySound = new Audio(batteryUpSFX);
const clickSound = new Audio(clickSFX);
const recognition = new Recognition({ namespace: 'kubit' });

const { useState, useEffect } = OverReact;

function Game({
  energy,
  happiness,
  experience,
  hungry,
  mood,
  status,
  addEnergyDispatcher,
  setMoodDispatcher,
}) {
  const [isMicActive, setMicActive] = useState(false);

  const handleIntentionRecognition = (e) => {
    const intention = getIntention(e.detail?.transcription);
    setMoodDispatcher(intention);
    setMicActive(() => false);
  }

  useEffect(() => {
    document.addEventListener('recognition.end', handleIntentionRecognition);

    return () => {
      document.removeEventListener('recognition.end', handleIntentionRecognition);
    }
  }, [isMicActive]);

  function onClickBattery(e) {
    e.preventDefault;

    batterySound.play();

    addEnergyDispatcher(100);
    setMoodDispatcher(KUBIT_STATES.ENERGIZING);
  }

  function onClickFood(e) {
    e.preventDefault;
    clickSound.play();
  }

  function onClickTalk(e) {
    e.preventDefault;
    batterySound.play();

    if (!isMicActive) {
      setMicActive(() => true);
    }
    else {
      setMicActive(() => false);
    }
    
    if (!recognition.recognizing) {
      recognition.start();
    }
    else {
      recognition.stop();
    }
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
      <audio autoplay style={{ display: 'none' }}>
        <source src="" type="audio/mp3" />
      </audio>

      <div className="game-container">
        <Status 
          energy={energy} 
          happiness={happiness} 
          experience={experience} 
          hungry={hungry} 
        />

        <Kubit mood={mood} status={status} />

        <div className="command-bar">
          <button className="command command-battery" onClick={onClickBattery}>
            <div className="command__image">
              <img src={batteryIcon} alt="Recarregar" />
            </div>
          </button>

          <button className="command command-food" onClick={onClickFood}>
            <div className="command__image">
              <img src={forkIcon} alt="Comer" />
            </div>
          </button>

          <button
            className={`command command-talk ${isMicActive ? 'is-active' : ''}`}
            onClick={onClickTalk}
          >
            <div className="command__image">
              {isMicActive ? (
                <img src={micActiveIcon} alt="Microfone" />
              ) : (
                <img src={micIcon} alt="Microfone Aberto" />
              )}
            </div>
          </button>

          <button className="command command-pets" onClick={onClickFriend}>
            <div className="command__image">
              <img src={friendIcon} alt="Pets" />
            </div>
          </button>

          <button className="command command-stage" onClick={onClickStage}>
            <div className="command__image">
              <img src={stageIcon} alt="Cenários" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  energy: state.kubit.energy,
  experience: state.player.experience,
  happiness: state.kubit.happiness,
  hungry: state.kubit.hungry,
  mood: state.kubit.mood,
  status: state.kubit.status,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEnergyDispatcher: (value) => dispatch(addEnergy(value)),
    setMoodDispatcher: (value) => dispatch(setMood(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
