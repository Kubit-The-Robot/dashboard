import OverReact from 'overreact';
import { connect } from 'store';

import { setRoute } from 'actions';
import { ROUTES } from 'constants';

import Router from 'containers/Router';
import Stages from 'containers/Stages';
import Start from 'containers/Start';
import Username from 'containers/Username';
import Viewport from 'containers/Viewport';

const { useEffect } = OverReact;

function Game({ setRouteDispatcher }) {
  const { hash } = window.location;

  if (!hash) {
    window.location.hash = ROUTES.START;
  }

  const onRouteChanged = (event) => {
    const { newURL } = event;

    setRouteDispatcher(newURL);
  }

  useEffect(() => {
    window.addEventListener('hashchange', onRouteChanged);

    return () => {
      window.removeEventListener('hashchange', onRouteChanged)
    }
  }, [hash]);

  let screen;

  if (hash === ROUTES.START) {
    screen = (<Start />)
  }
  else if (hash === ROUTES.USERNAME) {
    screen = (<Username />)
  }
  else if (hash === ROUTES.GAME) {
    screen = (<Stages />)
  }

  return (
    <Viewport style={{background: '(url)' }}>
      <Router>
        {screen}
      </Router>
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

export default connect(() => {}, mapDispatchToProps)(Game);
