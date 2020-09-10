// noinspection ES6UnusedImports
import OverReact from './index';

describe('createElement', () => {
  it('should return an object of type div without child elements', () => {
    const element = (<div />);

    expect(element).toMatchSnapshot();
  });

  it('should return a DOM object with an props and children', () => {
    const element = (<div>Oi, eu sou um texto</div>);

    expect(element).toMatchSnapshot();
  });

  it('should return a DOM object with an array of DOM objects', () => {
    const element = (
      <div>
        <strong>Texto em negrito</strong>
        <i>Text em itálico</i>
      </div>
    );

    expect(element).toMatchSnapshot();
  });
});
