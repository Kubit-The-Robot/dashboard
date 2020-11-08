import OverReact from 'overreact';
import Status from 'containers/Status';

import Kubit from 'containers/Kubit';
import CommandBar from './CommandBar';

import './Game.scss';

function Game() {
  return (
    <div className="stages stages--spaceship">
      <Status />
      <Kubit />
      <CommandBar />
    </div>
  );
}

export default Game;
