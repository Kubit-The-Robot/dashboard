import OverReact from 'overreact';
import { connect } from 'store';

import {
  finishLesson,
} from 'actions';

import { ROUTES } from 'constants';

import { messages, speak } from 'modules';

import fruitsImg from '../../assets/lessons/math/todas.svg';
import alfaceImg from '../../assets/lessons/math/alface.svg';
import brocolisImg from '../../assets/lessons/math/brocolis.svg';
import cebolaImg from '../../assets/lessons/math/cebola.svg';
import milhoImg from '../../assets/lessons/math/milho.svg';
import tomateImg from '../../assets/lessons/math/tomate.svg';

import batteryIcon from '../../assets/ui/game/battery-icon.svg';
import forkIcon from '../../assets/ui/game/fork-icon.svg';

import backSFX from 'assets/sfx/back.wav';
import successAnswerSFX from 'assets/sfx/success-answer.wav';
import wrongAnswerSFX from 'assets/sfx/wrong-sfx.wav';

import './Math.scss';

const gabarito = {
  alface: 3,
  brocolis: 4,
  cebola: 6,
  milho: 3,
  tomate: 5,
};

const backSound = new Audio(backSFX);
const successSound = new Audio(successAnswerSFX);
const wrongSound = new Audio(wrongAnswerSFX);

const { useEffect, useState } = OverReact;

function Math({ finishLessonDispatcher }) {
  const [isRight, setIsRight] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userResponse = {
      alface: e.target['alface'].value,
      brocolis: e.target['brocolis'].value,
      cebola: e.target['cebola'].value,
      milho: e.target['milho'].value,
      tomate: e.target['tomate'].value,
    }

    if (
      (userResponse.alface == gabarito.alface) &&
      (userResponse.brocolis == gabarito.brocolis) &&
      (userResponse.cebola == gabarito.cebola) &&
      (userResponse.milho == gabarito.milho) &&
      (userResponse.tomate == gabarito.tomate)
    ) {
      console.log('certo');
      successSound.play();
      finishLessonDispatcher('matematica');
      setIsRight(() => true);
      speak(messages.LESSON.mathRight());
    }
    else {
      speak(messages.LESSON.mathWrong());
      wrongSound.play();
    }
  };

  const handleBackButton = () => {
    window.location.hash = ROUTES.DASHBOARD;
    backSound.play();
  }

  useEffect(() => {
    speak(messages.LESSON.math());
  }, []);

  return (
    <div className="math">
      {isRight
        ? (
          <div className="math__right">
            <div className="math__container">
              <h2 className="math__title">
                Parabéns, você acertou!
              </h2>

              <div className="math__prizes">
                <div className="command command-battery">
                  <div className="command__image">
                    <img src={batteryIcon} alt="Recarregar" />
                  </div>

                  <div className="command__quantity">
                    <span>+</span>1
                  </div>
                </div>

                <div className="command command-food">
                  <div className="command__image">
                    <img src={forkIcon} alt="Comer" />
                  </div>

                  <div className="command__quantity">
                    <span>+</span>15
                  </div>
                </div>
              </div>

              <div className="math__footer">
                <div className='math__back' onClick={handleBackButton}>
                  Pegar itens e Voltar
                </div>
              </div>
            </div>
          </div>
        ) : ''}
        {!isRight
        ? (
        <div>
          <div className="math__container">
            <h2 className="math__title">
              Quantas frutas e legumes de cada tipo, existem na imagem?
            </h2>
          </div>
          <div className="math__container">
            <form onSubmit={handleSubmit} className="math__form">
              <div className="math__fruits">
                <img src={fruitsImg} alt=""/>
              </div>

              <div className="math__group">
                <div className="math__input-wrapper">
                  <div className="math__image-wrapper">
                    <img src={alfaceImg} alt=""/>
                  </div>

                  <input
                    name="alface"
                    className="math__input"
                    type="number"
                    value={0}
                    max="15"
                    min="0"
                  />
                </div>

                <div className="math__input-wrapper">
                  <div className="math__image-wrapper">
                    <img src={brocolisImg} alt=""/>
                  </div>

                  <input
                    name="brocolis"
                    className="math__input"
                    type="number"
                    value={0}
                    max="15"
                    min="0"
                  />
                </div>

                <div className="math__input-wrapper">
                  <div className="math__image-wrapper">
                    <img src={cebolaImg} alt=""/>
                  </div>

                  <input
                    name="cebola"
                    className="math__input"
                    type="number"
                    value={0}
                    max="15"
                    min="0"
                  />
                </div>

                <div className="math__input-wrapper">
                  <div className="math__image-wrapper">
                    <img src={milhoImg} alt=""/>
                  </div>

                  <input
                    name="milho"
                    className="math__input"
                    type="number"
                    value={0}
                    max="15"
                    min="0"
                  />
                </div>

                <div className="math__input-wrapper">
                  <div className="math__image-wrapper">
                    <img src={tomateImg} alt=""/>
                  </div>

                  <input
                    name="tomate"
                    className="math__input"
                    type="number"
                    value={0}
                    max="15"
                    min="0"
                  />
                </div>
              </div>

              <div className="math__footer">
                <div className='math__back' onClick={handleBackButton}>
                  Voltar
                </div>

                <button type="submit" className='math__finish'>
                  RESPONDER
                </button>
              </div>
            </form>
          </div>
        </div>
        ) : '' }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    finishLessonDispatcher: (value) => dispatch(finishLesson(value)),
  };
};

export default connect(() => {}, mapDispatchToProps)(Math);
