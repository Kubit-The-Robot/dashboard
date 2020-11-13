import OverReact from 'overreact';

import './Lessons.scss';

function Lessons(props) {
  return (
    <section {...props} className="lessons">
      <h2>Atividades</h2>
      <div className="lessons__wrapper">
        <div className="lessons__slider">
          <div className="lessons__padding">
            <div className="lessons__item">
              <div className="lessons__itemContent">
                <div className="lessons__day">Segunda-feira</div>
                <h2>Matemática</h2>
                <button>Toque para começar</button>
              </div>
            </div>
          </div>

          <div className="lessons__padding">
            <div className="lessons__item">
              <div className="lessons__itemContent">
                <div className="lessons__day">Segunda-feira</div>
                <h2>Português</h2>
                <button>Toque para começar</button>
              </div>
            </div>
          </div> 

          <div className="lessons__padding">
            <div className="lessons__item">
              <div className="lessons__itemContent">
                <div className="lessons__day">Segunda-feira</div>
                <h2>Artes</h2>
                <button>Toque para começar</button>
              </div>
            </div>
          </div> 

          <div className="lessons__padding">
            <div className="lessons__item">
              <div className="lessons__itemContent">
                <div className="lessons__day">Segunda-feira</div>
                <h2>Inglês</h2>
                <button>Toque para começar</button>
              </div>
            </div>
          </div> 

          <div className="lessons__padding">
            <div className="lessons__item">
              <div className="lessons__itemContent">
                <div className="lessons__day">Segunda-feira</div>
                <h2>Ciências</h2>
                <button>Toque para começar</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}

export default Lessons;
