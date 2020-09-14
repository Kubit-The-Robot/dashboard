import OverReact from 'overreact';
import store from 'store';

function Canvas({ store }) {
  const { dispatch } = store;

  return (
    <div
      className="Canvas"
    >
      <lottie-player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_cbXcz6.json"
      ></lottie-player>
    </div>
  );
}

export default Canvas;
