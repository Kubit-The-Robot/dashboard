import OverReact from 'overreact';

import './Header.scss';

import avatar_1 from '../../assets/avatars/avatar-1.svg';
import avatar_2 from '../../assets/avatars/avatar-2.svg';
import avatar_3 from '../../assets/avatars/avatar-3.svg';
import avatar_4 from '../../assets/avatars/avatar-4.svg';
import avatar_5 from '../../assets/avatars/avatar-5.svg';
import avatar_6 from '../../assets/avatars/avatar-6.svg';
import avatar_7 from '../../assets/avatars/avatar-7.svg';
import avatar_8 from '../../assets/avatars/avatar-8.svg';
import avatar_9 from '../../assets/avatars/avatar-9.svg';

const avatars = {
  avatar_1,
  avatar_2,
  avatar_3,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
  avatar_8,
  avatar_9,
}

const avatarImage = `avatar_${(Math.floor(Math.random() * 9) + 1)}`;

function Header({ battery, finished, name }) {
  return (
    <section className="header">
      <div className="header__userAvatar">
        <div className="header__userImageWrapper">
          <img src={avatars[avatarImage]} />
        </div>
        <span>{name || window.KUBIT_USERNAME}</span>
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
