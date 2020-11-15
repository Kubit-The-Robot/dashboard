import OverReact from 'overreact';
import { connect } from 'store';

import { ROUTES } from 'constants';

import artesImg from 'assets/lessons/artes.png';
import cienciasImg from 'assets/lessons/ciencias.png';
import inglesImg from 'assets/lessons/ingles.png';
import matematicaImg from 'assets/lessons/matematica.png';
import portuguesImg from 'assets/lessons/portugues.png';

import lockImg from 'assets/ui/lock.svg';

import clickSFX from 'assets/sfx/coin.wav';
import blockSFX from 'assets/sfx/wrong-sfx.wav';

import './Lessons.scss';

const blockSound = new Audio(blockSFX);
const clickSound = new Audio(clickSFX);

const imageMapper = {
  artes: artesImg,
  ciencias: cienciasImg,
  ingles: inglesImg,
  matematica: matematicaImg,
  portugues: portuguesImg,
}

function Lessons({ lessons, finished }) {
  if (lessons.length && lessons.length === 0) {
    return '';
  }

  const handleClickLesson = (e) => {
    const slug = e.currentTarget.id;

    if (slug === 'matematica') {
      window.location.hash = ROUTES.MATH;
      clickSound.play();
    }
    else {
      blockSound.play();
    }
  }

  return (
    <section className="lessons">
      <div className="lessons__activities">
        <h2>Atividades</h2>

        <div>{finished}/5</div>
      </div>

      <div className="lessons__wrapper">
        <div className="lessons__slider">
          {lessons.map(({ id, day, name, slug, isBlocked, hasFinished }) => {
            let buttonLabel = 'Começar';

            if (hasFinished) {
              buttonLabel = 'Repetir'
            }
            else if (isBlocked) {
              buttonLabel = 'Bloqueado'
            }

            return (
              <div
                className={`lessons__padding ${isBlocked ? 'is-disabled' : ''} ${hasFinished ? 'is-finished' : ''}`}
              >
                <div className="lessons__item">
                  <div className="lessons__itemContent">
                    <div className="lessons__day">{day}</div>
                    <div className="lessons__image">
                      <img src={imageMapper[slug]} alt={name} />
                    </div>
                    <h2>{name}</h2>

                    <button id={slug} onClick={handleClickLesson}>
                      {isBlocked ? (<img src={lockImg} alt="bloqueado" />) : ''}
                      {hasFinished ? (<i className="fas fa-medal"></i>) : ''}
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
}

export default Lessons;
