/**
 * @param {string} type
 * @param {Object} [props]
 * @param children
 * @returns {{type: *, props: {children: *[]}}}
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

/**
 * @param {string} text
 * @returns {{type: string, props: {nodeValue: *, children: []}}}
 */
export function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export const createFragment = (props, ...children) => {
  return children
}

export function render(element, container) {
  const DOM =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== 'children';

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      DOM[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, DOM));

  container.appendChild(DOM);
}
