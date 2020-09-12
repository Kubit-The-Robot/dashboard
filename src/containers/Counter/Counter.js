import OverReact from 'overreact';
import store from 'store';
import '@lottiefiles/lottie-player';

function Counter() {
  const { getState, dispatch } = store;
  const { count } = getState.app;

  const addItem = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const removeItem = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="game">
      {/* <h1>Clicou {count} vezes e atualizou da store global</h1>
      <button onClick={addItem}>+</button>
      <button onClick={removeItem}>-</button> */}
      <lottie-player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_cbXcz6.json"
      ></lottie-player>
    </div>
  );
}

export default Counter;
