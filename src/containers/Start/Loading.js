import OverReact from 'overreact';
import loadingSrc from 'assets/kubit/kubit-idle-floating';

function Loading(props) {
  return (
    <div {...props}>
      <lottie-player
        id="kubit-intro"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={loadingSrc}
      ></lottie-player>
    </div>
  );
}

export default Loading;
