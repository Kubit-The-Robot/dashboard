import OverReact from 'overreact';

import dog1 from 'assets/animations/pets/dog-1.json';

function Dog1(props) {
  return (
    <div className="pet-dog-1">
      <lottie-player
        id="dog-1"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={dog1}
      >
      </lottie-player>
    </div>
  );
}

export default Dog1;