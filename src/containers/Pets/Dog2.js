import OverReact from 'overreact';

import dog2 from 'assets/animations/pets/dog-2.json';

function Dog2(props) {
  return (
    <div className="pet-dog-2">
      <lottie-player
        id="dog-2"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={dog2}
      >
      </lottie-player>
    </div>
  );
}

export default Dog2;