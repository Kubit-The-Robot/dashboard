import OverReact from 'overreact';
import loadingSrc from 'assets/kubit/kubit-idle-loading';

function Animation(props) {
  return (
    <div {...props}>
      <lottie-player
        id="kubit-username"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={loadingSrc}
      ></lottie-player>
    </div>
  );
}

export default Animation;
