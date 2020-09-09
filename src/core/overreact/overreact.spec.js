import { createElement } from './overreact';

describe('createElement', () => {
  it('should return a DOM object', () => {
    const element = createElement('div');

    expect(element).toEqual({
      type: 'div',
      props: { children: [] },
    });
  });

  it('should return a DOM object with an props and children', () => {
    const element = createElement('div', {
      src: 'path/file.txt',
      children: [],
    });

    expect(element).toEqual({
      type: 'div',
      props: {
        src: 'path/file.txt',
        children: [],
      },
    });
  });
});
