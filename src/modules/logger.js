import differ from 'deep-diff';

const setup = {
  level: 'log',
  logger: console,
  stateTransformer: (state) => state,
  actionTransformer: (action) => action,
  errorTransformer: (error) => error,
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
};

const dictionary = {
  E: {
    color: '#2196F3',
    text: 'CHANGED:',
  },
  N: {
    color: '#4CAF50',
    text: 'ADDED:',
  },
  D: {
    color: '#F44336',
    text: 'DELETED:',
  },
  A: {
    color: '#2196F3',
    text: 'ARRAY:',
  },
};

/**
 *
 * Render objects diff
 * @param { object } diff
 */
function render(diff) {
  const { kind, path, lhs, rhs, index, item } = diff;

  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '→', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [`${path.join('.')}[${index}]`, item];
    default:
      return [];
  }
}

/**
 * Render de diff style based on dictionary
 * @param { string } kind
 */
function style(kind) {
  return `color: ${dictionary[kind].color}; font-weight: bold`;
}

/**
 * Get log level string based on supplied params
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level) {
    case 'object':
      return typeof level[type] === 'function' ? level[type](...payload) : level[type];

    case 'function':
      return level(action);

    default:
      return level;
  }
}

function defaultTitleFormatter(action) {
  const parts = ['action'];

  parts.push(`%c${String(action.type)}`);

  return parts.join(' ');
}

/**
 * Logs events into console
 * @param {string} action
 * @param {object} prevState
 * @param {object} nextState
 */
export function logger(action, prevState, nextState) {
  const { colors, level, actionTransformer } = setup;
  const diff = differ(prevState, nextState);
  const formattedAction = actionTransformer(action);

  const actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
  const nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');
  const prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');

  if (action.type) {
    console.groupCollapsed(defaultTitleFormatter(action), 'color: gray; font-weight: lighter;');

    if (prevStateLevel) {
      console[prevStateLevel](
        '%c prev state',
        `color: ${colors.prevState(prevState)}; font-weight: bold`,
        prevState
      );
    }

    if (actionLevel) {
      console[actionLevel](
        '%c action    ',
        `color: ${colors.action(formattedAction)}; font-weight: bold`,
        formattedAction
      );
    }

    if (nextStateLevel) {
      console[nextStateLevel](
        '%c next state',
        `color: ${colors.nextState(nextState)}; font-weight: bold`,
        nextState
      );
    }

    if (diff) {
      console.group('%c diff', `color: ${colors.prevState(prevState)}; font-weight: bold`);

      diff.forEach((elem) => {
        const { kind } = elem;
        const output = render(elem);

        console[level](`%c ${dictionary[kind].text}`, style(kind), ...output);
      });
    } else {
      console[level]('—— no diff ——');
    }

    try {
      console.groupEnd();
    } catch (e) {
      console[level]('—— diff end —— ');
    }

    console.groupEnd();
  }
}
