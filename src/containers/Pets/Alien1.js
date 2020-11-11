import OverReact from 'overreact';

import alien1 from 'assets/animations/pets/alien-1.json';

function Alien1(props) {
  return (
    <div className="pet-alien-1">
      <lottie-player
        id="alien-1"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={alien1}
      >
      </lottie-player>
    </div>
  );
}

export default Alien1;