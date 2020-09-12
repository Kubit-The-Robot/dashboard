const initialState = { count: 0 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action.type);
      return {
        count: state.count + 1,
      };

    case 'DECREMENT':
      console.log(action.type);
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default countReducer;
