import OverReact from 'overreact';

import { connect } from 'store';

import { setPlayerName } from 'actions';

import { ROUTES } from 'constants';

import Animation from './Animation';

import './Username.scss';

const { useEffect, useState } = OverReact;

function Username({ setPlayerNameDispatcher }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target.elements['screen-username-input'].value || '';

    if (inputValue.length >= 2 ) {
      setPlayerNameDispatcher(inputValue);
      window.KUBIT_USERNAME = inputValue;

      window.location.hash = ROUTES.DASHBOARD;
    }
  }

  return (
    <div className="screen-username">
      <div className="screen-username__content">
        <Animation className="screen-username__kubit" />

        <div className="screen-username__group">
          <form onSubmit={handleSubmit} className="screen-username__wrapper">
            <div className="screen-username__header">
              <h2>NOME</h2>
            </div>

            <input
              name="screen-username-input"
              className="screen-username__input"
              type="text"
            />

            <div className="screen-username__footer">
              <button className='screen-username__button is-active'>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerNameDispatcher: (route) => {
      dispatch(setPlayerName(route));
    },
  };
};

export default connect(() => {}, mapDispatchToProps)(Username);