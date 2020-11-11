import OverReact from 'overreact';

import cat2 from 'assets/animations/pets/cat-2.json';

function Cat2(props) {
  return (
    <div className="pet-cat-2">
      <lottie-player
        id="cat-2"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={cat2}
      >
      </lottie-player>
    </div>
  );
}

export default Cat2;