import OverReact from 'overreact';
import Status from 'containers/Status';

import Kubit from 'containers/Kubit';
import CommandBar from 'containers/CommandBar';

import './Stages.scss';

function Stages() {
  return (
    <div className="stages stages--spaceship">
      <Status />
      <Kubit />
      <CommandBar />
    </div>
  );
}

export default Stages;
