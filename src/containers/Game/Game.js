import OverReact from 'overreact';
import Counter from 'containers/Counter/';
import MainScreen from 'containers/MainScreen';

function Game({ store }) {
  return (
    <MainScreen>
      <Counter store={store} />
    </MainScreen>
  );
}

export default Game;
