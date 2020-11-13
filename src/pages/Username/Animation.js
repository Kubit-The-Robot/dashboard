import OverReact from 'overreact';
import isLoading from 'assets/animations/isLoading.json';

function Animation(props) {
  return (
    <div {...props}>
      <lottie-player
        id="kubit-username"
        autoplay
        loop
        preserveAspectRatio="xMidYMid slice"
        src={isLoading}
      ></lottie-player>
    </div>
  );
}

export default Animation;
