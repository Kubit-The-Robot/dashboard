import OverReact from 'overreact';

import Canvas from 'containers/Canvas/';
import Viewport from 'containers/Viewport';
import Status from 'containers/Status';
import { Router } from 'containers/Router';

function Game({ store }) {
  return (
    <Viewport>
      <Router>
        <Status />
        <Canvas store={store} />
      </Router>
    </Viewport>
  );
}

export default Game;
