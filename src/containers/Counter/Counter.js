import OverReact from 'overreact';
import store from 'store';

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
    <div>
      <h1>Clicou {count} vezes e atualizou da store global</h1>
      <button onClick={addItem}>+</button>
      <button onClick={removeItem}>-</button>
    </div>
  );
}

export default Counter;
