import OverReact from 'overreact';

import './Header.scss';

function Header({ battery, finished, name }) {
  return (
    <section className="header">
      <div className="header__userAvatar">
        <div className="header__userImageWrapper">
          <img src="https://paisefilhos.uol.com.br/wp-content/uploads/2020/05/Meio-ambiente-iStock-1-1.jpg" />
        </div>
        <span>{name}</span>
      </div>

      <div className="header__progress__group">
        <div className="header__progress">
          <div className="header__progressItem battery" title="Pilhas">
            <i className="fas fa-battery-full"></i>
            <span>{battery}</span>
          </div>
          <div className="header__progressItem medals" title="Tarefas Concluídas">
            <i className="fas fa-medal"></i>
          <span>{finished}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
