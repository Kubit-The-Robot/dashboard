import OverReact from 'overreact';

import { connect } from 'store';

import './CommandBar.scss';

function CommandBar() {

  return (
    <div className="command-bar">
      <div id="hud">
        <div className="icon"></div>
      </div>
    </div>
  );
}

export default CommandBar
