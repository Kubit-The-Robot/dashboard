import OverReact from 'overreact';

import Logo from 'components/Logo';
import Loading from './Loading';
import { ROUTES } from 'constants';

import './Start.scss';

import themeMusic from 'assets/musics/number-one.mp3';

function Start() {
  return (
    <div className="screen-start">
      <audio autoplay style={{display: 'none'}}>
        <source src={themeMusic} type="audio/mp3" />
      </audio>

      <div className="screen-start__content">
        <Logo className="screen-start__logo" />

        <Loading className="screen-start__kubit" />

        <div className="screen-start__options">
          <a href={ROUTES.USERNAME}>
            <span>N</span>
            <span>O</span>
            <span>V</span>
            <span>O</span>
            <span>&nbsp;&nbsp;</span>
            <span>J</span>
            <span>0</span>
            <span>G</span>
            <span>O</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Start;
