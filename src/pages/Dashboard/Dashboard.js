import OverReact from 'overreact';
import { connect } from 'store';

import Header from 'containers/Header';
import Lessons from 'containers/Lessons';
import PlaySection from 'containers/PlaySection';

import './Dashboard.scss';

function Dashboard({ lessons, battery, finished, name }) {
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <Header battery={battery} finished={finished} name={name} />
        <Lessons lessons={lessons} finished={finished} />
        <PlaySection />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lessons: state.dashboard.lessons,
  finished: state.dashboard.finished,
  battery: state.game.battery,
  name: state.player.name,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
