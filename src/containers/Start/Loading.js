import OverReact from 'overreact';
import isIdle from 'assets/animations/isIdle.json';

function Loading(props) {
  return (
    <div {...props}>
      <lottie-player
        id="kubit-intro"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={isIdle}
      ></lottie-player>
    </div>
  );
}

export default Loading;
