import OverReact from 'overreact';
const { useEffect } = OverReact;

import { connect } from 'store';

import { setRoute } from 'actions';
import { ROUTES } from 'constants';

import Arts from 'pages/Arts';
import Dashboard from 'pages/Dashboard';
import Game from 'pages/Game';
import Math from 'pages/Arts';
import Start from 'pages/Start';
import Username from 'pages/Username';

import Viewport from 'containers/Viewport';
import Router from 'containers/Router';

// musics
import kubitTheme from 'assets/musics/kubit-music.mp3';
import dashboardTheme from 'assets/musics/star-wars.mp3';
import startTheme from 'assets/musics/number-one.mp3';

const kubitMusic = new Audio(kubitTheme);
const dashboardMusic = new Audio(dashboardTheme);
const startMusic = new Audio(startTheme);

kubitMusic.loop = true;
kubitMusic.volume = 0.1;

dashboardMusic.loop = true;
dashboardMusic.volume = 0.1;

startMusic.loop = true;
startMusic.volume = 0.1;

function App({ setRouteDispatcher, status }) {
  const { hash } = window.location;

  if (!hash) {
    window.location.hash = ROUTES.START;
  }

  const onRouteChanged = (event) => {
    const { newURL } = event;

    setRouteDispatcher(newURL);
  };

  const handleArtsRoute = () => {
    clearInterval(window.KUBIT_INTERVAL);
    dashboardMusic.pause();
    kubitMusic.pause();
    startMusic.pause();
  }

  const handleGameRoute = () => {
    dashboardMusic.pause();
    kubitMusic.play();
    startMusic.pause();
  }

  const handleDashboardRoute = () => {
    clearInterval(window.KUBIT_INTERVAL);
    dashboardMusic.play();
    kubitMusic.pause();
    startMusic.pause();
  }

  const handleMathRoute = () => {
    clearInterval(window.KUBIT_INTERVAL);
    dashboardMusic.pause();
    kubitMusic.pause();
    startMusic.pause();
  }

  const handleStartRoute = () => {
    clearInterval(window.KUBIT_INTERVAL);
    dashboardMusic.pause();
    kubitMusic.pause();
    startMusic.play();
  }

  useEffect(() => {
    window.addEventListener('hashchange', onRouteChanged);

    return () => {
      window.removeEventListener('hashchange', onRouteChanged);
    };
  }, [hash]);

  useEffect(() => {
    const event = new CustomEvent('kubit.message', { detail: status });

    document.dispatchEvent(event);
  }, [status])

  let screen;

  if (hash === ROUTES.START) {
    screen = <Start />;

    handleStartRoute();
  }
  else if (hash === ROUTES.USERNAME) {
    screen = <Username />;

    kubitMusic.pause();
    dashboardMusic.pause();
  }
  else if (hash === ROUTES.DASHBOARD) {
    screen = <Dashboard />;

    handleDashboardRoute();
  }
  else if (hash === ROUTES.ARTS) {
    screen = <Arts />;

    handleArtsRoute();
  }
  else if (hash === ROUTES.MATH) {
    screen = <Math />;

    handleMathRoute();
  }
  else if (hash === ROUTES.GAME) {
    screen = <Game />;

    handleGameRoute();
  }

  return (
    <Viewport style={{ background: '(url)' }}>
      <div className="preload-images"></div>
      <Router>{screen}</Router>
    </Viewport>
  );
}

const mapStateToProps = (state) => ({
  status: state.kubit.status,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setRouteDispatcher: (route) => {
      dispatch(setRoute(route));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
