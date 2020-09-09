import './styles.css';
import OverReact from './core/overreact';

const App = (
  <div style="background: red">
    <h1>Criando o OverReact</h1>
    <h2 style="text-align:right">by: Vinna</h2>
  </div>
);

OverReact.render(App,
  document.getElementById('game-canvas')
);
