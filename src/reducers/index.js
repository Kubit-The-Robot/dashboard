const initialState = {
  test: {
    testState: 5,
  },
};

export function testReducer(state = initialState, action) {
  console.log(state, action);
  return state;
}
