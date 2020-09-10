/**
 * @module helpers
 * OverReact Helpers
 */

/**
 * Checks if previous and next dependecies has changed
 * @param {Array} prevDeps
 * @param {Array} nextDeps
 * @returns {boolean|*}
 */
export const hasDepsChanged = (prevDeps, nextDeps) => (
  !prevDeps ||
  !nextDeps ||
  prevDeps.length !== nextDeps.length ||
  prevDeps.some((dep, index) => dep !== nextDeps[index])
);

/**
 * Checks if prop is an event
 * @param {string} key
 * @returns {*|boolean}
 */
export const isEvent = (key) => key.startsWith("on");

/**
 * Checks if prop is style
 * @param {string} key
 * @returns {*|boolean}
 */
export const isStyle = (key) => key === "style";
/**
 * Checks if an element is a function component
 * @param type
 * @returns {boolean}
 */
export const isFunctionComponent = ({ type }) => (type instanceof Function);

/**
 * Checks if the next key has been removed
 * @param prev
 * @param next
 * @returns {function(*): boolean}
 */
export const isGone = (prev, next) => (key) => !(key in next);

/**
 * Checks if key is a property
 * @param {string} key
 * @returns {boolean|boolean}
 */
export const isProperty = (key) => (key !== "children" && !isEvent(key) && !isStyle(key));

/**
 * Checks if the next key is diferent from the previous
 * @param {object} prev
 * @param {object} next
 * @returns {function(*): boolean}
 */
export const isNew = (prev, next) => (key) => prev[key] !== next[key];

/**
 * @param {object} style
 * @returns {function(*): string}
 */
export const toCssText = (style) => (csskey) => `${csskey}:${style[csskey]}; `

/**
 *
 * @param style
 * @returns {function(...[*]=)}
 */
export const toCssProperty = (style) => (key) => {
  let newKey = key.replace(/[A-Z]/g, (match) => {
    return "-" + match.toLowerCase();
  });

  if (newKey !== key) {
    style[newKey] = style[key];

    delete style[key];
  }
}
