import OverReact from 'overreact';
import { connect } from 'store';

import Header from 'containers/Header';
import Lessons from 'containers/Lessons';
import PlaySection from 'containers/PlaySection';
import Footer from 'containers/Footer';

import './Dashboard.scss';

function Dashboard({ lessons }) {
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <Header />
        <Lessons lessons={lessons} />
        <PlaySection />
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lessons: state.dashboard.lessons,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // addEnergyDispatcher: (value) => dispatch(addEnergy(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
