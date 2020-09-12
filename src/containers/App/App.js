import OverReact from 'overreact';

const { useEffect, useState } = OverReact;

function App({ ...props }) {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log({ props });
  }, [state]);

  return (
    <div className="vermelho" onClick={() => setState((c) => c + 1)}>
      <h1>Clicou {state} vezes</h1>
      <h2 style="text-align:right">by: Vinna</h2>
    </div>
  );
}

export default App;
