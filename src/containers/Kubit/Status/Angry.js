import OverReact from 'overreact';
const { useEffect } = OverReact;

import angry from 'assets/animations/angry.json';
import angryEffect from 'assets/animations/effects/emotion-angry.json';

function Angry(props) {
  useEffect(() => {
  }, []);

  return (
    <div {...props}>
      <div className="kubit__reaction angry">
        <lottie-player
          id="angry"
          autoplay
          loop
          speed={2}
          preserveAspectRatio="xMidYMid meet"
          src={angryEffect}
        >
        </lottie-player>
      </div>

      <lottie-player
        id="kubit-angry"
        autoplay
        loop
        preserveAspectRatio="xMidYMid meet"
        src={angry}
      >
      </lottie-player>
    </div>
  );
}

export default Angry;