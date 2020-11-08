import OverReact from 'overreact';
import Header from 'containers/Header';
import Lessons from 'containers/Lessons';
import Footer from 'containers/Footer';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <Header />
        <Lessons />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
