import OverReact from 'overreact';

import StatusBar from './StatusBar';

import thunderIcon from 'assets/ui/thunder.svg';
import heartIcon from 'assets/ui/heart-1.svg';
import foodIcon from 'assets/ui/food.svg';
import starIcon from 'assets/ui/star.svg';

import './Status.scss';

const value = 50;

function Status() {
  return (
    <div className="status">
      <div className="status__group status__group--left">
        <StatusBar
          type="energy"
          value={value}
          svgUrl={thunderIcon}
        />

        <StatusBar
          type="energy"
          value={value}
          svgUrl={starIcon}
        />
      </div>

      <div className="status__group status__group--right">
        <StatusBar
          type="energy"
          value={value}
          svgUrl={foodIcon}
        />

        <StatusBar
          type="life"
          value={value}
          svgUrl={heartIcon}
        />
      </div>
    </div>
  )
}

export default Status;