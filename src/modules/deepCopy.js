/**
 * Creates a copy of the object without any references
 * is risky when your data structure is not a valid json
 * @param {object} obj
 */
export function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  return JSON.parse(JSON.stringify(obj));
}