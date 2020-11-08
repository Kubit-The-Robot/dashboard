import OverReact from 'overreact';

import './Lessons.scss';

function Lessons(props) {
  return (
    <section {...props} className="lessons">
      <div className="lessons__wrapper">
        <div className="lessons__slider">
          <div className="lessons__item">
            <div className="lessons__itemImage">
              <img src="https://i.pinimg.com/originals/bb/a6/49/bba649471c14e25e2cc1ab18ab9f3406.jpg" />
            </div>
            <div className="lessons__itemContent">
              <h2>Kubit, The Robot</h2>
              <button>Toque para começar</button>
            </div>
          </div>

          <div className="lessons__item">
            <div className="lessons__itemImage">
              <img src="https://i.pinimg.com/originals/bb/a6/49/bba649471c14e25e2cc1ab18ab9f3406.jpg" />
            </div>
            <div className="lessons__itemContent">
              <small>Segunda-feira</small>
              <h2>Matemática</h2>
              <button>Toque para começar</button>
            </div>
          </div>

          <div className="lessons__item">
            <div className="lessons__itemImage">
              <img src="https://i.pinimg.com/originals/bb/a6/49/bba649471c14e25e2cc1ab18ab9f3406.jpg" />
            </div>
            <div className="lessons__itemContent">
              <small>Terça-feira</small>
              <h2>Português</h2>
              <button>Toque para começar</button>
            </div>
          </div>

          <div className="lessons__item">
            <div className="lessons__itemImage">
              <img src="https://i.pinimg.com/originals/bb/a6/49/bba649471c14e25e2cc1ab18ab9f3406.jpg" />
            </div>
            <div className="lessons__itemContent">
              <small>Quarta-feira</small>
              <h2>Ciências</h2>
              <button>Toque para começar</button>
            </div>
          </div>

          <div className="lessons__item">
            <div className="lessons__itemImage">
              <img src="https://i.pinimg.com/originals/bb/a6/49/bba649471c14e25e2cc1ab18ab9f3406.jpg" />
            </div>
            <div className="lessons__itemContent">
              <small>Quinta-feira</small>
              <h2>Filosofia</h2>
              <button>Toque para começar</button>
            </div>
          </div>

          <div className="lessons__sliderPadding">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lessons;
