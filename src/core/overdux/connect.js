import Overdux from './index';

/**
 * MapStateToProps Description
 * @name MapStateToProps
 * @function
 * @param {Object} state - The state that is inside the Store
 * @param {Object} ownProps - The props that the component is receiving
 */

/**
 * MapDispatchToProps Description
 * @name MapDispatchToProps
 * @function
 * @param {Function} dispatch - Function that will trigger some action inside overdux
 * @param {Object} ownProps - The props that the component is receiving
 */

/**
 * @param {MapStateToProps} mapStateToProps - Gets the props from the state and the props that the component is receiving so the developer can decide what info he wants in the component
 * @param {MapDispatchToProps} mapDispatchToProps Defines the actions that will enter as props in the component
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  return (component) => {
    const componentProps = mapStateToProps(Overdux.store.state, component.props);
    const componentActions = mapDispatchToProps(Overdux.store.dispatch, component.props);

    const nonFunctions = [];

    for (const componentAction in componentActions) {
      if (!(componentActions[componentAction] instanceof Function)) {
        nonFunctions.concat(componentAction);
      }
    }

    nonFunctions.forEach((nfunc) => {
      delete componentActions[nfunc];
    });

    component.props = { ...componentProps, ...componentActions };

    return component;
  };
}
