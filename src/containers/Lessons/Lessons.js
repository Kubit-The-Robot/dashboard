import OverReact from 'overreact';
import { connect } from 'store';

import artesImg from 'assets/lessons/artes.png';
import cienciasImg from 'assets/lessons/ciencias.png';
import inglesImg from 'assets/lessons/ingles.png';
import matematicaImg from 'assets/lessons/matematica.png';
import portuguesImg from 'assets/lessons/portugues.png';

import lockImg from 'assets/ui/lock.svg';

import './Lessons.scss';

const imageMapper = {
  artes: artesImg,
  ciencias: cienciasImg,
  ingles: inglesImg,
  matematica: matematicaImg,
  portugues: portuguesImg,
}

function Lessons({ lessons }) {
  if (lessons.length && lessons.length === 0) {
    return '';
  }

  return (
    <section className="lessons">
      <div className="lessons__activities">
        <h2>Atividades</h2>

        <div>0/5</div>
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
              <div className={`lessons__padding ${isBlocked ? 'is-disabled' : ''} ${hasFinished ? 'is-finished' : ''}`}>
                <div className="lessons__item">
                  <div className="lessons__itemContent">
                    <div className="lessons__day">{day}</div>
                    <div className="lessons__image">
                      <img src={imageMapper[slug]} alt={name} />
                    </div>
                    <h2>{name}</h2>
                    <button>
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
