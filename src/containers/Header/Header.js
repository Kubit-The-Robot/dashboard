import OverReact from 'overreact';

import './Header.scss';

function Header(props) {
  return (
    <section {...props} className="header">
      <div className="header__userAvatar">
        <div className="header__userImageWrapper">
          <img src="https://paisefilhos.uol.com.br/wp-content/uploads/2020/05/Meio-ambiente-iStock-1-1.jpg" />
        </div>
        <span>Sopinha Linhaus</span>
      </div>

      <div className="header__progress__group">
        <div className="header__progress">
          <div className="header__progressItem battery">
            <i className="fas fa-battery-full"></i>
            <span>10</span>
          </div>
          <div className="header__progressItem medals">
            <i className="fas fa-medal"></i>
            <span>4</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
