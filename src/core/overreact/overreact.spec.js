import OverReact from './index';

describe('createElement', () => {
  it('should return a DOM object', () => {
    const element = OverReact.createElement('div');

    expect(element).toEqual({
      type: 'div',
      props: { children: [] },
    });
  });

  it('should return a DOM object with an props and children', () => {
    const element = OverReact.createElement(
      'div',
      { id: 'foo' },
      OverReact.createElement('strong', null, 'bar'),
      OverReact.createElement('Oi, eu sou um texto')
    );

    expect(element).toEqual({
      type: 'div',
      props: {
        id: 'foo',
        children: [
          {
            type: 'strong',
            props: {
              children: [
                {
                  type: 'TEXT_ELEMENT',
                  props: { nodeValue: 'bar', children: [] },
                },
              ],
            },
          },
          { type: 'Oi, eu sou um texto', props: { children: [] } },
        ],
      },
    });
  });
});
