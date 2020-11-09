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
  'hamburguer': hamburgerImg,
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

const data = [
  {
    id: 1,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 2,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 3,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 4,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
  {
    id: 5,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 6,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 7,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 8,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
  {
    id: 9,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 10,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
  {
    id: 11,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
  {
    id: 12,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
  {
    id: 13,
    equiped: false,
    slug: 'pizza',
    type: 'food',
  },
  {
    id: 14,
    equiped: true,

    slug: 'pizza',
    type: 'food' },
];

function Shop({ title = '', type = 'hungry', onCloseHandler = () => {} }) {
  const handleClose = (e) => {
    e.preventDefault();

    onCloseHandler();
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
          {data.map(({ id, slug }) => (
            <button
              className="shop__item"
              data-id={id}
            >
              <div className="shop__image">
                <img src={itemsImageMapper[slug]} alt="" />
              </div>

              {type === 'hungry' && (
                <div className="shop__info">
                  <div className="shop__info__bonus">
                    <div className="shop__info__icon">
                      <img src={foodIndicator} alt="Ícone de comida"/>
                    </div>
                    +10
                  </div>

                  <div className="shop__info__quantity">
                    x3
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
