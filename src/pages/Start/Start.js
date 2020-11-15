import OverReact from 'overreact';

import Logo from 'components/Logo';
import Loading from './Loading';
import { ROUTES } from 'constants';

import './Start.scss';

function Start() {
  return (
    <div className="screen-start">
      <div className="screen-start__content">
        <Logo className="screen-start__logo" />

        <Loading className="screen-start__kubit" />

        <div className="screen-start__options">
          <a href={ROUTES.LOGIN}>
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
