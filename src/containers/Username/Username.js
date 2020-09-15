import OverReact from 'overreact';

import Animation from './Animation';

import './Username.scss';

function Username({ hasName = false }) {
  return (
    <div className="screen-username">
      <div className="screen-username__content">
        <Animation className="screen-username__kubit" />

        <div className="screen-username__wrapper">
          <div className="screen-username__header">
            <h2>NOME</h2>
          </div>

          <input className="screen-username__input" type="text" autofocus />

          <div className="screen-username__footer">
            <button className={`screen-username__button ${hasName ? 'is-active' : 'is-blocked'}`}>
              COMEÇAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Username;
