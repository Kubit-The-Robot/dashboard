import './styles.css';
import OverReact from './core/overreact';

const App = (
  <div style="background: red">
    <h1>Hello Kubit</h1>
    <h2 style="text-align:right">by: Fiap</h2>
  </div>
);

OverReact.render(App,
  document.getElementById('game-canvas')
);
