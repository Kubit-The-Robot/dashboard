import OverReact from 'overreact';

import { ROUTES } from 'constants';

import { messages, speak } from 'modules';

import fruitsImg from '../../assets/lessons/math/todas.svg';
import alfaceImg from '../../assets/lessons/math/alface.svg';
import brocolisImg from '../../assets/lessons/math/brocolis.svg';
import cebolaImg from '../../assets/lessons/math/cebola.svg';
import milhoImg from '../../assets/lessons/math/milho.svg';
import tomateImg from '../../assets/lessons/math/tomate.svg';

import './Math.scss';

const gabarito = {
  alface: 3,
  brocolis: 4,
  cebola: 6,
  milho: 3,
  tomate: 5,
};

const { useEffect } = OverReact;

function Math() {
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
    }
    else {
      console.log('errado');
    }
  };

  useEffect(() => {
    speak(messages.LESSON.math());
  }, [])

  return (
    <div className="math">
      <div className="math__container">
        <h2 className="math__title">
          Quantas frutas e legumes de cada tipo, existem na imagem?
        </h2>
      </div>
      <div className="math__container">
        <div className="math__fruits">
          <img src={fruitsImg} alt=""/>
        </div>

        <form onSubmit={handleSubmit} className="math__form">
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

          <div className="math__footer">
            <button type="submit" className='math__finish is-active'>
              CONCLUIR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Math;
