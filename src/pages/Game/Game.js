import OverReact from 'overreact';
import { connect } from 'store';

import { ROUTES } from 'constants';

import { KUBIT_STATES } from 'constants';

import {
  addEnergy,
  setMood,
  setPet,
  setStage,
  tickTack,
  toggleFoodsModal,
  togglePetsModal,
  toggleStagesModal,
  removeBattery,
  removeFood,
  toggleMic,
  removeHappiness,
  removeHungry,
  addHappiness,
  addHungry,
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
import blockSFX from 'assets/sfx/wrong-sfx.wav';

import Kubit from 'containers/Kubit';
import Shop from 'containers/Shop';

import Alien1 from 'containers/Pets/Alien1';
import Alien2 from 'containers/Pets/Alien2';
import Cat1 from 'containers/Pets/Cat1';
import Cat2 from 'containers/Pets/Cat2';
import Dog1 from 'containers/Pets/Dog1';
import Dog2 from 'containers/Pets/Dog2';

import Status from './Status';

import './Game.scss';

const backSound = new Audio(backSFX);
const batterySound = new Audio(batteryUpSFX);
const blockSound = new Audio(blockSFX);
const clickSound = new Audio(clickSFX);

const recognition = new Recognition({ namespace: 'kubit' });

const { useEffect } = OverReact;

window.KUBIT_INTERVAL;

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
  currentPet,
  stages,
  foods,
  pets,
  battery,
  isTalking,
  addEnergyDispatcher,
  setMoodDispatcher,
  toggleFoodsDispatcher,
  togglePetsDispatcher,
  toggleStagesDispatcher,
  setStageDispatcher,
  tickTackDispatcher,
  setPetDispatcher,
  removeBatteryDispatcher,
  removeFoodDispatcher,
  removeHappinessDispatcher,
  addHappinessDispatcher,
  addHungryDispatcher,
  toggleMicDispatcher,
}) {
  const handleIntentionRecognition = (e) => {
    const intention = getIntention(e.detail?.transcription);
    setMoodDispatcher(intention);
    toggleMicDispatcher(false);

    if (intention === KUBIT_STATES.TALKING_BAD) {
      removeHappinessDispatcher(50);
    }
    else if (intention === KUBIT_STATES.TALKING_GOOD) {
      addHappinessDispatcher(50);
    }
    else if (intention === KUBIT_STATES.TALKING) {
      addHappinessDispatcher(10);
    }
  }

  const handleBackButton = () => {
    window.location.hash = ROUTES.DASHBOARD;

    backSound.play().then(() => {
      console.log('canplay backSound');
    }).catch((error) => {
      console.log('error backSound');
    });
  }

  function onClickBattery(e) {
    e.preventDefault;

    if (battery <= 0) {
      blockSound.play().then(() => {
        console.log('canplay blockSound');
      }).catch((error) => {
        console.log('error blockSound');
      });

      return;
    }
    else {
      batterySound.play().then(() => {
        console.log('canplay batterySound');
      }).catch((error) => {
        console.log('error batterySound');
      });

      addEnergyDispatcher(100);
      removeBatteryDispatcher();
      setMoodDispatcher(KUBIT_STATES.ENERGIZING);
    }
  }

  function onClickFood(e) {
    e.preventDefault;

    if (!isFoodOpen) {
      clickSound.play().then(() => {
        console.log('canplay clickSound');
      }).catch((error) => {
        console.log('error clickSound');
      });

      toggleFoodsDispatcher(true);

      return;
    }

    toggleFoodsDispatcher(false);
    backSound.play().then(() => {
      console.log('canplay backSound');
    }).catch((error) => {
      console.log('error backSound');
    });
  }

  function onClickTalk(e) {
    e.preventDefault;
    batterySound.play().then(() => {
      console.log('canplay batterySound');
    }).catch((error) => {
      console.log('error batterySound');
    });

    if (!isTalking) {
      toggleMicDispatcher(true);
    } else {
      const evt = new CustomEvent('recognition.stop');
      document.dispatchEvent(evt);
    }

    if (!recognition.recognizing) {
      recognition.start();
    }
  }

  function onClickFriend(e) {
    e.preventDefault;

    if (!isPetOpen) {
      clickSound.play().then(() => {
        console.log('canplay clickSound');
      }).catch((error) => {
        console.log('error clickSound');
      });

      togglePetsDispatcher(true);

      return;
    }

    togglePetsDispatcher(false);
    backSound.play().then(() => {
      console.log('canplay backSound');
    }).catch((error) => {
      console.log('error backSound');
    });
  }

  function onClickStage(e) {
    e.preventDefault;

    if (!isStageOpen) {
      clickSound.play().then(() => {
        console.log('canplay clickSound');
      }).catch((error) => {
        console.log('error clickSound');
      });
      toggleStagesDispatcher(true);

      return;
    }

    toggleStagesDispatcher(false);
    backSound.play().then(() => {
      console.log('canplay backSound');
    }).catch((error) => {
      console.log('error backSound');
    });
  }

  function onUseFood(slug) {
    const item = foods.find(item => item.slug === slug);
    removeFoodDispatcher(slug);
    addHungryDispatcher(item.value);
    setMoodDispatcher(KUBIT_STATES.EATING);
  }

  function foodsCounter(foods) {
    if (!foods.length) {
      return 0;
    }

    return foods.reduce((acc, item) => {
      acc = acc + item.quantity;
      return acc;
    }, 0);
  }

  useEffect(() => {
    document.addEventListener('recognition.end', handleIntentionRecognition);
    window.KUBIT_PLAYED = true;
  }, []);

  useEffect(() => {
    if (isFoodOpen || isPetOpen ||isStageOpen) {
      clearInterval(window.KUBIT_INTERVAL);
    }
    else {
      window.KUBIT_INTERVAL = setInterval(tickTackDispatcher, 2000);
    }
  }, [isFoodOpen, isPetOpen, isStageOpen]);

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

        <div className="kubit">
          {currentPet === 'alien-1' ? (<Alien1 />) : ''}
          {currentPet === 'alien-2' ? (<Alien2 />) : ''}
          {currentPet === 'cat-1' ? (<Cat1 />) : ''}
          {currentPet === 'cat-2' ? (<Cat2 />) : ''}
          {currentPet === 'dog-1' ? (<Dog1 />) : ''}
          {currentPet === 'dog-2' ? (<Dog2 />) : ''}

          <Kubit mood={mood} status={status} />

          <button className="backButton" onClick={handleBackButton}>
            <i className="fa fa-arrow-left"></i>
          </button>
        </div>

        <div className="command-bar">
          <button className={`command command-battery ${battery === 0 ? 'is-disabled' : ''}`} onClick={onClickBattery}>
            <div className="command__image">
              <img src={batteryIcon} alt="Recarregar" />
            </div>

            <div className="command__quantity">
              <span>x</span>{battery}
            </div>
          </button>

          <button className={`command command-food ${isFoodOpen ? 'is-active' : ''} ${foodsCounter(foods) === 0 ? 'is-disabled' : ''}`} onClick={onClickFood}>
            <div className="command__image">
              <img src={forkIcon} alt="Comer" />
            </div>

            <div className="command__quantity">
              <span>x</span>{foodsCounter(foods)}
            </div>
          </button>

          <button
            className={`command command-talk ${isTalking ? 'is-active' : ''}`}
            onClick={onClickTalk}
          >
            <div className="command__image">
              {isTalking ? (
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
            onClickHandler={onUseFood}
            items={foods}
          />)
        : ''}

      {isPetOpen
        ? (
          <Shop
            title="Amigos"
            onCloseHandler={() => togglePetsDispatcher(false)}
            shopType="pet"
            currentSelected={currentPet}
            onClickHandler={setPetDispatcher}
            items={pets}
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
  currentPet: state.game.currentPet,
  stages: state.game.stages,
  foods: state.game.foods,
  pets: state.game.pets,
  battery: state.game.battery,
  isTalking: state.game.isTalking,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEnergyDispatcher: (value) => dispatch(addEnergy(value)),
    setMoodDispatcher: (value) => dispatch(setMood(value)),
    setPetDispatcher: (value) => dispatch(setPet(value)),
    setStageDispatcher: (value) => dispatch(setStage(value)),
    tickTackDispatcher: () => dispatch(tickTack()),
    toggleFoodsDispatcher: (value) => dispatch(toggleFoodsModal(value)),
    togglePetsDispatcher: (value) => dispatch(togglePetsModal(value)),
    toggleStagesDispatcher: (value) => dispatch(toggleStagesModal(value)),
    removeBatteryDispatcher: (value) => dispatch(removeBattery(value)),
    removeFoodDispatcher: (value) => dispatch(removeFood(value)),
    removeHappinessDispatcher: (value) => dispatch(removeHappiness(value)),
    removeHungryDispatcher: (value) => dispatch(removeHungry(value)),
    addHappinessDispatcher: (value) => dispatch(addHappiness(value)),
    addHungryDispatcher: (value) => dispatch(addHungry(value)),
    toggleMicDispatcher: (value) => dispatch(toggleMic(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
