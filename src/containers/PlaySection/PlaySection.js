import OverReact from 'overreact';
import { ROUTES } from 'constants';

import './PlaySection.scss';


import Kubit from 'containers/Kubit';

function PlaySection() {
  const handleClickGame = () => {
    window.location.hash = ROUTES.GAME;
  }

  const handleClickTutorial = () => {
    window.location.hash = ROUTES.TUTORIAL;
  }

  const handleClickOpening = () => {
    window.location.hash = ROUTES.OPENING;
  }

  return (
    <section className="play-section">
      <div className="lessons__activities">
        <h2>Kubit, o robô</h2>
      </div>

      <div className="play-section__wrapper">
        <div className="play-section__options">
          <button className="play-section__option is-opening" onClick={handleClickOpening}>
            <div className="play-section__content">
              <span>
                Abertura
              </span>
            </div>
          </button>

          <button className="play-section__option is-tutorial" onClick={handleClickTutorial}>
            <div className="play-section__content">
              <span>
                Instruções
              </span>
            </div>
          </button>

          <button
            className="play-section__option is-game"
            onClick={handleClickGame}
          >
            <div className="play-section__content">
              <Kubit status="IS_IDLE" />
              <span className="play-section__play">
                Jogar
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PlaySection;
