import OverReact from 'overreact';
import { connect } from 'store';

import { KUBIT_STATES } from 'constants';

import {
  addEnergy,
  addHappiness,
  addHungry,
  removeEnergy,
  removeHappiness,
  removeHungry,
  setMood,
  setStatus,
  toggleFoodsModal,
  togglePetsModal,
  toggleStagesModal,
  setStage,
  setPet,
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
import backSFX from 'assets/sfx/back.wav';

// musics
import music_1 from 'assets/musics/kubit-music.mp3';

import Kubit from 'containers/Kubit';
import Shop from 'containers/Shop';

import Status from './Status';

import './Game.scss';

const batterySound = new Audio(batteryUpSFX);
const backSound = new Audio(backSFX);
const clickSound = new Audio(clickSFX);

const kubitMusic = new Audio(music_1);
kubitMusic.loop = true;
kubitMusic.volume = 0.3;
kubitMusic.play();

// const backSound = new Audio(backSFX);
const recognition = new Recognition({ namespace: 'kubit' });

const { useState, useEffect } = OverReact;

function Game({
  energy,
  happiness,
  experience,
  hungry,
  mood,
  status,
  isFoodOpen,
  isPetOpen,
  isStageOpen,
  currentStage,
  stages,
  foods,
  addEnergyDispatcher,
  setMoodDispatcher,
  toggleFoodsDispatcher,
  togglePetsDispatcher,
  toggleStagesDispatcher,
  setStageDispatcher,
  setPetDispatcher,
}) {
  const [isMicActive, setMicActive] = useState(false);

  const handleIntentionRecognition = (e) => {
    const intention = getIntention(e.detail?.transcription);
    setMoodDispatcher(intention);
    setMicActive(() => false);
  }

  function onClickBattery(e) {
    e.preventDefault;

    batterySound.play();

    addEnergyDispatcher(100);
    setMoodDispatcher(KUBIT_STATES.ENERGIZING);
  }

  function onClickFood(e) {
    e.preventDefault;

    if (!isFoodOpen) {
      clickSound.play();
      toggleFoodsDispatcher(true);

      return;
    }

    toggleFoodsDispatcher(false);
    backSound.play();
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

    if (!isPetOpen) {
      clickSound.play();
      togglePetsDispatcher(true);

      return;
    }

    togglePetsDispatcher(false);
    backSound.play();
  }

  function onClickStage(e) {
    e.preventDefault;

    if (!isStageOpen) {
      clickSound.play();
      toggleStagesDispatcher(true);

      return;
    }

    toggleStagesDispatcher(false);
    backSound.play();
  }

  useEffect(() => {
    document.addEventListener('recognition.end', handleIntentionRecognition);

    return () => {
      document.removeEventListener('recognition.end', handleIntentionRecognition);
    }
  }, [isMicActive]);

  return (
    <div className={`stages stages--${currentStage}`}>
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

          <button className={`command command-food ${isFoodOpen ? 'is-active' : ''}`} onClick={onClickFood}>
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

          <button className={`command command-pets ${isPetOpen ? 'is-active' : ''}`} onClick={onClickFriend}>
            <div className="command__image">
              <img src={friendIcon} alt="Pets" />
            </div>
          </button>

          <button className={`command command-stage ${isStageOpen ? 'is-active' : ''}`} onClick={onClickStage}>
            <div className="command__image">
              <img src={stageIcon} alt="Cenários" />
            </div>
          </button>
        </div>
      </div>

      {isFoodOpen
        ? (
          <Shop
            title="Comidas"
            shopType="food"
            onCloseHandler={() => toggleFoodsDispatcher(false)}
            items={foods}
          />)
        : ''}

      {isPetOpen
        ? (
          <Shop
            title="Amigos"
            onCloseHandler={() => togglePetsDispatcher(false)}
            shopType="pet"
            onClickHandler={setStageDispatcher}
          />
        ) : ''}

      {isStageOpen
        ? (
          <Shop
            title="Cenários"
            onCloseHandler={() => toggleStagesDispatcher(false)}
            onClickHandler={setStageDispatcher}
            shopType="stage"
            currentSelected={currentStage}
            items={stages}
          />
        ) : ''}
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
  isFoodOpen: state.kubit.isFoodOpen,
  isPetOpen: state.kubit.isPetOpen,
  isStageOpen: state.kubit.isStageOpen,
  currentStage: state.game.currentStage,
  stages: state.game.stages,
  foods: state.game.foods,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEnergyDispatcher: (value) => dispatch(addEnergy(value)),
    setMoodDispatcher: (value) => dispatch(setMood(value)),
    toggleFoodsDispatcher: (value) => dispatch(toggleFoodsModal(value)),
    togglePetsDispatcher: (value) => dispatch(togglePetsModal(value)),
    toggleStagesDispatcher: (value) => dispatch(toggleStagesModal(value)),
    setStageDispatcher: (value) => dispatch(setStage(value)),
    setPetDispatcher: (value) => dispatch(setPet(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
