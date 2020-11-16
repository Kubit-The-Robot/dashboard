import OverReact from 'overreact';

import { ROUTES } from 'constants';

import './Parents.scss';

function Parents() {
  const handleBackButton = () => {
    window.location.hash = ROUTES.DASHBOARD;
  }

  return (
    <div className="parents">
      <div className="parents__wrapper">
        <button className="backButton" onClick={handleBackButton}>
          Voltar
        </button>

        <div className="quiz-window">
          <div className="quiz-window-header">
            <div class="quiz-window-title">{window.KUBIT_USERNAME}</div>
          </div>
          <div className="quiz-window-body">
            <div className="gui-window-awards">
              <ul className="guiz-awards-row guiz-awards-row-even">
                <li className="guiz-awards-title">Tarefas Concluídas</li>
                <li className="guiz-awards-track">{window.KUBIT_FINISHED || 0}/5</li>
              </ul>
              <ul className="guiz-awards-row">
                <li className="guiz-awards-title">Tempo de Jogo</li>
                <li className="guiz-awards-track"><span className="null">{window.KUBIT_PLAYED ? '3m22s' : '0s'}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parents;
