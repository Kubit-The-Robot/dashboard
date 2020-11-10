import OverReact from 'overreact';
const { useEffect } = OverReact;

import angry from 'assets/animations/angry.json';

function Angry(props) {
  useEffect(() => {
  }, []);

  return (
    <div {...props}>
      <lottie-player
        id="kubit-angry"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={angry}
      >
      </lottie-player>
    </div>
  );
}

export default Angry;