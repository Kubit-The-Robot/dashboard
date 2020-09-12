/**
 * @param { function } fn
 * @param { number } wait
 */
export function throttle(fn, wait = 100) {
  let timer = null;

  return function(...args) {
    if (timer == null) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

/**
 *
 * @param { function } fn
 * @param { number } wait
 * @param { boolean } immediate
 */
export function debounce(fn, wait, immediate) {
  let timeout;

  return function() {
    const context = this,
      args = arguments;
    const later = function() {
      timeout = null;

      if (!immediate) {
        fn.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      fn.apply(context, args);
    }
  };
}
