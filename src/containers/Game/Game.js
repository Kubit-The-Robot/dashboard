import OverReact from 'overreact';

import Canvas from 'containers/Canvas/';
import Viewport from 'containers/Viewport';
import Status from 'containers/Status';

function Game({ store }) {
  return (
    <Viewport>
      <Status />
      <Canvas store={store} />
    </Viewport>
  );
}

export default Game;
