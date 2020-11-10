import OverReact from 'overreact';

import './Shop.scss';

import foodIndicator from 'assets/ui/food.svg';

// Foods Items
import barbecueImg from 'assets/items/foods/barbecue.svg';
import carrotsImg from 'assets/items/foods/carrots.svg';
import chikenImg from 'assets/items/foods/chiken.svg';
import eggsBaconImg from 'assets/items/foods/eggs-bacon.svg';
import eggsImg from 'assets/items/foods/eggs.svg';
import fishImg from 'assets/items/foods/fish.svg';
import frenchFriesImg from 'assets/items/foods/french-fries.svg';
import hamburgerImg from 'assets/items/foods/hamburger.svg';
import hotdogImg from 'assets/items/foods/hotdog.svg';
import pizzaImg from 'assets/items/foods/pizza.svg';
import saladImg from 'assets/items/foods/salad.svg';
import salmonImg from 'assets/items/foods/salmon.svg';
import soupImg from 'assets/items/foods/soup.svg';
import spaghettiImg from 'assets/items/foods/spaghetti.svg';
import steakImg from 'assets/items/foods/steak.svg';
import wrapperImg from 'assets/items/foods/wrapper.svg';

// Stage Items
import thumbAbstractBlue from 'assets/items/stages/thumb-abstract-blue.jpg';
import thumbAbstractLight from 'assets/items/stages/thumb-abstract-light.jpg';
import thumbAbstractPurple from 'assets/items/stages/thumb-abstract-purple.jpg';
import thumbAbstractRed from 'assets/items/stages/thumb-abstract-red.jpg';
import thumbAbstractYellow from 'assets/items/stages/thumb-abstract-yellow.jpg';
import thumbCozmo from 'assets/items/stages/thumb-cozmo.jpg';
import thumbKubitRoom from 'assets/items/stages/thumb-kubit-room.jpg';
import thumbMars from 'assets/items/stages/thumb-mars.jpg';
import thumbPluto from 'assets/items/stages/thumb-pluto.jpg';
import thumbShip from 'assets/items/stages/thumb-ship.jpg';
import thumbSpace from 'assets/items/stages/thumb-space.jpg';
import thumbVenus from 'assets/items/stages/thumb-venus.jpg';

// Sound SFX
import clickSFX from 'assets/sfx/coin.wav';
import backSFX from 'assets/sfx/back.wav';
import stageSFX from 'assets/sfx/transition.wav';
import foodSFX from 'assets/sfx/life-up.wav';
import blockSFX from 'assets/sfx/wrong-sfx.wav';

const clickSound = new Audio(clickSFX);
const backSound = new Audio(backSFX);
const stageSound = new Audio(stageSFX);
const foodSound = new Audio(foodSFX);
const blockSound = new Audio(blockSFX);

const itemsImageMapper = {
  'alien-1': '',
  'cat-1': '',
  'dog-1': '',
  'battery': '',
  'barbecue': barbecueImg,
  'carrots': carrotsImg,
  'chicken': chikenImg,
  'eggs': eggsImg,
  'eggs-bacon': eggsBaconImg,
  'fish': fishImg,
  'french-fries': frenchFriesImg,
  'hamburger': hamburgerImg,
  'hotdog': hotdogImg,
  'pizza': pizzaImg,
  'salad': saladImg,
  'salmon': salmonImg,
  'soup': soupImg,
  'spaghetti': spaghettiImg,
  'steak': steakImg,
  'wrapper': wrapperImg,
  'abstract-blue': thumbAbstractBlue,
  'abstract-light': thumbAbstractLight,
  'abstract-purple': thumbAbstractPurple,
  'abstract-yellow': thumbAbstractYellow,
  'abstract-red': thumbAbstractRed,
  'cozmo': thumbCozmo,
  'kubit-room': thumbKubitRoom,
  'mars': thumbMars,
  'pluto': thumbPluto,
  'ship': thumbShip,
  'space': thumbSpace,
  'venus': thumbVenus,
}

function Shop({
  title = '',
  items = [],
  shopType = '',
  currentSelected = '',
  onCloseHandler = () => {},
  onClickHandler = () => {},
}) {
  const handleClose = (e) => {
    e.preventDefault();
    backSound.play();

    onCloseHandler();
  }

  const handleClick = (e) => {
    const slug = e.currentTarget.id;
    const elementClassList = e.currentTarget.classList;
    const isDisabled = elementClassList.contains('is-disabled');

    if (shopType === 'stage') {
      stageSound.play();
      onCloseHandler();
    }
    else if (shopType === 'food') {
      if (!isDisabled) {
        foodSound.play();
        onCloseHandler();
      }
      else {
        blockSound.play();
      }
    }

    onClickHandler(slug);
  }

  return (
    <div className="shop shop--foods">
      <div className="shop__header">
        {title}

        <button
          className="shop__close"
          onClick={handleClose}
        >
          <i className="fa fa-close"></i>
        </button>
      </div>

      <div className="shop__container">
        <div className="shop__items">
          {items.map(({ name, slug, type, value, quantity = 0 }) => {
            const isSelected = (currentSelected === slug) ? 'is-active' : '';
            const isDisabled = (type === 'hungry' && quantity === 0) ? 'is-disabled' : '';
            const isHungry = (type === 'hungry') ? 'is-hungry' : '';

            return (
              <button
                className={`shop__item ${isSelected} ${isDisabled} ${isHungry}`}
                id={slug}
                onClick={handleClick}
              >
                <div className="shop__image">
                  <img src={itemsImageMapper[slug]} alt="" />
                </div>

                {name && type != 'hungry' ? (<div className="shop__name">{name}</div>) : ''}

                {type === 'hungry'
                  ? (
                    <div className="shop__info">
                      <div className="shop__info__bonus">
                        <div className="shop__info__icon">
                          <img src={foodIndicator} alt="Ícone de comida"/>
                        </div>
                        +{value}
                      </div>

                      <div className="shop__info__quantity">
                        x{quantity}
                      </div>
                    </div>
                  ): ''
                }
              </button>
            )}
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
