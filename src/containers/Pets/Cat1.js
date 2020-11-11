import OverReact from 'overreact';

import cat1 from 'assets/animations/pets/cat-1.json';

function Cat1(props) {
  return (
    <div className="pet-cat-1">
      <lottie-player
        id="cat-1"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={cat1}
      >
      </lottie-player>
    </div>
  );
}

export default Cat1;