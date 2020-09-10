import {
  hasDepsChanged,
  isEvent,
  isFunctionComponent,
  isGone,
  isNew,
  isProperty,
  toCssProperty,
  toCssText
} from './helpers';

/**
 * Creates an DOM object from its arguments
 * @param {string} type
 * @param {Object} [props]
 * @param children
 * @returns {{type: *, props: {children: *[]}}}
 */
export function createElement(type, props = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children
        .flat()
        .map((child) => typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

/**
 * Creates a DOM node using the element type, and then append the new node to the container.
 * Keep track of the root of the fiber tree.
 * Puts the current element on the nextUnitOfWork queue.
 * @param {object} element
 * @param {object} container
 */
export function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  };

  deletions = [];
  nextUnitOfWork = wipRoot;
}

/**
 * Creates a text node if there's just a string as a child.
 * @param {string} text
 * @returns {{type: string, props: {nodeValue: string, children: []}}}
 */
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

/**
 * Performs the work and returns the next unit of work.
 * The render function creates the root fiber and set it as the nextUnitOfWork.
 * We’ll have one fiber for each element and each fiber will be a unit of work.
 * If the fiber doesn’t have a child, we use the sibling as the next unit of work.
 * It Also checks if it's a Function Component or an object
 * @param {object} fiber
 */
function performUnitOfWork(fiber) {
  if (isFunctionComponent(fiber)) {
    updateFunctionComponent(fiber);
  }
  else {
    updateHostComponent(fiber);
  }

  if (fiber.child) {
    return fiber.child;
  }

  let nextFiber = fiber;

  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }

    nextFiber = nextFiber.parent;
  }
}

/**
 * Called when browser main thread is idle.
 * If there's not a next unit of work we commit the whole fiber tree to the DOM.
 * @param {object} deadline
 */
export function workLoop(deadline) {
  let shouldYield = false;

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  window.requestIdleCallback(workLoop);
}

/**
 * Commit the entire fiber tree to the DOM.
 */
function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);

  currentRoot = wipRoot;
  wipRoot = null;
}

/**
 * Recursively appends all nodes to the dom
 * handles the effectTags property.
 * @param {object} fiber
 */
function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParentFiber = fiber.parent;

  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }

  const domParent = domParentFiber.dom;

  if (fiber.effectTag === "PLACEMENT") {
    if (fiber.dom !== null) {
      domParent.appendChild(fiber.dom);
    }

    runEffects(fiber);
  }
  else if (fiber.effectTag === "UPDATE") {
    cancelEffects(fiber);

    if (fiber.dom !== null) {
      updateDom(fiber.dom, fiber.alternate.props, fiber.props);

      domParent.appendChild(fiber.dom);
    }

    runEffects(fiber);
  }
  else if (fiber.effectTag === "DELETION") {
    cancelEffects(fiber);
    commitDeletion(fiber, domParent);

    return;
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

/**
 * Reconciles the old fibers with the new elements
 * @param {object} wipFiber
 * @param {Array} elements
 */
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = (wipFiber.alternate && wipFiber.alternate.child);
  let previousSibling = null;

  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    const sameType = (oldFiber && element && element.type === oldFiber.type);
    let newFiber = null;

    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      }
    }

    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      }
    }

    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      wipFiber.child = newFiber;
    }
    else if (element) {
      previousSibling.sibling = newFiber;
    }

    previousSibling = newFiber;
    index++;
  }
}

/**
 * Compares the props from the old fiber to the props of the new fiber.
 * Removes the props that are gone, and set the props that are new or changed.
 * @param {object} dom
 * @param {object} prevProps
 * @param {object} nextProps
 */
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => { dom[name] = "" });

  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      if (name === "style") {
        let style = JSON.parse(JSON.stringify(nextProps[name]));
        Object.keys(style).forEach(toCssProperty(style));

        dom.style.cssText = Object.keys(style)
          .map(toCssText(style))
          .join("")
      }
      else {
        dom[name] = nextProps[name]
      }
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

/**
 * Creates and reconcile fiber
 * @param {object} fiber
 */
function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  reconcileChildren(fiber, fiber.props.children);
}

/**
 * Runs the Function Component to get it' children.
 * Once it have the children, the reconciliation works in the same way
 * @param {object | function} fiber
 */
function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];

  const children = [fiber.type(fiber.props)]

  reconcileChildren(fiber, children);
}

/**
 *
 * @param {object} fiber
 * @returns {Text|*}
 */
function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(fiber.type)

  updateDom(dom, {}, fiber.props)

  return dom;
}

function cancelEffects(fiber) {
  if (fiber.hooks) {
    fiber.hooks
      .filter(
        hook => hook.tag === "effect" && hook.cancel
      )
      .forEach(effectHook => {
        effectHook.cancel()
      })
  }
}

function runEffects(fiber) {
  if (fiber.hooks) {
    fiber.hooks
      .filter(
        hook => hook.tag === "effect" && hook.effect
      )
      .forEach(effectHook => {
        effectHook.cancel = effectHook.effect()
      })
  }
}

/**
 * Find a child with a DOM node and remove it
 * @param fiber
 * @param domParent
 */
function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  }
  else {
    commitDeletion(fiber.child, domParent)
  }
}

/**
 * useEffect
 * @param effect
 * @param deps
 */
export function useEffect(effect, deps) {
  const oldHook = wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex];
  const hasChanged = hasDepsChanged(oldHook ? oldHook.deps : undefined, deps);
  const hook = {
    tag: "effect",
    effect: hasChanged ? effect : null,
    cancel: hasChanged && oldHook && oldHook.cancel,
    deps,
  };

  wipFiber.hooks.push(hook)
  hookIndex++
}

/**
 * useState Hook
 * @param {*} initial
 * @returns {(*|setState)[]}
 */
export function useState(initial) {
  const oldHook = wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };
  const actions = oldHook ? oldHook.queue : [];

  actions.forEach(action => { hook.state = action(hook.state) });

  const setState = action => {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;

  return [hook.state, setState];
}

let currentRoot = null;
let deletions = null;
let hookIndex = null
let nextUnitOfWork = null;
let wipFiber = null
let wipRoot = null;

(function() {
  window.requestIdleCallback(workLoop);
})()
