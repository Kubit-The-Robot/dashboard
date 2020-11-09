import OverReact from 'overreact';

import { connect } from 'store';

import StatusBar from './StatusBar';

import foodIcon from 'assets/ui/food.svg';
import heartIcon from 'assets/ui/heart-1.svg';
import starIcon from 'assets/ui/star.svg';
import thunderIcon from 'assets/ui/thunder.svg';

import './Status.scss';

function Status({
  energy,
  happiness,
  experience,
  hungry,
}) {
  return (
    <div className="status">
      <div className="status__group status__group--left">
        <StatusBar
          type="energy"
          value={energy}
          svgUrl={thunderIcon}
        />

        <StatusBar
          type="experience"
          value={experience}
          svgUrl={starIcon}
        />
      </div>

      <div className="status__group status__group--right">
        <StatusBar
          type="hungry"
          value={hungry}
          svgUrl={foodIcon}
        />

        <StatusBar
          type="happiness"
          value={happiness}
          svgUrl={heartIcon}
        />
      </div>
    </div>
  );
}

export default Status;
