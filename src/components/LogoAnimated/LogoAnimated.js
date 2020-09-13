import OverReact from 'overreact';
import kubitLogoSource from './LogoAnimated.json';

function LogoAnimated() {

  return (
    <lottie-player
      autoplay
      loop
      src={kubitLogoSource}
    >
    </lottie-player>
  )
}

export default LogoAnimated;