import OverReact from 'overreact';
import Status from './Status';

import Kubit from 'containers/Kubit';
import CommandBar from './CommandBar';

import './Game.scss';

function Game() {
  return (
    <div className="stages stages--yellow">
      <div className="game-container">
        <Status />
        <Kubit />
        <CommandBar />
      </div>
    </div>
  );
}

export default Game;
