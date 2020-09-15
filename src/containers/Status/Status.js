import OverReact from 'overreact';

import { connect } from 'store';

import StatusBar from './StatusBar';

import { addEnergy } from 'actions';

import thunderIcon from 'assets/ui/thunder.svg';
import heartIcon from 'assets/ui/heart-1.svg';
import foodIcon from 'assets/ui/food.svg';
import starIcon from 'assets/ui/star.svg';

import './Status.scss';

function Status({ energy, happiness, experience, hungry, addEnergyDispatcher }) {
  const handleClick = (e) => {
    e.preventDefault;

    addEnergyDispatcher(5);
  }

  return (
    <div className="status">
      <div className="status__group status__group--left">
        <StatusBar
          type="energy"
          value={energy}
          svgUrl={thunderIcon}
          onClickHandler={handleClick}
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

const mapStateToProps = (state) => ({
  energy: state.kubit.energy,
  happiness: state.kubit.happiness,
  experience: state.player.experience,
  hungry: state.kubit.hungry,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEnergyDispatcher: (value) => {
      dispatch(addEnergy(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
