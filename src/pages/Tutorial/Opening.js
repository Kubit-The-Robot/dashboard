import OverReact from 'overreact';

import { ROUTES } from 'constants';

import './Tutorial.scss';

function Opening() {
  const handleBackButton = () => {
    window.location.hash = ROUTES.DASHBOARD;
  }

  return (
    <div className="tutorial">
      <div className="tutorial__wrapper">
        <button className="backButton" onClick={handleBackButton}>
          Voltar
        </button>

        <div className="tutorial__video">
          <iframe src="https://player.vimeo.com/video/479103956" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Opening;
