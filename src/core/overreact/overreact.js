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
      children,
    },
  };
}
