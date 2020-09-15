import OverReact from 'overreact';
import logoSrc from './logo.json';

function LogoAnimated(props) {
  return (
    <div {...props}>
      <lottie-player
        id="logo"
        autoplay
        preserveAspectRatio="xMidYMid slice"
        src={logoSrc}
      >
      </lottie-player>
    </div>
  )
}

export default LogoAnimated;