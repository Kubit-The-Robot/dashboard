import OverReact from 'overreact';
import { connect } from 'store';

import { setRoute } from 'actions';
import { ROUTES } from 'constants';

import Router from 'containers/Router';
import Start from 'containers/Start';
import Dashboard from 'pages/Dashboard';
import Username from 'containers/Username';
import Viewport from 'containers/Viewport';

import Game from 'pages/Game';

const { useEffect } = OverReact;

function App({ setRouteDispatcher }) {
  const { hash } = window.location;

  if (!hash) {
    window.location.hash = ROUTES.START;
  }

  const onRouteChanged = (event) => {
    const { newURL } = event;

    setRouteDispatcher(newURL);
  };

  useEffect(() => {
    window.addEventListener('hashchange', onRouteChanged);

    return () => {
      window.removeEventListener('hashchange', onRouteChanged);
    };
  }, [hash]);

  let screen;

  if (hash === ROUTES.START) {
    screen = <Start />;
  } else if (hash === ROUTES.USERNAME) {
    screen = <Username />;
  } else if (hash === ROUTES.DASHBOARD) {
    screen = <Dashboard />;
  } else if (hash === ROUTES.GAME) {
    screen = <Game />;
  }

  return (
    <Viewport style={{ background: '(url)' }}>
      <Router>{screen}</Router>
    </Viewport>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRouteDispatcher: (route) => {
      dispatch(setRoute(route));
    },
  };
};

export default connect(() => {}, mapDispatchToProps)(App);
