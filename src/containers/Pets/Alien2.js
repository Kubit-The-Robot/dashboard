import OverReact from 'overreact';

import alien2 from 'assets/animations/pets/alien-2.json';

function Alien2(props) {
  return (
    <div className="pet-alien-2">
      <lottie-player
        id="alien-2"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={alien2}
      >
      </lottie-player>
    </div>
  );
}

export default Alien2;